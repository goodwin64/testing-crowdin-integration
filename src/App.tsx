import React from "react";
import { LanguagePicker } from "./LanguagePicker";
import { PhrasesDemo } from "./PhrasesDemo";
import { useL10n } from "./useL10n";

export function App() {
  const { lang, onLangChange, langOptions, translations } = useL10n();

  return (
      <div>
        <h1>Testing crowdin</h1>
        <LanguagePicker
            onChange={onLangChange}
            value={lang}
            options={langOptions}
        />
        <PhrasesDemo lang={lang} translations={translations} />
      </div>
  );
}
