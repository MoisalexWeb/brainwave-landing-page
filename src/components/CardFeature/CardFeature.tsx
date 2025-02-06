import "./CardFeature.scss"

interface Props {
    title: string
    paragraph: string
    ctaText: string
    image: string
    color: string
}

export const CardFeature: React.FC<Props> = ({ title, paragraph, image, ctaText, color }) => {
    return (
        <div className="cardFeature" style={{ borderColor: color }}>
            <div>
                <h3 className="cardFeature-title">{title}</h3>
                <p className="cardFeature-text">{paragraph}</p>
            </div>

            <div className="cardFeature__cta">
                <img src={image} alt={`${title} icon`} className="cardFeature__cta-img" />
                <a href="#" className="cardFeature__cta-link">
                    {ctaText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                </a>
            </div>
        </div>
    )
}
