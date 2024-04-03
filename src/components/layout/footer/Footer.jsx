import { Layout } from "antd";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
      }}
    >
      CV Maker ©{new Date().getFullYear()} {t("footer.createdBy")}
    </Layout.Footer>
  );
};

export default Footer;
