import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Portfolio of Gergő Pásztor, full-stack web developer based in Győr, Hungary."
        />
        <meta name="og:image" content="/gergo.jpg" />
        <meta
          name="og:description"
          content="Portfolio of Gergő Pásztor, full-stack web developer based in Győr, Hungary."
        />
        <meta name="author" content="Gergő Pásztor" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://gergopasztor.com" />
        <meta name="og:site_name" content="Portfolio | Gergő Pásztor" />
        <meta name="og:image" content="/gergo.jpg" />
        <meta name="og:image:type" content="image/jpeg" />
        <meta name="og:image:width" content="600" />
        <meta name="og:image:height" content="450" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
