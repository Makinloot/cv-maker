import { Button, Col, Form, Input, Row } from "antd";
import style from "./CVForm.module.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/CVContext";
import FormLanguages from "./components/FormLanguages";
import FormEducation from "./components/FormEducation";
import FormSocials from "./components/FormSocials";
import FormSkills from "./components/FormSkills";

const CVForm = () => {
  const navigate = useNavigate();
  const { setData } = useAppContext();

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
        languages: [
          {
            language: values.language,
            level: values.languageLevel,
          },
          {
            language: values.language2 || null,
            level: values.languageLevel2 || null,
          },
          {
            language: values.language3,
            level: values.languageLevel3,
          },
          {
            language: values.language4 || null,
            level: values.languageLevel4 || null,
          },
        ],
        skills: values.skills,
      };
      await setData(cvData);
      console.log("data", cvData);
      navigate("/cv");
    } catch (error) {
      console.log(error, "error setting values");
    }
  };

  const onFinishFailed = (values) => {
    console.log(values);
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
            {/* name */}
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
            {/* phone number */}
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
            {/* email address */}
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
            {/* address */}
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
            <FormSocials />
            {/* education */}
            <FormEducation />
            {/* languages */}
            <FormLanguages />
            {/* skills */}
            <FormSkills />
            <Button htmlType="submit">submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CVForm;
