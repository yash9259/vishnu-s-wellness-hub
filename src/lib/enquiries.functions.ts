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

export const appendEnquiryToSheet = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
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
      body: JSON.stringify({
        values: [
          [
            new Date().toISOString(),
            data.name,
            data.phone,
            data.email ?? "",
            data.interest,
            data.message ?? "",
          ],
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Sheets append failed [${response.status}]: ${errorBody}`);
      throw new Error(`Sheets append failed [${response.status}]: ${errorBody}`);
    }

    return { ok: true as const };
  });
