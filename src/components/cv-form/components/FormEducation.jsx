/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../context/CVContext";

const FormEducation = () => {
  const [education, setEducation] = useState(0);
  const [educationValue, setEducationValue] = useState({
    educationStart: "",
    educationStart2: "",
  });
  const { t } = useTranslation()
  return (
    <>
      <p style={{ margin: "10px 0 0", fontSize: "1.25rem" }}>{t("form.educationTitle")}</p>
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
      <Row gutter={[8, 8]} justify={"end"}>
        <Col span={24} sm={12}>
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
            {t("form.addEducation")}
          </Button>
        </Col>
        <Col span={24} sm={12}>
          <Button
            className="w100"
            onClick={() => setEducation(education - 1)}
            disabled={education < 1 ? true : false}
            type="primary"
            danger
          >
            {t("form.removeEducation")}
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
  const { validateGeorgian } = useAppContext()
  const { t } = useTranslation()
  return (
    <Row gutter={8}>
      <Col span={24} sm={12}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={t("form.educationStartDate")}
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
            placeholder=""
          />
        </Form.Item>
      </Col>
      <Col span={24} sm={12}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={t("form.educationEndDate")}
          name={endName}
        >
          <DatePicker
            className="w100"
            picker="year"
            disabled={educationValue === "" ? true : false}
            allowClear
            size="large"
            placeholder=""
          />
        </Form.Item>
      </Col>
      {educationValue !== "" && (
        <>
          <Col span={24}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={t("form.college")}
              name={collegeName}
              rules={[{
                validator: validateGeorgian
              }]}
            >
              <Input allowClear size="large" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={t("form.degree")}
              name={degreeName}
              rules={[{
                validator: validateGeorgian
              }]}
            >
              <Input allowClear size="large" />
            </Form.Item>
          </Col>
        </>
      )}
    </Row>
  );
};

export default FormEducation;
