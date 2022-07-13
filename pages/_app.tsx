import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppShell } from "@mantine/core";
import { Footer, Navigation } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppShell navbar={<Navigation />} footer={<Footer />}>
      <Component {...pageProps} />
    </AppShell>
  );
}

export default MyApp;
