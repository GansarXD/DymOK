import { Swiper, SwiperSlide } from "swiper/react";
import { Col } from "reactstrap";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import styles from "./SwiperHero.module.scss";
import { useState } from "react";
import arrow from "../../images/arrow-down.svg";

SwiperCore.use([EffectFade, Autoplay]);
export const SwiperHero = (props) => {
  const [active_index, setActiveIndex] = useState(0);
  return (
    <>
      <Col xs="12">
        <Swiper effect="fade" autoplay={{ delay: 3000 }}>
          {props.products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`${styles.back}`}
                style={{
                  backgroundImage: `linear-gradient(#071832, rgba(0,0,0,0.3), #071832), url(${product.back})`,
                }}
              >
                <h1
                  className="text-title text-center mt-3"
                  style={{ fontWeight: "700" }}
                >
                  <span>Дым</span>
                  <span style={{ color: "#FFD600" }}>ОК</span>
                </h1>
                <div style={{ width: "100%" }}>
                  <p className={`mt-2 text-default ${styles.footer_phone}`}>
                    <a href="tel:+77472562940">+7 747 256 2940</a>
                  </p>
                </div>
                <div className={styles.title}>
                  <div
                    style={{ borderTop: "2px solid #FFD600", width: "8%" }}
                  />
                  <br />
                  <p
                    style={{ lineHeight: 1.2, fontWeight: "600" }}
                    className="text-big"
                  >
                    Измените Ваше Представление <br /> Об Электронных Сигаретах
                  </p>
                  <div className="mt-5">
                    <span className="text-default text-bold mr-4">
                      Подробнее ниже
                    </span>
                    <img src={arrow} alt="arrow-down" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </>
  );
};
