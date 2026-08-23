import { Phone, MessageCircle } from "lucide-react";
import { profile, whatsappLink } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="bg-water pt-14 pb-28 text-deep-foreground md:pb-14">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="font-display text-2xl font-semibold">{profile.name}</p>
        <p className="mt-2 text-sm text-deep-foreground/75">{profile.role}</p>
        <p className="mt-1 text-sm text-deep-foreground/75">{profile.address}</p>
        <p className="font-display mt-6 text-lg text-deep-foreground/90">{profile.tagline}</p>
        <div className="mt-8 flex flex-col gap-2 border-t border-aqua/20 pt-6 text-xs text-deep-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Independent Enagic Distributor. Website
            coming soon.
          </p>
          <p>Personal experiences shared here are not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-3">
        <a
          href={`tel:${profile.phoneIntl}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </a>
        <a
          href={whatsappLink("Hello Vishnu garu, I would like to know more about Kangen Water.")}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-accent py-3 text-sm font-medium text-accent-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
