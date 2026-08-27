import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { appendEnquiryToSheet } from "@/lib/enquiries.functions";
import { profile, whatsappLink } from "@/lib/profile";
import { Reveal } from "./Reveal";

const interests = ["Kangen Water demo", "Device guidance", "Business opportunity", "Other"];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: interests[0]!,
    message: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please add your name and mobile number");
      return;
    }
    setSubmitting(true);
    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      interest: form.interest,
      message: form.message.trim() || null,
    };
    const [{ error }, sheetResult] = await Promise.all([
      supabase.from("enquiries").insert(payload),
      appendEnquiryToSheet({ data: payload }).catch((err: unknown) => {
        console.error("Google Sheets sync failed", err);
        return null;
      }),
    ]);
    setSubmitting(false);

    if (error && !sheetResult) {
      toast.error("Could not send right now — please use WhatsApp instead");
      return;
    }
    toast.success("Thank you! Vishnu will get back to you shortly.");
    setForm({ name: "", phone: "", email: "", interest: interests[0]!, message: "" });
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Get in touch</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Book a free demonstration
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you want to understand Kangen Water, choose a device, or explore the business
            opportunity — reach out and we'll find a time that suits you.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <a className="text-foreground hover:underline" href={`tel:${profile.phoneIntl}`}>
                {profile.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <a
                className="text-foreground hover:underline"
                href={whatsappLink("Hello Vishnu garu, I would like to book a Kangen Water demo.")}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <a
                className="text-foreground hover:underline"
                href={`https://maps.google.com/?q=${encodeURIComponent(profile.address)}`}
                target="_blank"
                rel="noreferrer"
              >
                {profile.address}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span className="text-muted-foreground">Website coming soon</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-lift md:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Mobile number</Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="10-digit mobile number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest">I am interested in</Label>
              <select
                id="interest"
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Anything you'd like me to know"
              />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={submitting}>
              {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
              Send enquiry
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Prefer chatting?{" "}
              <a
                className="text-primary underline-offset-4 hover:underline"
                href={whatsappLink("Hello Vishnu garu, I have an enquiry about Kangen Water.")}
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
