import { Layout } from "antd";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../context/CVContext";

const Footer = () => {
  const { collapsed } = useAppContext()
  const { t, i18n } = useTranslation()
  return (
    <Layout.Footer
      style={{
        textAlign: 'center',
        paddingLeft: collapsed ? 80 : 200
      }}
    >
      CV Maker ©{new Date().getFullYear()} {t("footer.createdBy")}
    </Layout.Footer>
  );
};

export default Footer;
