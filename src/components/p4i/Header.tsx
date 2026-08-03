import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import sanadLogo from "@/assets/sanad-youth.png";
import unfpaLogo from "@/assets/unfpa-syria.webp";
import { useLang } from "@/lib/lang";
import { REGISTER_URL } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#journey", label: t.nav.journey },
    { href: "#themes", label: t.nav.themes },
    { href: "#who", label: t.nav.who },
    { href: "#timeline", label: t.nav.timeline },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      dir="ltr"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-panel shadow-[var(--shadow-card)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">

        {/* Sanad Logo */}
        <a
          href="#home"
          className="flex min-w-0 shrink items-center"
          aria-label="Sanad Youth for Development"
        >
          <img
            src={sanadLogo}
            alt="Sanad Youth for Development"
            width={160}
            height={190}
            className="h-9 w-auto object-contain sm:h-12"
          />
        </a>


        {/* Desktop Navigation */}
        <nav
          className="mx-auto hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>


        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">

          {/* Language */}
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/70 px-2.5 py-2 text-xs font-semibold text-foreground transition-colors hover:border-brand-violet hover:text-brand-violet sm:px-3"
            aria-label={
              lang === "en"
                ? "التبديل إلى العربية"
                : "Switch to English"
            }
          >
            <Globe className="size-4" aria-hidden="true" />
            {t.nav.switch}
          </button>


          {/* Register */}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-ink px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
          >
            {t.nav.register}
          </a>


          {/* UNFPA Logo */}
          <img
            src={unfpaLogo}
            alt="UNFPA Syria"
            width={192}
            height={62}
            className="hidden h-7 max-w-[120px] object-contain md:block lg:h-8"
          />


          {/* Mobile Menu */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/70 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="glass-panel border-t border-border/60 lg:hidden">

          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
            aria-label="Mobile"
            dir={t.dir}
          >

            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}


            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gradient-ink px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {t.nav.register}
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}
