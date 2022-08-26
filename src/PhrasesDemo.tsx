import React from "react";
import {Lang, useL10n} from "./useL10n";

export function PhrasesDemo({ lang, translations}: { lang: Lang, translations: Record<string, string> }) {
    return (
        <>
            <p>current lang: {lang}</p>
            <p>phrase 1: {translations.orgCreated}</p>
            <p>phrase 2: {translations.cancel}</p>
        </>
    );
}
