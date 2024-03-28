import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useAppContext } from "../../../context/CVContext";
import { HomeFilled, SnippetsFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Aside = () => {
  const { collapsed, asideKey, setAsideKey } = useAppContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeFilled />}>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SnippetsFilled />}>
          <Link to={"/templates"}>Templates</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Aside;
