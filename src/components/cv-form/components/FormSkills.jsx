import { Col, Form, Row, Select } from "antd";
import style from "../CVForm.module.css";
import { useState } from "react";

const { Option } = Select;

const FormSkills = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  // Handler for changing selected values
  const handleSelectChange = (selected) => {
    setSelectedValues(selected);
  };
  const renderOptions = () => {
    if (selectedValues.length === 0) {
      return (
        <Option key="noData" disabled>
          Write your skills
        </Option>
      );
    }

    return selectedValues.map((value) => (
      <Option key={value} value={value}>
        {value}
      </Option>
    ));
  };
  return (
    <>
      <p style={{ margin: "10px 0 0", fontSize: "1.25rem" }}>Expertise</p>
      <Row>
        <Col span={24}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={"Skills"}
            name={"skills"}
          >
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Type and select values"
              value={selectedValues}
              onChange={handleSelectChange}
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
