import "tailwindcss/tailwind.css";
import { appWithTranslation } from "next-i18next";
import "../public/utils.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
