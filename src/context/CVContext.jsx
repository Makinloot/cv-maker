import { createContext, useContext, useState } from "react";
import { Font } from "@react-pdf/renderer";
import interRegular from "../assets/fonts/Inter-Regular.ttf";
import interSemiBold from "../assets/fonts/Inter-SemiBold.ttf";
import notoRegular from "../assets/fonts/NotoSansGeorgian_Condensed-Regular.ttf";
import notoBold from "../assets/fonts/NotoSansGeorgian_Condensed-Bold.ttf";

Font.register({ family: "inter-regular", src: interRegular });
Font.register({ family: "inter-bold", src: interSemiBold });
Font.register({ family: "noto-regular", src: notoRegular });
Font.register({ family: "noto-bold", src: notoBold });

const Context = createContext(null);

const useAppContext = () => {
  return useContext(Context);
};

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [additionalInformation, setAdditionalInformation] = useState(false);
  const [croppedImg, setCroppedImg] = useState("");
  const [formRedirect, setFormRedirect] = useState(
    localStorage.getItem("formRedirect") || ""
  );
  const [templateColor, setTemplateColor] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false || false
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") === "ge" ? "ge" : "en"
  );
  const [resumeLanguage, setResumeLanguage] = useState("en");

  // return class for elements according to language state
  const languageClass = (language) => {
    return language === "ge" ? "georgian" : "";
  };

  /*
  return font family based on chosen resume language
  
  'bold-bold' = noto-bold / inter-bold
  'regular-bold' = noto-regular / inter-regular
  'regular-regular' = noto-regular / inter-regular
*/
  const resumeFontFamily = (type) => {
    if (type === "bold-bold") {
      return resumeLanguage === "ge"
        ? {
            fontFamily: "noto-bold",
            letterSpacing: 1.1,
            textTransform: "lowercase",
          }
        : { fontFamily: "inter-bold" };
    } else if (type === "regular-bold") {
      return resumeLanguage === "ge"
        ? {
            fontFamily: "noto-regular",
            letterSpacing: 1.1,
            textTransform: "lowercase",
          }
        : { fontFamily: "inter-bold" };
    } else if (type === "regular-regular") {
      return resumeLanguage === "ge"
        ? {
            fontFamily: "noto-regular",
            letterSpacing: 1.1,
            textTransform: "lowercase",
          }
        : { fontFamily: "inter-regular" };
    }
  };

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
    setDarkMode,
    darkMode,
    setLanguage,
    language,
    languageClass,
    setResumeLanguage,
    resumeLanguage,
    resumeFontFamily,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, useAppContext };
