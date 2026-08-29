import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  phone: z.string().min(3).max(40),
  email: z.string().max(200).optional().nullable(),
  interest: z.string().max(120),
  message: z.string().max(2000).optional().nullable(),
});

const SPREADSHEET_ID = "1ZntErn7NrcGcmphyqL7uw_09BX1ZjBOn6cnBYg5gDNc";
const RANGE = "Enquiries!A:F";
const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

const buildRow = (data: z.infer<typeof schema>) => [
  new Date().toISOString(),
  data.name,
  data.phone,
  data.email ?? "",
  data.interest,
  data.message ?? "",
];

const base64Url = (input: ArrayBuffer | Uint8Array | string): string => {
  const bytes =
    typeof input === "string"
      ? new TextEncoder().encode(input)
      : input instanceof ArrayBuffer
        ? new Uint8Array(input)
        : input;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const pemToArrayBuffer = (pem: string): ArrayBuffer => {
  const base64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s+/g, "");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
};

interface ServiceAccount {
  client_email: string;
  private_key: string;
  token_uri?: string;
}

const getServiceAccountToken = async (sa: ServiceAccount): Promise<string> => {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claims = {
    iss: sa.client_email,
    scope: SHEETS_SCOPE,
    aud: sa.token_uri ?? "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const unsigned = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(claims))}`;

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(sa.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsigned),
  );
  const jwt = `${unsigned}.${base64Url(signature)}`;

  const tokenResponse = await fetch(sa.token_uri ?? "https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!tokenResponse.ok) {
    const errorBody = await tokenResponse.text();
    console.error(`Service account token failed [${tokenResponse.status}]: ${errorBody}`);
    throw new Error(`Google auth failed [${tokenResponse.status}]`);
  }
  const tokenData = (await tokenResponse.json()) as { access_token: string };
  return tokenData.access_token;
};

const appendViaServiceAccount = async (data: z.infer<typeof schema>) => {
  const raw = process.env["GOOGLE_SERVICE_ACCOUNT_JSON"];
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not set");
  const sa = JSON.parse(raw) as ServiceAccount;
  const accessToken = await getServiceAccountToken(sa);

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [buildRow(data)] }),
  });
  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Sheets append failed [${response.status}]: ${errorBody}`);
    throw new Error(`Sheets append failed [${response.status}]: ${errorBody}`);
  }
};

const appendViaLovableGateway = async (data: z.infer<typeof schema>) => {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !connectionKey) {
    throw new Error("Google Sheets connection is not configured");
  }

  const url = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": connectionKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [buildRow(data)] }),
  });
  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Sheets append failed [${response.status}]: ${errorBody}`);
    throw new Error(`Sheets append failed [${response.status}]: ${errorBody}`);
  }
};

const appendViaAppsScript = async (data: z.infer<typeof schema>) => {
  const url = process.env["APPS_SCRIPT_URL"];
  if (!url) throw new Error("APPS_SCRIPT_URL is not set");
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
    redirect: "follow",
  });
  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Apps Script append failed [${response.status}]: ${errorBody}`);
    throw new Error(`Apps Script append failed [${response.status}]: ${errorBody}`);
  }
};

export const appendEnquiryToSheet = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    // Order: Apps Script web app (simplest, works anywhere) → service account
    // (Vercel/any host) → Lovable connector gateway (Lovable hosting).
    if (process.env["APPS_SCRIPT_URL"]) {
      await appendViaAppsScript(data);
    } else if (process.env["GOOGLE_SERVICE_ACCOUNT_JSON"]) {
      await appendViaServiceAccount(data);
    } else {
      await appendViaLovableGateway(data);
    }
    return { ok: true as const };
  });
