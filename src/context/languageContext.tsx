import { createContext, useState, ReactNode } from "react";

interface LanguageContextProps {
    language: "en" | "es";
    setLanguage: React.Dispatch<React.SetStateAction<"en" | "es">>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<"en" | "es">("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};