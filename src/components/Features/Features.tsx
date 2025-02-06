import { CardFeature } from "../CardFeature/CardFeature.tsx"
import { improveIcon, connectIcon, askIcon, fastIcon } from "./importImages.ts"
import { useLanguageContext } from "../../context/useLanguageContext.ts"
import data from "./language.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import SwiperCore from "swiper"
import "swiper/css"
import "./Features.scss"

export const Features = () => {
    const { language } = useLanguageContext()

    SwiperCore.use([Pagination, Navigation]);

    return (
        <section className="features" id="features">
            <h2 className="features-title">{data[language].sectionTitle}</h2>

            <Swiper
                breakpoints={{
                    700: { width: 700, slidesPerView: 2, spaceBetween: 20 },
                    1000: { width: 1000, slidesPerView: 3, spaceBetween: 20 },
                  }}
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                className="swiper-container"
            >
                <SwiperSlide>
                    <CardFeature
                        key={data[language].feature1.title}
                        title={data[language].feature1.title}
                        paragraph={data[language].feature1.text}
                        image={askIcon}
                        ctaText={data[language].ctaText}
                        color="#ac6aff"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <CardFeature
                        key={data[language].feature2.title}
                        title={data[language].feature2.title}
                        paragraph={data[language].feature2.text}
                        image={improveIcon}
                        ctaText={data[language].ctaText}
                        color="#ffc876"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <CardFeature
                        key={data[language].feature3.title}
                        title={data[language].feature3.title}
                        paragraph={data[language].feature3.text}
                        image={connectIcon}
                        ctaText={data[language].ctaText}
                        color="#7adb78"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <CardFeature
                        key={data[language].feature4.title}
                        title={data[language].feature4.title}
                        paragraph={data[language].feature4.text}
                        image={fastIcon}
                        ctaText={data[language].ctaText}
                        color="#ff776f"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <CardFeature
                        key={data[language].feature2.title}
                        title={data[language].feature2.title}
                        paragraph={data[language].feature2.text}
                        image={improveIcon}
                        ctaText={data[language].ctaText}
                        color="#ffc876"
                    />
                </SwiperSlide>
            </Swiper>

        </section>
    )
}
