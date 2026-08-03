import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroArt from "@/assets/hero-illustration.png";
import aboutArt from "@/assets/about-illustration.png";
import ctaArt from "@/assets/cta-illustration.png";
import { REGISTER_URL } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mt-5 text-balance text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl">
      {children}
    </h2>
  );
}

export function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="pointer-events-none absolute -top-32 -start-24 -z-10 size-[32rem] rounded-full bg-brand-orange/25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-40 -end-24 -z-10 size-[34rem] rounded-full bg-brand-teal/25 blur-3xl animate-blob" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <Reveal>
          <Eyebrow>{t.hero.badge}</Eyebrow>
          <h1 className="font-display mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.title1}
            <span className="block text-gradient">{t.hero.title2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.04]"
            >
              {t.hero.primary}
            </a>
            <a
              href="#journey"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/80 px-8 py-4 text-base font-semibold text-foreground transition-colors duration-300 hover:border-brand-violet hover:text-brand-violet"
            >
              {t.hero.secondary}
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-brand-violet">{s.value}</dd>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute inset-6 -z-10 rounded-[3rem] bg-gradient-brand opacity-15 blur-2xl" />
          <img
            src={heroArt}
            alt={t.hero.illustrationAlt}
            width={1408}
            height={1104}
            className="w-full animate-float drop-shadow-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <img
            src={aboutArt}
            alt={t.about.illustrationAlt}
            loading="lazy"
            width={1200}
            height={912}
            className="w-full"
          />
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <SectionTitle>{t.about.title}</SectionTitle>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{t.about.body}</p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{t.about.body2}</p>
          <ul className="mt-8 space-y-3">
            {t.about.points.map((p) => (
              <li
                key={p.title}
                className="card-lift rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <p className="font-display font-bold">{p.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Themes() {
  const { t } = useLang();
  return (
    <section id="themes" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-soft opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.themes.eyebrow}</Eyebrow>
          <SectionTitle>{t.themes.title}</SectionTitle>
          <p className="mt-4 text-sm text-muted-foreground">{t.themes.note}</p>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.themes.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <div className="group card-lift h-full rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)] hover:border-brand-violet/40">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-ink text-primary-foreground transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <Icon name={item.icon} className="size-7" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhoCanApply() {
  const { t } = useLang();
  return (
    <section id="who" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.who.eyebrow}</Eyebrow>
          <SectionTitle>{t.who.title}</SectionTitle>
          <p className="mt-4 text-sm text-muted-foreground">{t.who.note}</p>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.who.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60}>
              <div className="group card-lift relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)]">
                <div className="absolute -end-10 -top-10 size-28 rounded-full bg-gradient-brand opacity-10 transition-opacity duration-500 group-hover:opacity-25" />
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand-violet transition-colors duration-500 group-hover:bg-brand-violet group-hover:text-primary-foreground">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Journey() {
  const { t } = useLang();
  return (
    <section id="journey" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-ink" />
      <div className="pointer-events-none absolute -bottom-32 start-1/3 -z-10 size-[30rem] rounded-full bg-brand-orange/30 blur-3xl animate-blob" />
      <div className="mx-auto max-w-7xl px-4 text-primary-foreground sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
            {t.journey.eyebrow}
          </span>
          <h2 className="font-display mt-5 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.journey.title}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.journey.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="glass-panel h-full rounded-3xl border-white/15 bg-white/10 p-6 backdrop-blur-md transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <Icon name={item.icon} className="size-6" />
                    </span>
                    <span className="font-display text-2xl font-bold text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{item.text}</p>
                  {item.date && (
                    <span className="mt-4 inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-navy">
                      {item.date}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
        </ol>
      </div>
    </section>
  );
}

export function Training() {
  const { t } = useLang();
  return (
    <section id="timeline" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.training.eyebrow}</Eyebrow>
          <SectionTitle>{t.training.title}</SectionTitle>
          <p className="mt-4 text-sm font-semibold text-brand-orange">{t.training.meta}</p>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.training.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <div className="card-lift h-full rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
                  {item.day}
                </span>
                <span className="mt-4 flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand-violet">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="font-display mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20 max-w-2xl">
          <Eyebrow>{t.camp.eyebrow}</Eyebrow>
          <SectionTitle>{t.camp.title}</SectionTitle>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {t.camp.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <div className="card-lift h-full rounded-3xl bg-gradient-soft p-7 shadow-[var(--shadow-card)]">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-card text-brand-orange shadow-[var(--shadow-card)]">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <span className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-brand-violet">
                  {item.day}
                </span>
                <h3 className="font-display mt-1.5 text-lg font-bold">{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20 max-w-2xl">
          <Eyebrow>{t.showcase.eyebrow}</Eyebrow>
          <SectionTitle>{t.showcase.title}</SectionTitle>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.showcase.items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 70}>
              <div className="card-lift flex h-full items-center rounded-3xl border border-border/60 bg-card px-6 py-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-base font-bold">{item}</h3>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLang();
  return (
    <section id="faq" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-soft opacity-70" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <SectionTitle>{t.faq.title}</SectionTitle>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border/60 bg-card px-5 shadow-[var(--shadow-card)]"
              >
                <AccordionTrigger className="text-start font-display text-base font-bold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaSection() {
  const { t } = useLang();
  return (
    <section id="register" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-ink shadow-[var(--shadow-lift)]">
        <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div className="text-primary-foreground">
            <span className="inline-flex rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
              {t.cta.eyebrow}
            </span>
            <h2 className="font-display mt-5 text-balance text-3xl font-extrabold leading-tight sm:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 max-w-md text-pretty text-white/75">{t.cta.text}</p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-yellow px-10 py-4 text-base font-bold text-brand-navy shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.04]"
            >
              {t.cta.button}
            </a>
          </div>
          <img
            src={ctaArt}
            alt={t.cta.illustrationAlt}
            loading="lazy"
            width={1200}
            height={912}
            className="w-full animate-float"
          />
        </div>
      </Reveal>
    </section>
  );
}