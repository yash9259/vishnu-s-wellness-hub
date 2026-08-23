import { Phone, MessageCircle, Download, Share2, MapPin, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { portraitPhoto } from "@/data/gallery";
import { profile, whatsappLink, downloadVCard } from "@/lib/profile";

export function Hero() {
  const share = async () => {
    const data = {
      title: `${profile.name} — Kangen Water`,
      text: "Kangen Water demonstrations, device guidance and business opportunity in Hyderabad.",
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* dismissed */
      }
      return;
    }
    await navigator.clipboard.writeText(data.url);
    toast.success("Card link copied");
  };

  return (
    <header className="relative overflow-hidden bg-water text-deep-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-24 h-72 w-72 rounded-full bg-aqua/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-aqua/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-5xl gap-10 px-5 pt-14 pb-16 md:grid-cols-[auto_1fr] md:items-center md:px-8 md:pt-20 md:pb-24">
        <div className="mx-auto md:mx-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-aqua/40 shadow-lift md:h-52 md:w-52">
            <img
              src={portraitPhoto}
              alt="Portrait of Vishnu Vardhan Reddy, Enagic Independent Distributor in Hyderabad"
              className="h-full w-full object-cover object-[30%_25%]"
              width={416}
              height={416}
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 text-xs tracking-[0.18em] uppercase">
            <Droplets className="h-3.5 w-3.5" aria-hidden />
            Enagic Independent Distributor
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold md:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-base text-deep-foreground/80 md:text-lg">
            Kangen Water demonstrations, device guidance and a purpose-driven business opportunity.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-deep-foreground/70">
            <MapPin className="h-4 w-4" aria-hidden />
            {profile.address}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button asChild size="lg" className="bg-aqua text-aqua-foreground hover:bg-aqua/90">
              <a href={`tel:${profile.phoneIntl}`}>
                <Phone className="h-4 w-4" aria-hidden />
                Call {profile.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-aqua/40 bg-transparent text-deep-foreground hover:bg-aqua/15 hover:text-deep-foreground"
            >
              <a
                href={whatsappLink("Hello Vishnu garu, I would like to know more about Kangen Water.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={downloadVCard}
              className="border-aqua/40 bg-transparent text-deep-foreground hover:bg-aqua/15 hover:text-deep-foreground"
            >
              <Download className="h-4 w-4" aria-hidden />
              Save contact
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={share}
              className="text-deep-foreground hover:bg-aqua/15 hover:text-deep-foreground"
            >
              <Share2 className="h-4 w-4" aria-hidden />
              Share
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
