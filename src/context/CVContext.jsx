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
  const values = {
    setData,
    data,
    setAdditionalInformation,
    additionalInformation,
    setCroppedImg,
    croppedImg,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, useAppContext };
