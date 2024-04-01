/* eslint-disable react/prop-types */
import { Button, Image, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/CVContext";
import style from "./TemplateModal.module.css";
import { useTranslation } from "react-i18next";

const TemplateModal = ({
  image,
  setShow,
  show,
  navigationPath,
  primaryImage,
  title,
}) => {
  const { setFormRedirect, setTemplateColor, templateColor } = useAppContext();
  const navigate = useNavigate();
  const { t } = useTranslation()

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
      <div className={style.colorContainer}>
        <Button
          className={style.colorButton}
          style={{
            background: "#3F6591",
          }}
          onClick={() => setTemplateColor("#3F6591")}
        />
        <Button
          className={style.colorButton}
          style={{
            background: "#434A54",
          }}
          onClick={() => setTemplateColor("#434A54")}
        />
        <Button
          className={style.colorButton}
          style={{
            background: "#36BC9B",
          }}
          onClick={() => setTemplateColor("#36BC9B")}
        />
      </div>
    </Modal>
  );
};

export default TemplateModal;
