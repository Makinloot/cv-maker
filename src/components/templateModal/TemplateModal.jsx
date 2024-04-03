/* eslint-disable react/prop-types */
import { Button, Image, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/CVContext";
import style from "./TemplateModal.module.css";
import { useTranslation } from "react-i18next";
import geFlag from "/ge-flag.png";
import ukFlag from "/uk-flag.png";

const TemplateModal = ({
  image,
  setShow,
  show,
  navigationPath,
  primaryImage,
  title,
}) => {
  const {
    setFormRedirect,
    setTemplateColor,
    templateColor,
    darkMode,
    setResumeLanguage,
    resumeLanguage,
  } = useAppContext();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Modal
      open={show}
      onCancel={() => {
        setShow(false);
        setTemplateColor("");
      }}
      onOk={() => {
        setFormRedirect(navigationPath);
        navigate("/form");
      }}
      title={`${t("templates.modalTitle")} ${title}`}
      style={{ position: "relative" }}
      okText={t("templates.modalBtnOk")}
      cancelText={t("templates.modalBtnCancel")}
    >
      <Image
        preview={false}
        src={
          templateColor === "#3F6591"
            ? image.blue
            : templateColor === "#434A54"
            ? image.dark
            : templateColor === "#36BC9B"
            ? image.green
            : primaryImage
        }
      />
      <div className={`${style.colorContainer} ${darkMode ? "dark" : "white"}`}>
        <Button
          className={style.colorButton}
          style={{
            background: "#3F6591",
            outline:
              templateColor === "#3F6591" && darkMode
                ? "2px solid yellow"
                : templateColor === "#3F6591" && !darkMode
                ? "2px solid black"
                : "none",
          }}
          onClick={() => setTemplateColor("#3F6591")}
        />
        <Button
          className={style.colorButton}
          style={{
            background: "#434A54",
            outline:
              templateColor === "#434A54" && darkMode
                ? "2px solid yellow"
                : templateColor === "#434A54" && !darkMode
                ? "2px solid black"
                : "none",
          }}
          onClick={() => setTemplateColor("#434A54")}
        />
        <Button
          className={style.colorButton}
          style={{
            background: "#36BC9B",
            outline:
              templateColor === "#36BC9B" && darkMode
                ? "2px solid yellow"
                : templateColor === "#36BC9B" && !darkMode
                ? "2px solid black"
                : "none",
          }}
          onClick={() => setTemplateColor("#36BC9B")}
        />
      </div>
      <div
        className={`${style.languageContainer} ${darkMode ? "dark" : "white"}`}
      >
        <Button
          className={style.colorButton}
          style={{
            background: "#3F6591",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline:
              resumeLanguage === "en" && darkMode
                ? "2px solid yellow"
                : resumeLanguage === "en" && !darkMode
                ? "2px solid black"
                : "none",
          }}
          onClick={() => setResumeLanguage("en")}
        >
          <img className={style.languageButton} src={ukFlag} />
        </Button>
        <Button
          className={style.colorButton}
          style={{
            background: "#3F6591",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline:
              resumeLanguage === "ge" && darkMode
                ? "2px solid yellow"
                : resumeLanguage === "ge" && !darkMode
                ? "2px solid black"
                : "none",
          }}
          onClick={() => setResumeLanguage("ge")}
          icon={<img className={style.languageButton} src={geFlag} />}
        >
          {/* <img className={style.languageButton} src={geFlag} /> */}
        </Button>
      </div>
    </Modal>
  );
};

export default TemplateModal;
