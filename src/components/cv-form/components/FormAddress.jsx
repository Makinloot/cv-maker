import { Col, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";

const FormAddress = () => {
  return (
    <>
      <Col>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Address"}
          name={"address"}
        >
          <Input allowClear size="large" />
        </Form.Item>
      </Col>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={"Zip code"}
            name={"zip"}
          >
            <Input allowClear size="large" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={"City/Town"}
            name={"city"}
          >
            <Input allowClear size="large" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default FormAddress;
