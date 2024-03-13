/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";

const FormExperience = () => {
  const [experience, setExperience] = useState(0);
  const [experienceValue, setExperienceValue] = useState({
    position: "",
    position2: "",
    position3: "",
  });
  return (
    <>
      <p style={{ margin: "10px 0 0", fontSize: "1.25rem" }}>Experience</p>
      <ExperienceComponent
        startDateName={"experienceStart"}
        endDateName={"experienceEnd"}
        positionName={"position"}
        aboutJobName={"aboutJob"}
        companyName={"company"}
        experienceValue={experienceValue.position}
        setExperienceValue={setExperienceValue}
      />
      {experience > 0 && (
        <ExperienceComponent
          startDateName={"experienceStart2"}
          endDateName={"experienceEnd2"}
          positionName={"position2"}
          aboutJobName={"aboutJob2"}
          companyName={"company2"}
          experienceValue={experienceValue.position2}
          setExperienceValue={setExperienceValue}
        />
      )}
      {experience > 1 && (
        <ExperienceComponent
          startDateName={"experienceStart3"}
          endDateName={"experienceEnd3"}
          positionName={"position3"}
          aboutJobName={"aboutJob3"}
          companyName={"company3"}
          experienceValue={experienceValue.position3}
          setExperienceValue={setExperienceValue}
        />
      )}
      <Row gutter={8} justify={"end"}>
        <Col>
          <Button
            className="w100"
            onClick={() => setExperience(experience + 1)}
            disabled={
              experienceValue.position === ""
                ? true
                : experience > 1
                ? true
                : false
            }
            type="primary"
          >
            Add experience
          </Button>
        </Col>
        <Col>
          <Button
            className="w100"
            onClick={() => setExperience(experience - 1)}
            disabled={experience < 1 ? true : false}
            type="primary"
            danger
          >
            Remove experience
          </Button>
        </Col>
      </Row>
    </>
  );
};

const ExperienceComponent = ({
  startDateName,
  endDateName,
  positionName,
  companyName,
  aboutJobName,
  setExperienceValue,
  experienceValue,
}) => {
  return (
    <>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={"Start date"}
            name={startDateName}
          >
            <DatePicker
              className="w100"
              picker="month"
              format="MM.YYYY"
              onChange={(e) => {
                if (e === null) {
                  setExperienceValue((prevValue) => ({
                    ...prevValue,
                    [positionName]: "",
                  }));
                } else {
                  setExperienceValue((prevValue) => ({
                    ...prevValue,
                    [positionName]: e.format("MM.YYYY"),
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
            name={endDateName}
          >
            <DatePicker
              className="w100"
              picker="month"
              format="MM.YYYY"
              disabled={experienceValue === "" ? true : false}
              allowClear
              size="large"
            />
          </Form.Item>
        </Col>
      </Row>
      <Col span={24}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Position"}
          name={positionName}
          rules={[
            {
              required: experienceValue === "" ? false : true,
              message: "Required field",
            },
            {
              max: 50,
              message: "Maximum 50 characters",
            },
          ]}
        >
          <Input
            placeholder="Position"
            disabled={experienceValue === "" ? true : false}
            allowClear
            size="large"
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Company"}
          name={companyName}
          rules={[
            {
              required: experienceValue === "" ? false : true,
              message: "Required field",
            },
            {
              max: 50,
              message: "Maximum 50 characters",
            },
          ]}
        >
          <Input
            placeholder="Company"
            disabled={experienceValue === "" ? true : false}
            allowClear
            size="large"
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"About job"}
          name={aboutJobName}
          rules={[
            {
              required: experienceValue === "" ? false : true,
              message: "Required field",
            },
          ]}
        >
          <Input.TextArea
            placeholder="About job"
            disabled={experienceValue === "" ? true : false}
            allowClear
            size="large"
          />
        </Form.Item>
      </Col>
    </>
  );
};

export default FormExperience;
