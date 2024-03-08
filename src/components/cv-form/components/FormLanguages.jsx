/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import style from "../CVForm.module.css";

const FormLanguages = () => {
  const [languages, setLanguages] = useState(0);
  const [languageValues, setLanguageValues] = useState({
    language: "",
    language2: "",
    language3: "",
    language4: "",
  });
  return (
    <>
      <p style={{ margin: "10px 0 0", fontSize: "1.25rem" }}>Languages</p>
      <LanguageComponent
        name={"language"}
        levelName={"languageLevel"}
        setLanguageValues={setLanguageValues}
        languageValues={languageValues.language}
      />
      {languages > 0 && (
        <LanguageComponent
          name={"language2"}
          levelName={"languageLevel2"}
          setLanguageValues={setLanguageValues}
          languageValues={languageValues.language2}
        />
      )}
      {languages > 1 && (
        <LanguageComponent
          name={"language3"}
          levelName={"languageLevel3"}
          setLanguageValues={setLanguageValues}
          languageValues={languageValues.language3}
        />
      )}
      {languages > 2 && (
        <LanguageComponent
          name={"language4"}
          levelName={"languageLevel4"}
          setLanguageValues={setLanguageValues}
          languageValues={languageValues.language4}
        />
      )}
      <div className="flexBetween">
        <Button
          className="w100"
          onClick={() => setLanguages(languages + 1)}
          disabled={
            setLanguageValues.language === ""
              ? true
              : languages > 2
              ? true
              : false
          }
          type="primary"
        >
          Add language
        </Button>
        <Button
          className="w100"
          onClick={() => setLanguages(languages - 1)}
          disabled={languages < 1 ? true : false}
          type="primary"
          danger
        >
          Remove language
        </Button>
      </div>
    </>
  );
};

const LanguageComponent = ({
  name,
  levelName,
  setLanguageValues,
  languageValues,
}) => {
  return (
    <Row gutter={8}>
      <Col span={18}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Language"}
          name={name}
        >
          <Input
            placeholder="Language"
            onChange={(e) => {
              if (e.target.value === null) {
                setLanguageValues((prevValue) => ({
                  ...prevValue,
                  [name]: "",
                }));
              } else {
                setLanguageValues((prevValue) => ({
                  ...prevValue,
                  [name]: e.target.value,
                }));
              }
            }}
          />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Level"}
          name={levelName}
          rules={[
            {
              required: languageValues !== "" ? true : false,
              message: "Level is required",
            },
          ]}
        >
          <Select
            placeholder="Level"
            disabled={languageValues === "" ? true : false}
          >
            <Select.Option value="a1">A1</Select.Option>
            <Select.Option value="a2">A2</Select.Option>
            <Select.Option value="b1">B1</Select.Option>
            <Select.Option value="b2">B2</Select.Option>
            <Select.Option value="c1">C1</Select.Option>
            <Select.Option value="c2">C2</Select.Option>
            <Select.Option value="native">Native</Select.Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormLanguages;
