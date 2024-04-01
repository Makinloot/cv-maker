import { Layout, theme, ConfigProvider, Button } from "antd";
import { motion } from "framer-motion";
import Header from "./components/layout/header/Header";
import { useAppContext } from "./context/CVContext";
import Main from "./components/layout/main/Main";
import Aside from "./components/layout/aside/Aside";
import Footer from "./components/layout/footer/Footer";
import { useTranslation } from "react-i18next";
import {useEffect } from "react";

function App() {
  const { collapsed, darkMode, language, languageClass } = useAppContext();
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng)

    changeLanguage(language)
  }, [language])

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
          <Aside />
          <Layout>
            <motion.div
              initial={{ marginLeft: collapsed ? 80 : 200 }}
              animate={{ marginLeft: collapsed ? 80 : 200 }}
            >
              {/* HEADER */}
              <Header />
              {/* MAIN */}
                <Main />
            </motion.div>
          </Layout>
        </Layout>

        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
