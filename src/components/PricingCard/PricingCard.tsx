import check from "/check-icon.svg"
import "./PricingCard.scss"

interface Props {
    title: string
    text: string
    price: string
    ctaText: string
    feature1: string
    feature2: string
    feature3: string
    color: string
}

export const PricingCard:React.FC<Props> = ({ title, text, price, ctaText, feature1, feature2, feature3, color }) => {
    return (
        <div 
            className="pricingCard"
            style={{borderColor: color}}
        >
            <div className="pricingCard__header">
                <h3 
                    className="pricingCard__header-title"
                    style={{color: color}}
                >
                    {title}
                </h3>

                <p className="pricingCard__header-text">{text}</p>

                <p className="pricingCard__header-price">$ <span>{price}</span></p>

                <a href="#" className="pricingCard__header-cta">{ctaText}</a>
            </div>

            <ul className="pricingCard__ul">
                <li className="pricingCard__ul__li">
                    <img src={check} alt="Check" className="pricingCard__ul__li-img" />
                    <span>{feature1}</span>
                </li>
                <li className="pricingCard__ul__li">
                    <img src={check} alt="Check" className="pricingCard__ul__li-img" />
                    <span>{feature2}</span>
                </li>
                <li className="pricingCard__ul__li">
                    <img src={check} alt="Check" className="pricingCard__ul__li-img" />
                    <span>{feature3}</span>
                </li>
            </ul>
        </div>
    )
}
