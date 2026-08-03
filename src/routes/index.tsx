import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/p4i/Header";
import { Footer } from "@/components/p4i/Footer";
import {
  About,
  CtaSection,
  Faq,
  Hero,
  Journey,
  Themes,
  Training,
  WhoCanApply,
} from "@/components/p4i/Sections";
import { LangProvider } from "@/lib/lang";

const title = "PLAY 4 IMPACT — Learn. Create. Play. Inspire Change.";
const description =
  "An innovation journey where young people train, build digital and board games around real social issues, and showcase working prototypes. Register now.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Themes />
        <WhoCanApply />
        <Journey />
        <Training />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </LangProvider>
  );
}
