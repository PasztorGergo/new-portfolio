import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Take a look at my projects and achievements that I have made during my developer journey"
        />
        <meta name="og:image" content="/gergo.jpg" />
        <meta
          name="og:description"
          content="Take a look at my projects and achievements that I have made during my developer journey"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
