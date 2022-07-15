import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppShell, Global } from "@mantine/core";
import { Footer, Header, Navigation } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={(theme) => ({
          "*": {
            fontFamily: "'Inter', sans-serif !important",
            color: "#fff",
          },
          a: {
            padding: "0.1rem",
            textDecoration: "none",
          },
        })}
      />
      <AppShell footer={<Footer />} header={<Header />}>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}

export default MyApp;
