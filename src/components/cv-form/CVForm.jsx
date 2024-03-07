import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import style from "./CVForm.module.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/CVContext";
import { useState } from "react";
import moment from "moment";

const CVForm = () => {
  const navigate = useNavigate();
  const { setData } = useAppContext();
  const [socialLinks, setSocialLinks] = useState(0);
  const [socialLinkValue, setSocialLinkValue] = useState({
    value: "",
    value2: "",
    value3: "",
  });
  const [education, setEducation] = useState(0);
  const [educationValue, setEducationValue] = useState({
    education: "",
    education2: "",
  });
  const onFinish = async (values) => {
    console.log("values", values);
    try {
      const cvData = {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        address: values.address,
        socials: [
          {
            socialName: values.socialName,
            socialLink: values.socialLink,
          },
          {
            socialName: values.socialName2,
            socialLink: values.socialLink2,
          },
          {
            socialName: values.socialName3,
            socialLink: values.socialLink3,
          },
        ],
        education: [
          {
            educationStart:
              values.educationStart && values.educationStart.year(),
            educationEnd: values.educationEnd && values.educationEnd.year(),
            college: values.college,
            degree: values.degree,
          },
          {
            educationStart:
              values.educationStart2 && values.educationStart2.year(),
            educationEnd: values.educationEnd2 && values.educationEnd2.year(),
            college: values.college2,
            degree: values.degree2,
          },
        ],
      };
      await setData(cvData);
      console.log("data", cvData);
      navigate("/cv");
    } catch (error) {
      console.log(error, "error setting values");
    }
  };

  const onFinishFailed = (values) => {
    // console.log(values);
    console.log(values.values.educationStart.year());
    console.log("failed to submit");
  };

  return (
    <div className="Form">
      <div className="container">
        <div className="form-wrapper">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            layout="vertical"
            className={style.formWrapper}
          >
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={"First name"}
                  name={"firstName"}
                  rules={[
                    {
                      required: true,
                      message: "First name is required",
                    },
                  ]}
                >
                  <Input placeholder="First name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={"Last name"}
                  name={"lastName"}
                  rules={[
                    {
                      required: true,
                      message: "Last name is required",
                    },
                  ]}
                >
                  <Input placeholder="Last name" />
                </Form.Item>
              </Col>
            </Row>
            <Col>
              <Form.Item
                className={style.formItem}
                labelCol={{ style: { padding: "0 0 2px" } }}
                label={"Phone number"}
                name={"phone"}
                rules={[
                  {
                    required: true,
                    message: "Phone number is required",
                  },
                ]}
              >
                <Input type="number" placeholder="Phone" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                className={style.formItem}
                labelCol={{ style: { padding: "0 0 2px" } }}
                label={"Email address"}
                name={"email"}
                rules={[
                  {
                    required: true,
                    message: "Email address is required",
                  },
                ]}
              >
                <Input type="email" placeholder="Email address" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                className={style.formItem}
                labelCol={{ style: { padding: "0 0 2px" } }}
                label={"Address"}
                name={"address"}
              >
                <Input placeholder="Address" />
              </Form.Item>
            </Col>
            {/* social links */}
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
                          required:
                            socialLinkValue.value2 !== "" ? true : false,
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
                          required:
                            socialLinkValue.value3 !== "" ? true : false,
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
            {/* end of social links */}
            {/* education */}
            <p style={{ margin: "10px 0 0", fontSize: "1.25rem" }}>Education</p>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={"Start date"}
                  name={"educationStart"}
                >
                  <DatePicker
                    className="w100"
                    picker="year"
                    onChange={(e) => {
                      if (e === null) {
                        setEducationValue((prevValue) => ({
                          ...prevValue,
                          education: "",
                        }));
                      } else {
                        setEducationValue((prevValue) => ({
                          ...prevValue,
                          education: e.year(),
                        }));
                      }
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={"End date"}
                  name={"educationEnd"}
                >
                  <DatePicker
                    className="w100"
                    picker="year"
                    disabled={educationValue.education === "" ? true : false}
                  />
                </Form.Item>
              </Col>
              {educationValue.education !== "" && (
                <>
                  <Col span={24}>
                    <Form.Item
                      className={style.formItem}
                      labelCol={{ style: { padding: "0 0 2px" } }}
                      label={"College"}
                      name={"college"}
                      rules={[
                        {
                          required: true,
                          message: "Please enter a college",
                        },
                      ]}
                    >
                      <Input placeholder="College" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      className={style.formItem}
                      labelCol={{ style: { padding: "0 0 2px" } }}
                      label={"Degree"}
                      name={"degree"}
                      rules={[
                        {
                          required: true,
                          message: "Please enter a degree",
                        },
                      ]}
                    >
                      <Input placeholder="Degree" />
                    </Form.Item>
                  </Col>
                </>
              )}
            </Row>
            {education > 0 && (
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    className={style.formItem}
                    labelCol={{ style: { padding: "0 0 2px" } }}
                    label={"Start date"}
                    name={"educationStart2"}
                  >
                    <DatePicker
                      className="w100"
                      picker="year"
                      onChange={(e) => {
                        if (e === null) {
                          setEducationValue((prevValue) => ({
                            ...prevValue,
                            education2: "",
                          }));
                        } else {
                          setEducationValue((prevValue) => ({
                            ...prevValue,
                            education2: e.year(),
                          }));
                        }
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    className={style.formItem}
                    labelCol={{ style: { padding: "0 0 2px" } }}
                    label={"End date"}
                    name={"educationEnd2"}
                  >
                    <DatePicker
                      className="w100"
                      picker="year"
                      disabled={educationValue.education2 === "" ? true : false}
                    />
                  </Form.Item>
                </Col>
                {educationValue.education2 !== "" && (
                  <>
                    <Col span={24}>
                      <Form.Item
                        className={style.formItem}
                        labelCol={{ style: { padding: "0 0 2px" } }}
                        label={"College"}
                        name={"college2"}
                        rules={[
                          {
                            required: true,
                            message: "Please enter a college",
                          },
                        ]}
                      >
                        <Input placeholder="College" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        className={style.formItem}
                        labelCol={{ style: { padding: "0 0 2px" } }}
                        label={"Degree"}
                        name={"degree2"}
                        rules={[
                          {
                            required: true,
                            message: "Please enter a degree",
                          },
                        ]}
                      >
                        <Input placeholder="Degree" />
                      </Form.Item>
                    </Col>
                  </>
                )}
              </Row>
            )}
            <div className="flexBetween">
              <Button
                className="w100"
                onClick={() => setEducation(socialLinks + 1)}
                disabled={
                  educationValue.education === ""
                    ? true
                    : education > 0
                    ? true
                    : false
                }
                type="primary"
              >
                Add education
              </Button>
              <Button
                className="w100"
                onClick={() => setEducation(socialLinks - 1)}
                disabled={education < 1 ? true : false}
                type="primary"
                danger
              >
                Remove education
              </Button>
            </div>
            {/* end of education */}
            <Button htmlType="submit">submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CVForm;
