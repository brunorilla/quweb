import { useState } from "react";

interface Option {
    value: string;
    label: string;
}

interface BasicSelectProps {
    options: Option[];
    placeholder?: string;
    onSelect: (value: string) => void;
}

export const BasicSelect = ({ options, placeholder, onSelect }: BasicSelectProps) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedValue(value);
        onSelect(value);
    };

    return (
        <select
            value={selectedValue}
            onChange={handleChange}
            style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "white",
                fontSize: "1rem",
                maxWidth: "200px",
            }}
        >
            <option value="" disabled>
                {placeholder || "Select an option"}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};