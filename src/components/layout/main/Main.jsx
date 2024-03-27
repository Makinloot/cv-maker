import { Content } from "antd/es/layout/layout";
import { Routes, Route } from "react-router-dom";
import AucklandCV from "../../../pages/auckland/AucklandCV";
import EdinburghCV from "../../../pages/edinburgh/EdinburghCV";
import Home from "../../../pages/home/Home";
import CVForm from "../../cv-form/CVForm";
import OtagoCV from "../../../pages/otago/OtagoCV";
import { theme } from "antd";

const Main = () => {
  const {
    token: { borderRadiusLG, colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: "100vh",
        borderRadius: borderRadiusLG,
        backgroundColor: colorBgContainer,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<CVForm />} />
        <Route
          path="/cv/auckland"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AucklandCV />
            </div>
          }
        />
        <Route
          path="/cv/edinburgh"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EdinburghCV />
            </div>
          }
        />
        <Route
          path="/cv/otago"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OtagoCV />
            </div>
          }
        />
      </Routes>
    </Content>
  );
};

export default Main;
