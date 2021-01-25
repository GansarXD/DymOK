import Document, { Html, Head, Main, NextScript } from "next/document";
import logo2 from "../images/puff.png";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html prefix="og: http://ogp.me/ns#">
        <Head>
          <title>ДымОк</title>
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="keywords"
            content="Вейпшоп, дымок, dymok, vape, электронные сигареты, купить вейп, купить электронные сигареты,
           одноразовые электронные сигареты, купить одноразовые электронные сигареты, vapeshop, купить вейп Алматы,
            вейп Алматы, купить электронные сигареты Алматы, купить одноразовые электронные сигареты Алматы,
             купить maskking, купить maskking Алматы, HQD, Устройства и картриджи JUUL, PUFF BAR, MASKKING, HQD,
              купить Устройства и картриджи JUUL, купить PUFF BAR, купить MASKKING, купить Устройства и картриджи JUUL Алматы,
               купить PUFF BAR Алматы, купить MASKKING Алматы, "
          />
          <meta
            name="description"
            content="ДымОк - магазин электронных сигарет, в наличии линейки HQD, PUFF BAR, MASKKING,
           Устройства и картриджи JUUL, Измените Ваше Представление Об Электронных Сигаретах"
          />
          <meta charSet="utf-8" />
          <meta property="og:title" content="ДымОк" />
          <meta
            property="og:description"
            content="ДымОк - магазин электронных сигарет, в наличии линейки HQD, PUFF BAR, MASKKING,
               Устройства и картриджи JUUL, Измените Ваше Представление Об Электронных Сигаретах"
          />
          <meta property="og:image" content={logo2} />
          <meta property="og:type" content="website" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
