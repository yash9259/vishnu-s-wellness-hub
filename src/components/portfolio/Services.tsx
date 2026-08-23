import { Droplets, Sparkles, Wrench, LifeBuoy, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Droplets,
    title: "Kangen Water Demonstration",
    body: "A live, hands-on demonstration at your home or office so you can see the difference for yourself.",
  },
  {
    icon: Sparkles,
    title: "Water Quality & Lifestyle Awareness",
    body: "Simple, honest guidance on drinking water quality and everyday lifestyle habits.",
  },
  {
    icon: Wrench,
    title: "Device Guidance",
    body: "Help choosing the right Enagic model for your family size, usage and budget.",
  },
  {
    icon: LifeBuoy,
    title: "Installation & Customer Support",
    body: "Installation, first-use walkthrough and continued support long after the handover.",
  },
  {
    icon: TrendingUp,
    title: "Business Opportunity Guidance",
    body: "Step-by-step mentoring for anyone who wants to build an additional source of income.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">What I do</p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
          Services I personally handle
        </h2>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal
            as="li"
            key={service.title}
            delay={i * 60}
            className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <service.icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

const journey = [
  {
    year: "2002 — 2022",
    title: "Two decades in biscuit manufacturing",
    body: "Over 20 years of running and growing a manufacturing business.",
  },
  {
    year: "February 2022",
    title: "Bought my first Kangen Water device",
    body: "A decision made for my family that changed the direction of my life.",
  },
  {
    year: "2022",
    title: "A personal family experience",
    body: "What we observed at home inspired me to learn deeply and share openly.",
  },
  {
    year: "Today",
    title: "~140 families connected",
    body: "Demonstrations, installations and ongoing support across Hyderabad.",
  },
  {
    year: "Ahead",
    title: "A purpose-driven journey",
    body: "Building awareness, service and opportunity for more families every month.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">My journey</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            From manufacturing floor to family wellness
          </h2>
        </Reveal>

        <ol className="mt-10 space-y-8 border-l border-border pl-6 md:pl-8">
          {journey.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70} className="relative">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full bg-primary ring-4 ring-background md:-left-[39px]"
              />
              <p className="text-xs tracking-[0.16em] text-primary uppercase">{item.year}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
