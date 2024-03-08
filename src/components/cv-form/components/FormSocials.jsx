import { Button, Col, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";
import { useState } from "react";

const FormSocials = () => {
  const [socialLinks, setSocialLinks] = useState(0);
  const [socialLinkValue, setSocialLinkValue] = useState({
    value: "",
    value2: "",
    value3: "",
  });
  return (
    <>
      <p style={{ margin: "10px 0 0", fontSize: "1.25rem" }}>Social media</p>
      <Row>
        <div className="flexRow">
          <Col span={12}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={"Social name"}
              name={"socialName"}
            >
              <Input
                placeholder="Social name"
                style={{ width: "100%" }}
                onChange={(e) =>
                  setSocialLinkValue((prevValue) => ({
                    ...prevValue,
                    value: e.target.value,
                  }))
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={"Social URL"}
              name={"socialLink"}
              rules={[
                {
                  required: socialLinkValue.value !== "" ? true : false,
                  type: "url",
                  message: "Please enter URL",
                },
              ]}
            >
              <Input
                placeholder="URL"
                style={{ width: "100%" }}
                disabled={socialLinkValue.value === "" ? true : false}
              />
            </Form.Item>
          </Col>
        </div>
        {socialLinks > 0 && (
          <div className="flexRow">
            <Col span={12}>
              <Form.Item
                className={style.formItem}
                labelCol={{ style: { padding: "0 0 2px" } }}
                label={"Social name"}
                name={"socialName2"}
              >
                <Input
                  placeholder="Name"
                  style={{ width: "100%" }}
                  onChange={(e) =>
                    setSocialLinkValue((prevValue) => ({
                      ...prevValue,
                      value2: e.target.value,
                    }))
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className={style.formItem}
                labelCol={{ style: { padding: "0 0 2px" } }}
                label={"Social URL"}
                name={"socialLink2"}
                rules={[
                  {
                    required: socialLinkValue.value2 !== "" ? true : false,
                    type: "url",
                    message: "Please enter URL",
                  },
                ]}
              >
                <Input
                  placeholder="URL"
                  style={{ width: "100%" }}
                  disabled={socialLinkValue.value2 === "" ? true : false}
                />
              </Form.Item>
            </Col>
          </div>
        )}
        {socialLinks > 1 && (
          <div className="flexRow">
            <Col span={12}>
              <Form.Item
                className={style.formItem}
                labelCol={{ style: { padding: "0 0 2px" } }}
                label={"Social name"}
                name={"socialName3"}
              >
                <Input
                  placeholder="Name"
                  style={{ width: "100%" }}
                  onChange={(e) =>
                    setSocialLinkValue((prevValue) => ({
                      ...prevValue,
                      value3: e.target.value,
                    }))
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className={style.formItem}
                labelCol={{ style: { padding: "0 0 2px" } }}
                label={"Social URL"}
                name={"socialLink3"}
                rules={[
                  {
                    required: socialLinkValue.value3 !== "" ? true : false,
                    type: "url",
                    message: "Please enter URL",
                  },
                ]}
              >
                <Input
                  placeholder="URL"
                  style={{ width: "100%" }}
                  disabled={socialLinkValue.value3 === "" ? true : false}
                />
              </Form.Item>
            </Col>
          </div>
        )}
        <div className="flexBetween">
          <Button
            className="w100"
            onClick={() => setSocialLinks(socialLinks + 1)}
            disabled={socialLinks > 1 ? true : false}
            type="primary"
          >
            Add more social
          </Button>
          <Button
            className="w100"
            onClick={() => setSocialLinks(socialLinks - 1)}
            disabled={socialLinks < 1 ? true : false}
            type="primary"
            danger
          >
            Remove social
          </Button>
        </div>
      </Row>
    </>
  );
};

export default FormSocials;
