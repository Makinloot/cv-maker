import { Col, Form, Input, Row, Select } from "antd";
import style from "../CVForm.module.css";
import prefixJson from "../../../assets/phonePrefix.json";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

const FormPhone = () => {
  const { t } = useTranslation();

  return (
    <Row gutter={8}>
      <Col span={24} sm={7}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={`${t("form.prefix")}`}
          name={"prefix"}
        >
          <Select showSearch allowClear size="large">
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
      <Col span={24} sm={17}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={`${t("form.phoneNumber")}`}
          name={"phone"}
          rules={[
            {
              pattern: /^[0-9]*$/,
              message: "Please enter a valid phone number (numbers only).",
            },
          ]}
        >
          <Input type="number" className={style.numberInput} size="large" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormPhone;
