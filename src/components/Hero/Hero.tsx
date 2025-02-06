import lineCurve from "/line-curve.webp"
import robot from "/robot.webp"
import loading from "/loading.png"
import "./Hero.scss"
import { useLanguageContext } from "../../context/useLanguageContext"
import data from "./language.json"

export const Hero = () => {
    const { language } = useLanguageContext()

    return (
        <section className="hero">
            <div className="hero__texts">
                <h1 className="hero__texts-title">{data[language]["title"]} <span>Brainwave <img src={lineCurve} alt=" " aria-hidden="true" /></span></h1>
                <p className="hero__texts-text">{data[language]["text"]}</p>
                <a href="#" className="hero__texts-cta">{data[language]["cta"]}</a>
            </div>

            <div className="hero__image">
                <img src={robot} alt="Brainwave" className="hero__image-img" />

                <p className="hero__image__text">
                    <img src={loading} alt="Loading" className="hero__image__text-img" />
                    {data[language]["chat"]}
                </p>
            </div>
        </section>
    )
}
