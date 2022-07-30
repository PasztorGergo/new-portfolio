import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Portfolio of Gergő Pásztor, a full-stack webdevloper based in Hungary"
        />
        <meta name="og:image" content="/gergo.jpg" />
        <meta
          name="og:description"
          content="Portfolio of Gergő Pásztor, a full-stack webdevloper based in Hungary"
        />
        <meta name="author" content="Gergő Pásztor" />
        <meta
          name="keywords"
          content="Gergő Pásztor, Gergő Pásztor's portfolio"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@G3rgoPasztor" />
        <meta name="twitter:creator" content="@G3rgoPasztor" />
        <meta
          name="twitter:description>"
          content="Portfolio of Gergő Pásztor, a full-stack webdevloper based in Hungary"
        />
        <meta name="twitter:image" content="/gergo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
