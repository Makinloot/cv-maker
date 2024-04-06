/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";
import { useTranslation } from "react-i18next";

const FormExperience = () => {
  const [experience, setExperience] = useState(0);
  const { t } = useTranslation()

  useEffect(() => {
    const sessionStorageValues = JSON.parse(sessionStorage.getItem("cvData"));
    if (sessionStorageValues?.experience) {
      if (sessionStorageValues.experience[0]?.position || sessionStorageValues.experience[0]?.companyName || sessionStorageValues.experience[0]?.aboutJob) {
        setExperience(0)
      }
      if (sessionStorageValues.experience[1]?.position || sessionStorageValues.experience[1]?.companyName || sessionStorageValues.experience[1]?.aboutJob) {
        setExperience(1)
      }
      if (sessionStorageValues.experience[2]?.position || sessionStorageValues.experience[2]?.companyName || sessionStorageValues.experience[2]?.aboutJob) {
        setExperience(2)
      }
    }
  }, [])

  return (
    <>
      <ExperienceComponent
        startDateName={"experienceStart"}
        endDateName={"experienceEnd"}
        positionName={"position"}
        aboutJobName={"aboutJob"}
        companyName={"company"}
      />
      {experience > 0 && (
        <ExperienceComponent
          startDateName={"experienceStart2"}
          endDateName={"experienceEnd2"}
          positionName={"position2"}
          aboutJobName={"aboutJob2"}
          companyName={"company2"}
        />
      )}
      {experience > 1 && (
        <ExperienceComponent
          startDateName={"experienceStart3"}
          endDateName={"experienceEnd3"}
          positionName={"position3"}
          aboutJobName={"aboutJob3"}
          companyName={"company3"}
        />
      )}
      <Row gutter={[8, 8]} justify={"end"}>
        <Col span={24} sm={12}>
          <Button
            className="w100"
            onClick={() => setExperience(experience + 1)}
            disabled={
              experience > 1 && true
            }
            type="primary"
          >
            {t("form.addExperience")}
          </Button>
        </Col>
        <Col span={24} sm={12}>
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
        <Col span={24} sm={12}>
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
              placeholder=""
              allowClear
              size="large"
            />
          </Form.Item>
        </Col>
        <Col span={24} sm={12}>
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
