"use client";

import { useState, useEffect, useCallback } from "react";
import { type Lang, getT } from "../data/translations";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const v = localStorage.getItem("sx_lang");
    if (v && v.replace(/"/g, "").trim().toLowerCase() === "ar") return "ar";
  } catch {}
  return "en";
}

export function useLang() {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("sx_lang", lang);
    } catch {}
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const t = useCallback((key: string) => getT(lang)(key), [lang]);

  return { lang, toggleLang, t, isArabic: lang === "ar" };
}
