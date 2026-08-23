import { Reveal } from "./Reveal";
import { profile } from "@/lib/profile";

const stats = [
  { value: "20+", label: "Years in manufacturing & business" },
  { value: "Feb 2022", label: "Started the Kangen journey" },
  { value: "~140", label: "Families supported so far" },
];

export function Stats() {
  return (
    <section className="mx-auto -mt-9 max-w-5xl px-5 md:px-8" aria-label="Key milestones">
      <div className="grid gap-3 rounded-3xl border border-border bg-card p-5 shadow-lift sm:grid-cols-3 md:p-7">
        {stats.map((s) => (
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
  return (
    <section id="about" className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">About me</p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
          A turning point, one family at a time
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            I have been in the biscuit manufacturing industry for over 20 years. Although I gained
            valuable experience in business during those years, I was always searching for something
            that could give me a deeper sense of satisfaction and purpose.
          </p>
          <p>
            In February 2022, I purchased my Kangen Water device, and that decision became a turning
            point in my life.
          </p>
          <p>
            Today, I feel truly happy and fulfilled because, through my journey, I have been able to
            positively impact around 140 families. Seeing these families become more aware about
            their lifestyle and experience greater happiness gives me a sense of purpose that I
            never felt before.
          </p>
          <p className="text-foreground">
            For me, this journey is not just about business. It is about making a meaningful
            difference in people's lives, one family at a time.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function WhyStarted() {
  return (
    <section className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Why I started
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            It began at home
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I started my Kangen Water journey because my wife was facing a vitiligo-related skin
              concern. We began exploring ways to support a healthier lifestyle and overall
              wellness, which led us to Kangen Water.
            </p>
            <p>
              Over approximately six months, we personally observed significant visible improvement,
              with around 80% of the affected skin area being covered. This personal journey inspired
              me to learn more about Kangen Water and eventually share my experience with others.
            </p>
            <p className="text-sm text-muted-foreground/80 italic">
              This is a personal family experience shared as it happened. Individual experiences
              vary, and nothing here is intended as medical advice or a treatment claim.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Purpose() {
  return (
    <section className="bg-water py-16 text-deep-foreground md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-deep-foreground/70 uppercase">My purpose</p>
          <p className="mt-6 text-lg leading-relaxed text-deep-foreground/85 md:text-xl">
            My purpose is to help people create greater awareness about the importance of a healthier
            lifestyle while also providing an opportunity to explore additional sources of income.
          </p>
          <p className="font-display mt-8 text-3xl leading-snug font-semibold md:text-5xl">
            {profile.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
