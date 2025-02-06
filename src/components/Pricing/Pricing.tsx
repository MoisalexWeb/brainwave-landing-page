import bracketOpen from "/bracket-open.svg"
import bracketClose from "/bracket-close.svg"
import { PricingCard } from "../PricingCard/PricingCard"
import { useLanguageContext } from "../../context/useLanguageContext"
import data from "./language.json"
import "./Pricing.scss"

export const Pricing = () => {
    const { language } = useLanguageContext()

    return (
        <section className="pricing" id="pricing">
            <p className="pricing__legend">
                <img src={bracketOpen} alt="Bracket" className="pricing__legend-img" />
                {data[language].legend}
                <img src={bracketClose} alt="Bracket" className="pricing__legend-img" />
            </p>

            <h2 className="pricing-title">{data[language].title}</h2>


            <div className="pricing__cards">
                <PricingCard
                    title={data[language].basic.title}
                    text={data[language].basic.subtitle}
                    ctaText={data[language].basic.ctaText}
                    feature1={data[language].basic.feature1}
                    feature2={data[language].basic.feature2}
                    feature3={data[language].basic.feature3}
                    price={data[language].basic.price}
                    color="#ffc876"
                />

                <PricingCard
                    title={data[language].premium.title}
                    text={data[language].premium.subtitle}
                    ctaText={data[language].premium.ctaText}
                    feature1={data[language].premium.feature1}
                    feature2={data[language].premium.feature2}
                    feature3={data[language].premium.feature3}
                    price={data[language].premium.price}
                    color="#ac6aff"
                />

                <PricingCard
                    title={data[language].enterprise.title}
                    text={data[language].enterprise.subtitle}
                    ctaText={data[language].enterprise.ctaText}
                    feature1={data[language].enterprise.feature1}
                    feature2={data[language].enterprise.feature2}
                    feature3={data[language].enterprise.feature3}
                    price={data[language].enterprise.price}
                    color="#ff776f"
                />
            </div>
        </section>
    )
}
