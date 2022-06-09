import "../styles/globals.css";
import { Footer } from "../components";
import CategoryProvider from "../Hooks/CategoryContext";

function MyApp({ Component, pageProps }) {
  return (
    <CategoryProvider>
      <Component {...pageProps} />
      <Footer />
    </CategoryProvider>
  );
}

export default MyApp;
