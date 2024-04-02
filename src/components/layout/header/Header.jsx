import { Button, Dropdown, Layout, Select, Space, Switch, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
  DownOutlined
} from "@ant-design/icons";
import { useAppContext } from "../../../context/CVContext";
import { useEffect } from "react";
import geFlag from '/ge-flag.png';
import ukFlag from '/uk-flag.png';
import style from './Header.module.css'

const Header = () => {
  const { collapsed, setCollapsed, darkMode, setDarkMode, language, setLanguage } = useAppContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // Function to handle sidebar collapse
  const handleCollapse = () => {
    if (collapsed) {
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

  // handle language
  const handleLanguage = (lng) => {
    if(lng === 'en') {
      localStorage.setItem("language", "en")
      setLanguage("en")
    } else {
      localStorage.setItem("language", "ge")
      setLanguage("ge")
    }
  }

  // language dropdown items
  const items = [
    {
      label: (
        <img className={style.languageIcon} src={ukFlag} />
      ),
      key: '0',
      onClick: () => handleLanguage('en')
    },
    {
      label: (
        <img  className={style.languageIcon} src={geFlag} />
      ),
      key: '1',
      onClick: () => handleLanguage('ge')
    },
  ];

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
      <div className={style.headerBtnContainer}>
        <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
          className={style.languageBtnContainer}
          placement="bottom"
        >
          <img className={style.languageIcon} style={{ marginTop: 0 }} src={language === 'ge' ? geFlag : ukFlag} />
        </Dropdown>
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
