export const profile = {
  name: "Vishnu Vardhan Reddy",
  role: "Kangen Water • Enagic Independent Distributor",
  phone: "9885750369",
  phoneIntl: "+919885750369",
  whatsapp: "919885750369",
  address: "Vishnupuri Colony, Medipally, Hyderabad",
  city: "Hyderabad, Telangana, India",
  tagline: "Better Lifestyle. Better Opportunities. Better Income.",
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`;

export function buildVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:Reddy;Vishnu Vardhan;;;`,
    `FN:${profile.name}`,
    "ORG:Enagic Independent Distributor — Kangen Water",
    "TITLE:Independent Distributor",
    `TEL;TYPE=CELL:${profile.phoneIntl}`,
    `ADR;TYPE=WORK:;;${profile.address};;;;India`,
    "NOTE:Kangen Water demonstrations, device guidance, installation support and business opportunity guidance.",
    "END:VCARD",
  ].join("\n");
}

export function downloadVCard() {
  const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Vishnu-Vardhan-Reddy.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
