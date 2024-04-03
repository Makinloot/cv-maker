import { Dropdown, Layout, Switch, theme } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useAppContext } from "../../../context/CVContext";
import { useEffect, useState } from "react";
import geFlag from "/ge-flag.png";
import ukFlag from "/uk-flag.png";
import style from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header = () => {
  const { darkMode, setDarkMode, language, setLanguage } = useAppContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("");

  // Function to handle theme switch
  const handleSwitch = (checked) => {
    setDarkMode(checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  // handle language
  const handleLanguage = (lng) => {
    if (lng === "en") {
      localStorage.setItem("language", "en");
      setLanguage("en");
    } else {
      localStorage.setItem("language", "ge");
      setLanguage("ge");
    }
  };

  // language dropdown items
  const items = [
    {
      label: <img className={style.languageIcon} src={ukFlag} />,
      key: "0",
      onClick: () => handleLanguage("en"),
    },
    {
      label: <img className={style.languageIcon} src={geFlag} />,
      key: "1",
      onClick: () => handleLanguage("ge"),
    },
  ];

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <Layout.Header style={{ background: colorBgContainer }}>
      <div
        className="container"
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={style.headerLinkContainer}>
          <Link
            className={`${style.headerLink} ${
              darkMode ? "whiteColor" : "darkColor"
            }`}
            to={"/"}
          >
            {t("aside.home")}
            <motion.div
              className={`${darkMode ? "white" : "dark"}`}
              initial={{ width: 0 }}
              animate={activeLink === "/" ? { width: "100%" } : { width: 0 }}
              style={{
                position: "absolute",
                height: 2,
                top: 45,
              }}
            />
          </Link>
          <Link
            className={`${style.headerLink} ${
              darkMode ? "whiteColor" : "darkColor"
            }`}
            to={"/templates"}
          >
            {t("aside.templates")}
            <motion.div
              className={`${darkMode ? "white" : "dark"}`}
              initial={{ width: 0 }}
              animate={
                activeLink === "/templates" ? { width: "100%" } : { width: 0 }
              }
              style={{
                position: "absolute",
                height: 2,
                top: 45,
              }}
            />
          </Link>
        </div>
        {/* <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleCollapse}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      /> */}
        <div className={style.headerBtnContainer}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className={style.languageBtnContainer}
            placement="bottom"
          >
            <img
              className={style.languageIcon}
              style={{ marginTop: 0 }}
              src={language === "ge" ? geFlag : ukFlag}
            />
          </Dropdown>
          <Switch
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            defaultChecked={darkMode}
            onChange={handleSwitch}
          />
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
