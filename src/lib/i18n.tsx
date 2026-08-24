import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { dictionaries, type Content, type Lang } from "./content";

type I18nValue = { lang: Lang; setLang: (lang: Lang) => void; t: Content };

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "vvr-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "te" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset["lang"] = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nValue>(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const options: { id: Lang; label: string }[] = [
    { id: "en", label: t.language.english },
    { id: "te", label: t.language.telugu },
  ];

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center rounded-full border border-border bg-card/80 p-0.5 backdrop-blur ${className}`}
    >
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => setLang(o.id)}
          aria-pressed={lang === o.id}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            lang === o.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
