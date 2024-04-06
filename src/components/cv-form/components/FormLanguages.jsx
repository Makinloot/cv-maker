/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import style from "../CVForm.module.css";
import { useTranslation } from "react-i18next";

const FormLanguages = () => {
  const [languages, setLanguages] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const sessionStorageValues = JSON.parse(sessionStorage.getItem("cvData"));
    if (sessionStorageValues?.languages) {
      if (sessionStorageValues.languages[0]?.language) {
        setLanguages(0)
      }
      if (sessionStorageValues.languages[1]?.language) {
        setLanguages(1)
      }
      if (sessionStorageValues.languages[2]?.language) {
        setLanguages(2)
      }
    }
  }, [])

  return (
    <>
      <p style={{ margin: "10px 0 0", fontSize: "1.25rem" }}>
        {t("form.languagesTitle")}
      </p>
      <LanguageComponent
        name={"language"}
        levelName={"languageLevel"}

      />
      {languages > 0 && (
        <LanguageComponent
          name={"language2"}
          levelName={"languageLevel2"}

        />
      )}
      {languages > 1 && (
        <LanguageComponent
          name={"language3"}
          levelName={"languageLevel3"}

        />
      )}
      {languages > 2 && (
        <LanguageComponent
          name={"language4"}
          levelName={"languageLevel4"}

        />
      )}
      <Row gutter={[8, 8]} justify={"end"}>
        <Col span={24} sm={12}>
          <Button
            className="w100"
            onClick={() => setLanguages(languages + 1)}
            disabled={languages > 2 && true}
            type="primary"
          >
            {t("form.addLanguage")}
          </Button>
        </Col>
        <Col span={24} sm={12}>
          <Button
            className="w100"
            onClick={() => setLanguages(languages - 1)}
            disabled={languages < 1 ? true : false}
            type="primary"
            danger
          >
            {t("form.removeLanguage")}
          </Button>
        </Col>
      </Row>
    </>
  );
};

const LanguageComponent = ({
  name,
  levelName
}) => {
  const { t } = useTranslation();

  return (
    <Row gutter={8}>
      <Col span={24} sm={19}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={t("form.language")}
          name={name}
        >
          <Input
            allowClear
            size="large"
          />
        </Form.Item>
      </Col>
      <Col span={24} sm={5}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={t("form.languageLevelTitle")}
          name={levelName}
        >
          <Select
            allowClear
            size="large"
          >
            <Select.Option value="native">
              {t("form.languageLevelNative")}
            </Select.Option>
            <Select.Option value="c2">C2</Select.Option>
            <Select.Option value="c1">C1</Select.Option>
            <Select.Option value="b2">B2</Select.Option>
            <Select.Option value="b1">B1</Select.Option>
            <Select.Option value="a2">A2</Select.Option>
            <Select.Option value="a1">A1</Select.Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormLanguages;
