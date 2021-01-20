import Head from "next/head";
import styles from "./Home.module.scss";
import { Container, Row, Col } from "reactstrap";
import { ProductSection } from "../components/ProductSection";
import { useState } from "react";
import logo1 from "../images/hqd.jpg";
import logo2 from "../images/puff.png";
import logo3 from "../images/masking.jpg";
import logo4 from "../images/juul.png";
import { SwiperHero } from "../components/SwiperHero";
import back1 from "../images/masking-hero.jpg";
import back2 from "../images/hqd-hero.jpg";
import back3 from "../images/puff-hero.jpg";
// import whatsapp from "../images/whatsapp.svg";
import mobile from "../images/whatsapp-mini.svg";
import { AnchorNav } from "../components/AnchorNav";
import instagram from "../images/instagram.svg";

export default function Home() {
  const [products] = useState([
    {
      name: "hqd",
      number: "01",
      price: "-------------- от 2 500 до 4 000 ₸",
      price2: "",
      title: "Линейка HQD",
      description:
        "Из-за отсутствия побочных продуктов горения, наша продукция наносит гораздо меньший вред вашему здоровью! Идеально подобранная крепость жидкости на правильном солевом никотине вкупе с правильной мощностью дает лучший потребительский опыт. Забудьте о зарядных устройствах, флаконе с жидкостью, сгоревшей вате, испарителях и кнопках. ТОЛЬКО ОРИГИНАЛ.",
      image: logo1,
      isEven: false,
      back: back1,
    },
    {
      name: "puff",
      number: "02",
      price: "-------------- от 2 500 до 4 000 ₸",
      price2: "",
      title: "Линейка PUFF BAR",
      description:
        "Внешне утсройства выполнены в моноблочном форм-факторе, а их конструкция представляет собой обычный аккумулятор и емкость с жидкостью. Аккумулятора хватает ровно настолько, чтобы выпарить всю имеющуюся жидкость. Аккумулятор срабатывает автоматически, и включается по сигналу специального датчика, который реагирует на затяжки. ТОЛЬКО ОРИГИНАЛ.",
      image: logo2,
      isEven: true,
      back: back2,
    },
    {
      name: "masking",
      number: "03",
      price: "-------------- от 2 500 до 4 000 ₸",
      price2: "",
      title: "MASKING",
      description:
        "Это устройство без хлопот и забот о заправке и подзарядке. Обладая активируемым вытяжкой пусковым механизмом, одноразовое устройство представляет собой одноразовый вейп с предварительно заполненной солью никеля. С концентрацией никельной и небольшим незаметным профилем, который умещается в ладони. Это идеальное устройство для тех, кто всегда в пути и не любит носить с собой много вещей для своих устройств для вейпинга. ТОЛЬКО ОРИГИНАЛ.",
      image: logo3,
      isEven: false,
      back: back3,
    },
    {
      name: "juul",
      number: "04",
      price: "-------------- 8 500 ₸",
      price2: "-------------- 6 300 ₸",
      title: "Устройства и картриджи JUUL.",
      description: "ТОЛЬКО ОРИГИНАЛ.",
      image: logo4,
      isEven: true,
    },
  ]);
  return (
    <>
      <Head>
        <title>DymOK</title>
        <meta name="keywords" content="вейп" />
        <meta name="description" content="" />
        <meta charSet="utf-8" />
      </Head>
      <a className="d-none d-sm-block" href="https://wa.me/+77472562940">
        <img className={styles.whatstapp} src={mobile} alt="whatsapp" />
      </a>
      <a
        className="d-none d-sm-block"
        href="https://www.instagram.com/p/CKG-g3EBGZ7/?igshid=xznxiu2qqg1h"
      >
        <img src={instagram} className={styles.instagram} alt="instagram" />
      </a>
      <AnchorNav className="d-none d-sm-block" products={products} />
      <Container
        id="hero"
        className="p-0 mt-3"
        style={{ overflow: "hidden" }}
        fluid={true}
      >
        <Row>
          <SwiperHero products={products} />
        </Row>
      </Container>
      <Container className={styles.products_container}>
        <div className="pl-2 pr-2">
          {products.map((product, idx) => (
            <ProductSection key={idx} {...product} />
          ))}
        </div>
        <Row>
          <Col xs="12" className="text-center">
            <p
              className="text-title d-none d-sm-block"
              style={{ fontWeight: "700" }}
            >
              <span>Дым</span>
              <span style={{ color: "#FFD600" }}>ОК</span>
            </p>
            <p
              className="text-center mt-3 d-md-none"
              style={{
                fontWeight: "700",
                fontSize: "45px",
                marginBottom: "-20px",
              }}
            >
              <span>Дым</span>
              <span style={{ color: "#FFD600" }}>ОК</span>
            </p>
            <div style={{ width: "100%" }}>
              <p className={`mt-5 text-default ${styles.footer_phone}`}>
                <a href="tel:+77472562940">+7 747 256 2940</a>
              </p>
              <a className="d-md-none" href="https://wa.me/+77472562940">
                <img
                  style={{ width: "40px" }}
                  className="pt-3 mr-3"
                  src={mobile}
                  alt=""
                />
              </a>
              <a
                className="d-md-none"
                href="https://www.instagram.com/p/CKG-g3EBGZ7/?igshid=xznxiu2qqg1h"
              >
                <img
                  style={{ width: "40px" }}
                  className="pt-3"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <p
                className={`mt-5 mb-5 text-default text-bold ${styles.footer_brand}`}
              >
                Dymok.kz 2021
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
