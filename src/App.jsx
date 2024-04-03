import { Layout, theme, ConfigProvider } from "antd";
import Header from "./components/layout/header/Header";
import { useAppContext } from "./context/CVContext";
import Main from "./components/layout/main/Main";
import Footer from "./components/layout/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { darkMode, language, languageClass } = useAppContext();
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);

    changeLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`App ${languageClass(language)}`}>
      <ConfigProvider
        theme={
          darkMode
            ? {
                algorithm: theme.darkAlgorithm,
              }
            : {}
        }
      >
        <Layout>
          <Layout>
            <div>
              {/* HEADER */}
              <Header />
              {/* MAIN */}
              <Main />
            </div>
          </Layout>
        </Layout>

        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
