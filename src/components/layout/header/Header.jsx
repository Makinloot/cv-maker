import { Button, Layout, Switch, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { useAppContext } from "../../../context/CVContext";
import { useEffect } from "react";

const Header = () => {
  const { collapsed, setCollapsed, darkMode, setDarkMode } = useAppContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // Function to handle sidebar collapse
  const handleCollapse = () => {
    if(collapsed) {
      setCollapsed(false)
      localStorage.setItem("collapsed", "")
    } else {
      setCollapsed(true)
      localStorage.setItem("collapsed", "collapsed")
    }
  };

  // Function to handle theme switch
  const handleSwitch = (checked) => {
    setDarkMode(checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
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
        onClick={handleCollapse}
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
          defaultChecked={darkMode}
          onChange={handleSwitch}
        />
      </div>
    </Layout.Header>
  );
};

export default Header;
