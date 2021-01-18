import Head from 'next/head'
import styles from './Home.module.scss'
import { Container, Row, Col } from 'reactstrap'
import {ProductSection} from "../components/ProductSection";
import {useState} from "react"
import logo1 from "../images/hqd.jpg"
import logo2 from "../images/puff.png"
import logo3 from "../images/masking.jpg"
import {SwiperHero} from "../components/SwiperHero";
import back1 from "../images/masking-hero.jpg"
import back2 from "../images/hqd-hero.jpg"
import back3 from "../images/puff-hero.jpg"
import whatsapp from "../images/whatsapp.svg"



export default function Home() {
  const [products] = useState([
    {
      number: "01",
      price: "-------------- 10 900 ₸",
      title: "Линейка HQD",
      description: "Из-за отсутствия побочных продуктов горения, наша продукция наносит гораздо меньший вред вашему здоровью! Идеально подобранная крепость жидкости на правильном солевом никотине вкупе с правильной мощностью дает лучший потребительский опыт. Забудьте о зарядных устройствах, флаконе с жидкостью, сгоревшей вате, испарителях и кнопках.",
      image: logo1,
      isEven: false,
      back: back1
    },
    {
      number: "02",
      price: "-------------- 16 500 ₸",
      title: "Линейка PUFF BAR",
      description: "Внешне утсройства выполнены в моноблочном форм-факторе, а их конструкция представляет собой обычный аккумулятор и емкость с жидкостью. Аккумулятора хватает ровно настолько, чтобы выпарить всю имеющуюся жидкость. Аккумулятор срабатывает автоматически, и включается по сигналу специального датчика, который реагирует на затяжки.",
      image: logo2,
      isEven: true,
      back: back2

    },
    {
      number: "03",
      price: "-------------- 5 500 ₸",
      title: "MASKING",
      description: "Это устройство без хлопот и забот о заправке и подзарядке. Обладая активируемым вытяжкой пусковым механизмом, одноразовое устройство представляет собой одноразовый вейп с предварительно заполненной солью никеля. С концентрацией никельной и небольшим незаметным профилем, который умещается в ладони. Это идеальное устройство для тех, кто всегда в пути и не любит носить с собой много вещей для своих устройств для вейпинга.",
      image: logo3,
      isEven: false,
      back: back3
    },
    // {
    //   number: "04",
    //   price: "10 900 ₸",
    //   title: "Линейка HQD",
    //   description: "Из-за отсутствия побочных продуктов горения, наша продукция наносит гораздо меньший вред вашему здоровью! Идеально подобранная крепость жидкости на правильном солевом никотине вкупе с правильной мощностью дает лучший потребительский опыт. Забудьте о зарядных устройствах, флаконе с жидкостью, сгоревшей вате, испарителях и кнопках.",
    //   // image: {url: {logo1}},
    //   isEven: true
    // },

  ])
  return (
    <>
      <Head>
        <title>DymOK</title>
        <meta name="keywords" content="вейп"/>
        <meta name="description" content=""/>
        <meta charSet="utf-8" />
      </Head>
      <a href="https://wa.me/+77472562940">
        <img className={styles.whatstapp} src={whatsapp} alt=""/>
      </a>
      <Container
          className="p-0 mt-3"
          style={{overflow: "hidden"}}
          fluid={true}>
        <Row>
          <SwiperHero products={products} />
        </Row>
      </Container>
      <Container style={{marginTop: "-200px", zIndex: "2", position: "relative"}} >
        <div>
          {products.map( (product, idx) => (<ProductSection key={idx} {...product} />))}
        </div>
          <Row>
            <Col xs="12" className="text-center">
              <p className="text-title" style={{fontWeight: "700"}}>
                <span>Дым</span>
                <span style={{color: "#FFD600"}}>ОК</span>
              </p>
              <div style={{width: "100%"}}>
                <a href="tel:+77472562940">
                <p className={`mt-5 text-default ${styles.footer_phone}`}>+7 747 256 2940</p>
                </a>
                <p className={`mt-5 mb-5 text-default text-bold ${styles.footer_brand}`}>Dymok.kz 2021</p>
              </div>
            </Col>
          </Row>
      </Container>
    </>
  )
}
