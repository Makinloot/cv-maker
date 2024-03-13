/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";

const FormEducation = () => {
  const [education, setEducation] = useState(0);
  const [educationValue, setEducationValue] = useState({
    educationStart: "",
    educationStart2: "",
  });
  return (
    <>
      <p style={{ margin: "10px 0 0", fontSize: "1.25rem" }}>Education</p>
      <EducationComponent
        startName={"educationStart"}
        endName={"educationEnd"}
        collegeName={"college"}
        degreeName={"degree"}
        setEducationValue={setEducationValue}
        educationValue={educationValue.educationStart}
      />
      {education > 0 && (
        <EducationComponent
          startName={"educationStart2"}
          endName={"educationEnd2"}
          collegeName={"college2"}
          degreeName={"degree2"}
          setEducationValue={setEducationValue}
          educationValue={educationValue.educationStart2}
        />
      )}
      <Row gutter={8} justify={"end"}>
        <Col>
          <Button
            className="w100"
            onClick={() => setEducation(education + 1)}
            disabled={
              educationValue.educationStart === ""
                ? true
                : education > 0
                ? true
                : false
            }
            type="primary"
          >
            Add education
          </Button>
        </Col>
        <Col>
          <Button
            className="w100"
            onClick={() => setEducation(education - 1)}
            disabled={education < 1 ? true : false}
            type="primary"
            danger
          >
            Remove education
          </Button>
        </Col>
      </Row>
    </>
  );
};

const EducationComponent = ({
  startName,
  endName,
  collegeName,
  degreeName,
  setEducationValue,
  educationValue,
}) => {
  return (
    <Row gutter={8}>
      <Col span={12}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Start date"}
          name={startName}
        >
          <DatePicker
            className="w100"
            picker="year"
            onChange={(e) => {
              if (e === null) {
                setEducationValue((prevValue) => ({
                  ...prevValue,
                  [startName]: "",
                }));
              } else {
                setEducationValue((prevValue) => ({
                  ...prevValue,
                  [startName]: e.year(),
                }));
              }
            }}
            allowClear
            size="large"
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"End date"}
          name={endName}
        >
          <DatePicker
            className="w100"
            picker="year"
            disabled={educationValue === "" ? true : false}
            allowClear
            size="large"
          />
        </Form.Item>
      </Col>
      {educationValue !== "" && (
        <>
          <Col span={24}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={"College"}
              name={collegeName}
              rules={[
                {
                  required: true,
                  message: "Required field",
                },
                {
                  max: 50,
                  message: "Maximum 50 characters",
                },
              ]}
            >
              <Input placeholder="College" allowClear size="large" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={"Degree"}
              name={degreeName}
              rules={[
                {
                  required: true,
                  message: "Required field",
                },
                {
                  max: 50,
                  message: "Maximum 50 characters",
                },
              ]}
            >
              <Input placeholder="Degree" allowClear size="large" />
            </Form.Item>
          </Col>
        </>
      )}
    </Row>
  );
};

export default FormEducation;
