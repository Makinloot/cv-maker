import { Dropdown, Layout, Switch, theme, Button, Drawer } from "antd";
import { MoonOutlined, SunOutlined, MenuFoldOutlined } from "@ant-design/icons";
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
  const [open, setOpen] = useState(false);

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

  // open drawer
  const showDrawer = () => {
    setOpen(true);
  };

  // close drawer
  const onClose = () => {
    setOpen(false);
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
    <Layout.Header className={style.header} style={{ background: colorBgContainer }}>
      <div
        className="container"
      >
        {/* header on small resolution */}
        <div className={style.headerSmall} style={{ background: colorBgContainer }}>
          <Button icon={<MenuFoldOutlined />} onClick={showDrawer} />
          <Drawer width={225} title="CV Maker" onClose={onClose} open={open}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Link
                className={`${style.headerLink} ${darkMode ? "whiteColor" : "darkColor"
                  }`}
                to={"/"}
                onClick={() => setOpen(false)}
              >
                {t("aside.home")}
                <motion.div
                  className={`${darkMode ? "white" : "dark"}`}
                  initial={{ width: 0 }}
                  animate={activeLink === "/" ? { width: "100%" } : { width: 0 }}
                />
              </Link>
              <Link
                className={`${style.headerLink} ${darkMode ? "whiteColor" : "darkColor"
                  }`}
                to={"/templates"}
                onClick={() => setOpen(false)}
              >
                {t("aside.templates")}
                <motion.div
                  className={`${darkMode ? "white" : "dark"}`}
                  initial={{ width: 0 }}
                  animate={
                    activeLink === "/templates" ? { width: "100%" } : { width: 0 }
                  }
                />
              </Link>
              <div className={style.headerBtnContainer} style={{ margin: '20px 0' }}>
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
          </Drawer>
        </div>
        {/* header on big resolution */}
        <div
          className={style.headerBig}
          style={{
            background: colorBgContainer,
          }}>
          <div className={style.headerLinkContainer}>
            <Link
              className={`${style.headerLink} ${darkMode ? "whiteColor" : "darkColor"
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
              className={`${style.headerLink} ${darkMode ? "whiteColor" : "darkColor"
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
      </div>
    </Layout.Header>
  );
};

export default Header;
