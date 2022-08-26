import React from "react";
import { useL10n } from "./useL10n";

export function PhrasesDemo() {
    const { lang, translations } = useL10n();
    return (
        <>
            <p>current lang: {lang}</p>
            <p>phrase 1: {translations.orgCreated}</p>
            <p>phrase 2: {translations.cancel}</p>
        </>
    );
}
