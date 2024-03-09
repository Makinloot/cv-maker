import { Col, Form, Input, Row, Select } from "antd";
import style from "../CVForm.module.css";
import prefixJson from "../../../assets/phonePrefix.json";
import { v4 as uuidv4 } from "uuid";

const FormPhone = () => {
  return (
    <Row gutter={8}>
      <Col span={7}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Prefix"}
          name={"prefix"}
          rules={[
            {
              required: true,
              message: "Required field",
            },
          ]}
        >
          <Select showSearch placeholder="Select prefix" allowClear>
            {prefixJson.map((item) => (
              <Select.Option key={uuidv4()} value={item.dial_code}>
                <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img src={`https://flagsapi.com/${item.code}/flat/16.png`} />
                  <span>{item.dial_code}</span>
                </div>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={17}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Phone number"}
          name={"phone"}
          rules={[
            {
              required: true,
              message: "Required field",
            },
            {
              pattern: /^[0-9]*$/,
              message: "Please enter a valid phone number (numbers only).",
            },
          ]}
        >
          <Input
            type="number"
            placeholder="Phone"
            className={style.numberInput}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormPhone;
