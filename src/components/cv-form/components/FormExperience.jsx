/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";
import { useTranslation } from "react-i18next";

const FormExperience = () => {
  const [experience, setExperience] = useState(0);
  const [experienceValue, setExperienceValue] = useState({
    position: "",
    position2: "",
    position3: "",
  });
  const { t } = useTranslation()
  return (
    <>
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
           {t("form.addExperience")}
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
            {t("form.removeExperience")}
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
  const { t } = useTranslation()
  return (
    <>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={`${t("form.startDate")}`}
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
              placeholder=""
              allowClear
              size="large"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={`${t("form.endDate")}`}
            name={endDateName}
          >
            <DatePicker
              className="w100"
              picker="month"
              format="MM.YYYY"
              disabled={experienceValue === "" ? true : false}
              allowClear
              size="large"
              placeholder=""
            />
          </Form.Item>
        </Col>
      </Row>
      <Col span={24}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={`${t("form.position")}`}
          name={positionName}
        >
          <Input
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
          label={`${t("form.company")}`}
          name={companyName}
        >
          <Input
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
          label={`${t("form.aboutJob")}`}
          name={aboutJobName}
        >
          <Input.TextArea
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
