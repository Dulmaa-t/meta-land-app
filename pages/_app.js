import "../styles/globals.css";
import { useRouter } from "next/router";
import ko from "../locale/lang/ko.json";
import en from "../locale/lang/en.json";
import { Provider } from 'react-redux'
import { store } from "../redux/store"
import Template from "../components/Template/Template.jsx";
import { IntlProvider } from "react-intl";

const messages = {
  ko,
  en,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return <IntlProvider messages={messages[locale]} locale={locale}>
    <Provider store={store}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </Provider>
  </IntlProvider>
}

export default MyApp
