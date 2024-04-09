import { Content } from "antd/es/layout/layout";
import { Routes, Route } from "react-router-dom";
import AucklandCV from "../../../pages/auckland/AucklandCV";
import EdinburghCV from "../../../pages/edinburgh/EdinburghCV";
import Home from "../../../pages/home/Home";
import CVForm from "../../cv-form/CVForm";
import OtagoCV from "../../../pages/otago/OtagoCV";
import { theme } from "antd";
import Templates from "../../../pages/templates/Templates";
import FinishedResumeButtons from "../../finishedResumeButtons/FinishedResumeButtons";
import ErrorPage from "../../../pages/error-page/ErrorPage";

const Main = () => {
  const {
    token: { borderRadiusLG, colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      className="main-content-wrapper"
      style={{
        borderRadius: borderRadiusLG,
        backgroundColor: colorBgContainer,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<CVForm />} />
        <Route path="/templates" element={<Templates />} />
        <Route
          path="/cv/auckland"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'column'
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Content>
  );
};

export default Main;
