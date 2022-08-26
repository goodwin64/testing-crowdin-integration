import React from "react";

interface Props {
    onChange: (lang: string) => void;
    options: readonly string[];
    value?: string;
}

export function LanguagePicker({ options, onChange, value }: Props) {
    return (
        <select
            name="language"
            id="language"
            defaultValue={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {options.map((op) => (
                <option value={op} key={op}>
                    {op}
                </option>
            ))}
        </select>
    );
}
