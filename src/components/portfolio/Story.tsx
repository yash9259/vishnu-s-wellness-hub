import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function Stats() {
  const { t } = useI18n();
  return (
    <section
      className="relative z-10 mx-auto -mt-9 max-w-5xl px-5 md:px-8"
      aria-label="Key milestones"
    >
      <div className="grid gap-3 rounded-3xl border border-border bg-card p-5 shadow-lift sm:grid-cols-3 md:p-7">
        {t.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-2xl font-semibold text-primary md:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">{t.about.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">{t.about.title}</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className={i === t.about.paragraphs.length - 1 ? "text-foreground" : ""}>
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function WhyStarted() {
  const { t } = useI18n();
  return (
    <section className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">{t.why.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">{t.why.title}</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.why.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-sm text-muted-foreground/80 italic">{t.why.disclaimer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Purpose() {
  const { t } = useI18n();
  return (
    <section className="bg-water py-16 text-deep-foreground md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-deep-foreground/70 uppercase">
            {t.purpose.eyebrow}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-deep-foreground/85 md:text-xl">
            {t.purpose.body}
          </p>
          <p className="font-display mt-8 text-3xl leading-snug font-semibold md:text-5xl">
            {t.purpose.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
