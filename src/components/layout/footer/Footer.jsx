import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        backgroundColor: "#001529",
        color: "white",
      }}
    >
      <p>Your Company Name &copy; {new Date().getFullYear()}</p>
    </Layout.Footer>
  );
};

export default Footer;
