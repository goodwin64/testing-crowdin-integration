import {useEffect, useMemo, useState} from "react";
import {downloadTranslations} from "./setup-crowdin";

/**
 * This file is agnostic to l10n provider; it has basic bootstrap functionality.
 * It exposes a single hook that can be reused across the entire app.
 * It also handles language switch and client caching.
 *
 * For each of the l10n providers we'll have separate file(s); each of them exports functionality
 * to fetch all translations based on current language.
 */

export type Lang = "en" | "fr" | "ko";

const langOptions = ["en", "fr", "ko"] as const;

const translationsCache: Record<Lang, Record<string, string>> = {
    en: {},
    fr: {},
    ko: {}
};

export function useL10n() {
    const [lang, setLang] = useState<Lang>("fr");
    const onLangChange: (lang: string) => void = (lang) => {
        console.log('>>> onLangChange', lang);
        setLang(lang as Lang);
    };

    const translations = useMemo(() => {
        return translationsCache[lang];
    }, [lang]);

    useEffect(() => {
        downloadTranslations(lang).then(data => {
            console.log('>>> downloadTranslations', data);
        });
    }, [lang]);

    return {lang, onLangChange, langOptions, translations};
}
