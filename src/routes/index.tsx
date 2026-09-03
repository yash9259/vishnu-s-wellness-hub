import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Download, Share2, ArrowRight, MapPin, Droplets } from "lucide-react";
import { toast } from "sonner";
import { portraitPhoto } from "@/data/gallery";
import { profile, whatsappLink, downloadVCard } from "@/lib/profile";
import { LanguageToggle, useI18n } from "@/lib/i18n";

const title = "Vishnu Vardhan Reddy — Digital Card | Kangen Water, Hyderabad";
const description =
  "Digital visiting card of Vishnu Vardhan Reddy, Enagic Independent Distributor in Hyderabad. Call, WhatsApp, save contact and explore the full portfolio.";
const ogImage = new URL(portraitPhoto, "https://id-preview--81291183-3111-4d83-aee0-c7aca99aa050.lovable.app").href;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: DigitalCard,
});

function DigitalCard() {
  const { t } = useI18n();

  const share = async () => {
    const data = {
      title: `${profile.name} — Kangen Water`,
      text: t.hero.shareText,
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
    toast.success(t.hero.shareCopied);
  };

  const actions = [
    {
      key: "call",
      label: t.hero.call,
      icon: Phone,
      onClick: undefined,
      href: `tel:${profile.phoneIntl}`,
    },
    {
      key: "whatsapp",
      label: t.hero.whatsapp,
      icon: MessageCircle,
      onClick: undefined,
      href: whatsappLink(t.hero.whatsappMsg),
    },
    {
      key: "save",
      label: t.hero.save,
      icon: Download,
      onClick: downloadVCard,
      href: undefined,
    },
    {
      key: "share",
      label: t.hero.share,
      icon: Share2,
      onClick: share,
      href: undefined,
    },
  ];

  return (
    <div className="min-h-screen bg-deep text-deep-foreground">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col">
        {/* Photo block */}
        <div className="relative h-[52dvh] min-h-80 overflow-hidden">
          <img
            src={portraitPhoto}
            alt={t.hero.portraitAlt}
            className="card-kenburns h-full w-full object-cover object-[30%_20%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-deep/40 via-transparent to-deep"
          />
          <div className="absolute top-4 right-4 animate-fade-in">
            <LanguageToggle className="border-aqua/30 bg-deep/50 text-deep-foreground" />
          </div>
          <div className="absolute top-4 left-4 inline-flex animate-fade-in items-center gap-1.5 rounded-full border border-aqua/30 bg-deep/50 px-3 py-1 text-[11px] tracking-[0.16em] uppercase backdrop-blur">
            <Droplets className="h-3 w-3 text-aqua" aria-hidden />
            Kangen Water
          </div>
        </div>

        {/* Identity */}
        <div className="relative z-10 -mt-20 px-5">
          <div className="animate-fade-in" style={{ animationDelay: "120ms" }}>
            <p className="text-xs tracking-[0.22em] text-aqua uppercase">{t.card.role}</p>
            <h1 className="mt-1 text-4xl leading-tight font-semibold">{profile.name}</h1>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-deep-foreground/70">
              <MapPin className="h-4 w-4" aria-hidden />
              {profile.address}
            </p>
          </div>

          {/* Action buttons */}
          <div className="mt-6 grid grid-cols-4 gap-3">
            {actions.map((a, i) => {
              const Icon = a.icon;
              const inner = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-aqua/30 bg-aqua/10 text-aqua transition-all duration-200 group-hover:scale-110 group-hover:bg-aqua group-hover:text-aqua-foreground group-active:scale-95">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="mt-1.5 text-[11px] text-deep-foreground/70">{a.label}</span>
                </>
              );
              const cls = "group flex animate-fade-in flex-col items-center";
              const style = { animationDelay: `${200 + i * 70}ms` };
              return a.href ? (
                <a key={a.key} href={a.href} target={a.key === "whatsapp" ? "_blank" : undefined} rel="noreferrer" className={cls} style={style}>
                  {inner}
                </a>
              ) : (
                <button key={a.key} type="button" onClick={a.onClick} className={cls} style={style}>
                  {inner}
                </button>
              );
            })}
          </div>

          {/* About */}
          <div
            className="mt-7 animate-fade-in rounded-2xl border border-aqua/20 bg-aqua/5 p-5"
            style={{ animationDelay: "420ms" }}
          >
            <h2 className="text-lg font-semibold text-aqua">{t.card.aboutTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-deep-foreground/80">{t.card.aboutBody}</p>
          </div>

          {/* Website CTA */}
          <div className="mt-6 animate-fade-in pb-10" style={{ animationDelay: "540ms" }}>
            <Link
              to="/portfolio"
              className="group flex items-center justify-between rounded-2xl bg-aqua px-5 py-4 text-aqua-foreground shadow-lift transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
            >
              <span className="text-base font-semibold">{t.card.website}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-deep/15 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
            <p className="mt-4 text-center text-xs text-deep-foreground/50">{t.card.footnote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
