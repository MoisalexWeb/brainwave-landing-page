import line from "/line-curve.webp"
import circle from "/imagen-future.webp"
import bracketOpen from "/bracket-open.svg"
import bracketClose from "/bracket-close.svg"
import { useLanguageContext } from "../../context/useLanguageContext.ts"
import data from "./language.json"
import "./Future.scss"

export const Future = () => {
    const { language } = useLanguageContext()

    return (
        <section className="future" id="started">
            <div className="future__container">
                <p className="future__code">
                    <img src={bracketOpen} alt=" " aria-hidden={true} className="future__code-img" />
                    {data[language].code}
                    <img src={bracketClose} alt=" " aria-hidden={true} className="future__code-img" />
                </p>

                <h2 className="future-title">
                    {data[language].title} <span>Brainwave
                        <img src={line} alt=" " aria-hidden={true} />
                    </span>
                </h2>

                <p className="future-text">{data[language].paragraph}</p>

                <a href="#" className="future-cta">{data[language].ctaText}</a>
                
                <img src={circle} className="future-img-bg" alt=" " />
            </div>

        </section>
    )
}
