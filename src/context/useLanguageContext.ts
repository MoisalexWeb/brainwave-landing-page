import { useContext, useEffect } from "react"
import { LanguageContext } from "./languageContext.tsx"

export const useLanguageContext = () => {
    const context = useContext(LanguageContext)

    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    const { language, setLanguage } = context

    const uptadeLanguage = () => {
        if (language === "en") setLanguage("es")
        else setLanguage("en")
    }

    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    return {
        uptadeLanguage,
        language
    }
}
