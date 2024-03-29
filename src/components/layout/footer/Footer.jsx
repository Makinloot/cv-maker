import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: 'center',
      }}
    >
      CV Maker ©{new Date().getFullYear()} Created by {" "}
      <a href="https://github.com/Makinloot" target="_blank" title="github">
        Tornike Epitashvili
      </a>
    </Layout.Footer>
  );
};

export default Footer;
