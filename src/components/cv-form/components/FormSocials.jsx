/* eslint-disable react/prop-types */
import { Button, Col, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const FormSocials = ({ additionalOpen }) => {
  const [socialLinks, setSocialLinks] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const sessionStorageValues = JSON.parse(sessionStorage.getItem("cvData"));
    if (sessionStorageValues?.socials) {
      if (sessionStorageValues?.socials[1]?.socialName) {
        setSocialLinks(1);
      }
      if (sessionStorageValues?.socials[2]?.socialName) {
        setSocialLinks(2);
      }
    }
  }, [additionalOpen]);

  return (
    <>
      <SocialsComponent name={"socialName"} urlName={"socialLink"} />
      {socialLinks > 0 && (
        <SocialsComponent name={"socialName2"} urlName={"socialLink2"} />
      )}
      {socialLinks > 1 && (
        <SocialsComponent name={"socialName3"} urlName={"socialLink3"} />
      )}
      <Row gutter={[8, 8]} justify={"end"}>
        <Col span={24} sm={12}>
          <Button
            className="w100"
            onClick={() => setSocialLinks(socialLinks + 1)}
            disabled={socialLinks > 1 ? true : false}
            type="primary"
          >
            {t("form.addSocial")}
          </Button>
        </Col>
        <Col span={24} sm={12}>
          <Button
            className="w100"
            onClick={() => setSocialLinks(socialLinks - 1)}
            disabled={socialLinks < 1 ? true : false}
            type="primary"
            danger
          >
            {t("form.removeSocial")}
          </Button>
        </Col>
      </Row>
    </>
  );
};

const SocialsComponent = ({ name, urlName }) => {
  const { t } = useTranslation();
  return (
    <Row gutter={8}>
      <Col span={24} sm={12}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={`${t("form.websiteName")}`}
          name={name}
        >
          <Input style={{ width: "100%" }} allowClear size="large" />
        </Form.Item>
      </Col>
      <Col span={24} sm={12}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={`${t("form.websiteUrl")}`}
          name={urlName}
        >
          <Input style={{ width: "100%" }} allowClear size="large" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormSocials;
