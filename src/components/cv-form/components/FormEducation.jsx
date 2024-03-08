/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";

const FormEducation = () => {
  const [education, setEducation] = useState(0);
  const [educationValue, setEducationValue] = useState({
    education: "",
    education2: "",
  });
  return (
    <>
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
          onClick={() => setEducation(education + 1)}
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
          onClick={() => setEducation(education - 1)}
          disabled={education < 1 ? true : false}
          type="primary"
          danger
        >
          Remove education
        </Button>
      </div>
    </>
  );
};

export default FormEducation;
