import { Layout, theme, ConfigProvider } from "antd";
import { motion } from "framer-motion";
import Header from "./components/layout/header/Header";
import { useAppContext } from "./context/CVContext";
import Main from "./components/layout/main/Main";
import Aside from "./components/layout/aside/Aside";

function App() {
  const { collapsed, darkMode } = useAppContext();

  return (
    <>
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
      </ConfigProvider>
    </>
  );
}

export default App;
