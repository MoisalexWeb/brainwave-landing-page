import adviceImg from "/advice-img.webp"
import generating from "/recording-icon.svg"
import openBracket from "/bracket-open.svg"
import closeBracket from "/bracket-close.svg"
import { useLanguageContext } from "../../context/useLanguageContext"
import data from "./language.json"
import "./Advice.scss"

export const Advice = () => {
    const { language } = useLanguageContext()

    return (
        <section className="advice" id="howWorks">
            <div className="advice__texts">
                <p className="advice__texts__legend">
                    <img src={openBracket} alt=" " aria-hidden={true} className="advice__texts__legend-img" />
                    {data[language].legend}
                    <img src={closeBracket} alt=" " aria-hidden={true} className="advice__texts__legend-img" />
                </p>
                <h2 className="advice__texts-title">{data[language].title}</h2>
                <p className="advice__texts-text">{data[language].paragraph}</p>
                <a href="#" className="advice__texts-cta">{data[language].ctaText}</a>
            </div>

            <div className="advice__image">
                <img src={adviceImg} alt="Advice" className="advice__image-img" />

                <div className="advice__image__input">
                    <span className="advice__image__input-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                    </span>
                    <span className="advice__image__input-text">{data[language].inputText}</span>
                    <img src={generating} alt="Generating" className="advice__image__input-generating" />
                </div>
            </div>
        </section>
    )
}
