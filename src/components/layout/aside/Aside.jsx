import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useAppContext } from "../../../context/CVContext";
import { HomeFilled, SnippetsFilled } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Aside = () => {
  const { collapsed, asideKey } = useAppContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { pathname } = useLocation();
  const { t } = useTranslation()

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: colorBgContainer,
        padding: "10px 0",
      }}
    >
      <Menu mode="inline" defaultSelectedKeys={[pathname]}>
        <Menu.Item key="/" icon={<HomeFilled />}>
          <Link to={"/"}>{t("aside.home")}</Link>
        </Menu.Item>
        <Menu.Item key="/templates" icon={<SnippetsFilled />}>
          <Link to={"/templates"}>{t("aside.templates")}</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Aside;
