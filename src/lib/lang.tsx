import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getContent, type Content, type Lang } from "./content";

type LangContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Content;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("p4i-lang");
    if (stored === "ar" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem("p4i-lang", lang);
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === "en" ? "ar" : "en")), []);

  const value = useMemo<LangContextValue>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", t: getContent(lang), toggle }),
    [lang, toggle],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}