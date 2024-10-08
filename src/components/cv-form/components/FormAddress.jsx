import { Col, Form, Input, Row } from "antd";
import style from "../CVForm.module.css";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../context/CVContext";

const FormAddress = () => { 
  const { validateGeorgian } = useAppContext()
  const { t } = useTranslation()
  return (
    <>
      <Col>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={`${t("form.address")}`}
          name={"address"}
          rules={[{
            validator: validateGeorgian
          }]}
        >
          <Input allowClear size="large" />
        </Form.Item>
      </Col>
      <Row gutter={8}>
        <Col span={24} sm={12}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={`${t("form.zipCode")}`}
            name={"zip"}
          >
            <Input allowClear size="large" />
          </Form.Item>
        </Col>
        <Col span={24} sm={12}>
          <Form.Item
            className={style.formItem}
            labelCol={{ style: { padding: "0 0 2px" } }}
            label={`${t("form.cityTown")}`}
            name={"city"}
            rules={[{
              validator: validateGeorgian
            }]}
          >
            <Input allowClear size="large" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default FormAddress;
