import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import sanadLogo from "@/assets/sanad-youth.png.asset.json";
import unfpaLogo from "@/assets/unfpa-syria.png.asset.json";
import { useLang } from "@/lib/lang";

const socials = [
  { href: "https://www.facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={sanadLogo.url}
              alt="Sanad Youth for Development"
              loading="lazy"
              width={160}
              height={190}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-violet">
              {t.footer.contactLabel}
            </p>
            <a
              href={`mailto:${t.footer.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-orange"
            >
              <Mail className="size-4" aria-hidden="true" />
              {t.footer.email}
            </a>
            <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-violet">
              {t.footer.social}
            </p>
            <div className="mt-3 flex gap-2">
              {socials.map(({ href, label, Icon: I }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-brand-violet hover:text-brand-violet"
                >
                  <I className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-end">
            <img
              src={unfpaLogo.url}
              alt="UNFPA Syria"
              loading="lazy"
              width={192}
              height={62}
              className="h-10 w-auto md:ms-auto"
            />
          </div>
        </div>

        <p className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PLAY 4 IMPACT · Sanad Youth for Development · UNFPA Syria — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}