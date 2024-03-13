import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="container">
        <a href="/">
          <div
            className="logo"
            style={{
              float: "left",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Your Logo
          </div>
        </a>
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px", float: "right" }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Header;
