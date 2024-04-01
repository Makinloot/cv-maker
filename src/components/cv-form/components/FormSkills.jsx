import { Col, Form, Row, Select } from "antd";
import style from "../CVForm.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const FormSkills = () => {
  const { t } = useTranslation()
  const [selectedValues, setSelectedValues] = useState([]);
  // Handler for changing selected values
  const handleSelectChange = (selected) => {
    setSelectedValues(selected);
  };
  const renderOptions = () => {
    return selectedValues.map((value) => (
      <Option key={value} value={value}>
        {value}
      </Option>
    ));
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={t("form.skills")}
            name={"skills"}
          >
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder={`${t("form.skillsPlaceholder")}`}
              value={selectedValues}
              onChange={handleSelectChange}
              allowClear
              size="large"
            >
              {renderOptions()}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default FormSkills;
