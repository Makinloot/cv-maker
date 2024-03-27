import { Button, Layout, Switch, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { useAppContext } from "../../../context/CVContext";

const Header = () => {
  const { collapsed, setCollapsed, darkMode, setDarkMode } = useAppContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSwitch = (checked) => {
    setDarkMode(!darkMode);
    if (checked) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Layout.Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <div style={{ paddingRight: 20 }}>
        <Switch
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
          defaultChecked={darkMode ? true : false}
          onChange={handleSwitch}
        />
      </div>
    </Layout.Header>
  );
};

export default Header;
