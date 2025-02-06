import check from "/check-icon.svg"
import smartest from "/smartest.webp"
import loading from "/loading.png"
import { useLanguageContext } from "../../context/useLanguageContext.ts"
import data from "./language.json"

import "./Smartest.scss"

export const Smartest = () => {
    const { language } = useLanguageContext()

    return (
        <section className="smartest">

            <div className="smartest__container">
                <h2 className="smartest-title">{data[language].title}</h2>
                <p className="smartest-paragraph">{data[language].subtitle}</p>

                <div className="smartest__card">
                    <div className="smartest__card__texts">
                        <h3 className="smartest__card__texts-title">{data[language].cardTitle}</h3>
                        <p className="smartest__card__texts-text">{data[language].cardSubtitle}</p>

                        <ul className="smartest__card__texts__ul">
                            <li className="smartest__card__texts__ul__li">
                                <img src={check} alt="Check" />
                                <span>{data[language].item1}</span>
                            </li>
                            <li className="smartest__card__texts__ul__li">
                                <img src={check} alt="Check" />
                                <span>{data[language].item2}</span>
                            </li>
                            <li className="smartest__card__texts__ul__li">
                                <img src={check} alt="Check" />
                                <span>{data[language].item3}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="smartest__card-figure"></div>

                    <img src={smartest} alt=" " aria-hidden="true" className="smartest__card-bg" />

                    <p className="smartest__card__loading">
                        <img src={loading} alt="Loading" className="smartest__card__loading-img" />
                        {data[language].imputText}
                    </p>
                </div>
            </div>
        </section>
    )
}
