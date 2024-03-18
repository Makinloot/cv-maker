/* eslint-disable react/prop-types */
import { Button, Col, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";
import { useState } from "react";

const FormSocials = () => {
  const [socialLinks, setSocialLinks] = useState(0);
  const [socialLinkValue, setSocialLinkValue] = useState({
    socialName: "",
    socialName2: "",
    socialName3: "",
  });
  return (
    <>
      <SocialsComponent
        name={"socialName"}
        urlName={"socialLink"}
        setSocialLinkValue={setSocialLinkValue}
        socialLinkValue={socialLinkValue.socialName}
      />
      {socialLinks > 0 && (
        <SocialsComponent
          name={"socialName2"}
          urlName={"socialLink2"}
          setSocialLinkValue={setSocialLinkValue}
          socialLinkValue={socialLinkValue.socialName2}
        />
      )}
      {socialLinks > 1 && (
        <SocialsComponent
          name={"socialName3"}
          urlName={"socialLink3"}
          setSocialLinkValue={setSocialLinkValue}
          socialLinkValue={socialLinkValue.socialName3}
        />
      )}
      <Row gutter={8} justify={"end"}>
        <Col>
          <Button
            className="w100"
            onClick={() => setSocialLinks(socialLinks + 1)}
            disabled={socialLinks > 1 ? true : false}
            type="primary"
          >
            Add more social
          </Button>
        </Col>
        <Col>
          <Button
            className="w100"
            onClick={() => setSocialLinks(socialLinks - 1)}
            disabled={socialLinks < 1 ? true : false}
            type="primary"
            danger
          >
            Remove social
          </Button>
        </Col>
      </Row>
    </>
  );
};

const SocialsComponent = ({
  name,
  urlName,
  setSocialLinkValue,
  socialLinkValue,
}) => {
  return (
    <Row gutter={8}>
      <Col span={12}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Website name"}
          name={name}
        >
          <Input
            style={{ width: "100%" }}
            onChange={(e) =>
              setSocialLinkValue((prevValue) => ({
                ...prevValue,
                [name]: e.target.value,
              }))
            }
            allowClear
            size="large"
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Website URL"}
          name={urlName}
        >
          <Input
            style={{ width: "100%" }}
            disabled={socialLinkValue === "" ? true : false}
            allowClear
            size="large"
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormSocials;
