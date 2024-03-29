import { createContext, useContext, useState } from "react";

const Context = createContext(null);

const useAppContext = () => {
  return useContext(Context);
};

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [additionalInformation, setAdditionalInformation] = useState(false);
  const [croppedImg, setCroppedImg] = useState("");
  const [formRedirect, setFormRedirect] = useState("");
  const [templateColor, setTemplateColor] = useState("");
  const [collapsed, setCollapsed] = useState(localStorage.getItem("collapsed") === "collapsed" ? true : false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false || false
  );
  const [language, setLanguage] = useState(localStorage.getItem("language") === "ge" ? "ge" : "en")

  const values = {
    setData,
    data,
    setAdditionalInformation,
    additionalInformation,
    setCroppedImg,
    croppedImg,
    setFormRedirect,
    formRedirect,
    setTemplateColor,
    templateColor,
    setCollapsed,
    collapsed,
    setDarkMode,
    darkMode,
    setLanguage,
    language
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, useAppContext };
