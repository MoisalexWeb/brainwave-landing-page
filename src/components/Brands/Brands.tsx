import goggle from "/google.png"
import meta from "/meta.png"
import yourlogo from "/yourlogo.svg"
import { useLanguageContext } from "../../context/useLanguageContext"
import data from "./language.json"
import "./Brands.scss"

export const Brands = () => {
    const { language } = useLanguageContext()

    return (
        <section className="brands">
            <p className="brands-text">{data[language]["text"]}</p>

            <figure className="brands__images">
                <img src={goggle} alt="Brand logo" className="brands__images-img" />
                <img src={meta} alt="Brand logo" className="brands__images-img" />
                <img src={yourlogo} alt="Brand logo" className="brands__images-img" />
                <img src={yourlogo} alt="Brand logo" className="brands__images-img" />
            </figure>
        </section>
    )
}
