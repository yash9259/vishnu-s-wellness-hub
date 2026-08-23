import { Quote, Video } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/profile";

const testimonials = [
  {
    quote:
      "Vishnu garu explained everything patiently and did the demo at our home. No pressure at all — just clear information.",
    name: "Customer, Medipally",
  },
  {
    quote:
      "The installation and follow-up support were excellent. He still checks in with us months later.",
    name: "Customer, Hyderabad",
  },
  {
    quote:
      "His own family story is what convinced us to listen. He speaks from real experience, not a script.",
    name: "Customer, Uppal",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            In the words of the families I serve
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 70}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <Quote className="h-6 w-6 text-accent-foreground/60" aria-hidden />
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
              <p className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">{t.name}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-6">
          <div className="flex flex-col items-start gap-3 rounded-2xl border border-dashed border-border bg-card/60 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Video className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-foreground">Video testimonials</p>
                <p className="text-sm text-muted-foreground">
                  Customer videos will be added here as soon as they are shared.
                </p>
              </div>
            </div>
            <a
              href={whatsappLink("Hello Vishnu garu, can you share customer testimonials?")}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Ask for references
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
