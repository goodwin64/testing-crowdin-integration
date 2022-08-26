import React from "react";
import {LanguagePicker} from "./LanguagePicker";
import {PhrasesDemo} from "./PhrasesDemo";
import {useL10n} from "./useL10n";

export function App() {
    const {lang, onLangChange, langOptions, translations} = useL10n();

    return (
        <div>
            <h1>Testing crowdin</h1>
            <h3>Handle l10n:</h3>
            <div>
                <input type="radio" id="l10n-1" name="handleL10n" value={1}/>
                <label htmlFor="l10n-1">via API call on init</label>
            </div>
            <div>
                <input type="radio" id="l10n-2" name="handleL10n" value={2} defaultChecked/>
                <label htmlFor="l10n-2">locally stored in JSON files</label>
            </div>
            <br/>
            <LanguagePicker
                onChange={onLangChange}
                value={lang}
                options={langOptions}
            />
            <PhrasesDemo lang={lang} translations={translations}/>
        </div>
    );
}
