/* eslint-disable react/prop-types */
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Tooltip,
} from "antd";
import FormPhone from "./FormPhone";
import FormAddress from "./FormAddress";
import style from "../CVForm.module.css";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import FormSocials from "./FormSocials";
import { useAppContext } from "../../../context/CVContext";
import FormImage from "./FormImage";
const Personal = ({ setIndex, hide }) => {
  const { setAdditionalInformation } = useAppContext();
  const [additionalOpen, setAdditionalOpen] = useState(false);
  const [nameValues, setNameValues] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <Col hidden={hide}>
      {/* name */}
      <Row gutter={8}>
        <Col span={5} style={{ position: "relative" }}>
          <FormImage />
        </Col>
        <Col span={19}>
          <Col span={24}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={"First name"}
              name={"firstName"}
              rules={[
                {
                  required: true,
                  message: "Required field",
                },
                {
                  min: 2,
                  message: "Minimum 2 characters",
                },
                {
                  max: 20,
                  message: "maximum 24 characters",
                },
              ]}
            >
              <Input
                allowClear
                size="large"
                onChange={(e) =>
                  setNameValues((prevValues) => ({
                    ...prevValues,
                    firstName: e.target.value,
                  }))
                }
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={"Last name"}
              name={"lastName"}
              rules={[
                {
                  required: true,
                  message: "Required field",
                },
                {
                  min: 2,
                  message: "Minimum 2 characters",
                },
                {
                  max: 20,
                  message: "maximum 24 characters",
                },
              ]}
            >
              <Input
                allowClear
                size="large"
                onChange={(e) =>
                  setNameValues((prevValues) => ({
                    ...prevValues,
                    lastName: e.target.value,
                  }))
                }
              />
            </Form.Item>
          </Col>
        </Col>
      </Row>
      {/* about me */}
      <Col span={24}>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"About me"}
          name={"aboutMe"}
        >
          <Input.TextArea allowClear size="large" />
        </Form.Item>
      </Col>
      {/* phone number */}
      <FormPhone />
      {/* email address */}
      <Col>
        <Form.Item
          className={style.formItem}
          labelCol={{ style: { padding: "0 0 2px" } }}
          label={"Email address"}
          name={"email"}
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input type="email" allowClear size="large" />
        </Form.Item>
      </Col>
      {/* address */}
      <FormAddress />
      <Collapse
        activeKey={additionalOpen ? "additional" : ""}
        onChange={() => {
          if (additionalOpen) {
            setAdditionalOpen(false);
            setAdditionalInformation(false);
          } else {
            setAdditionalOpen(true);
            setAdditionalInformation(true);
          }
        }}
        bordered={false}
        expandIcon={({ isActive }) =>
          isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />
        }
        className={style.collapse}
      >
        <Collapse.Panel header="Additional Information" key="additional">
          <Col style={{ margin: "20px 0 10px" }} hidden={!additionalOpen}>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={"Date of birth"}
                  name={"dateOfBirth"}
                >
                  <DatePicker size="large" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={"Place of birth"}
                  name={"placeOfBirth"}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={"Nationality"}
                  name={"nationality"}
                >
                  <Input size="large" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={"Gender"}
                  name={"gender"}
                >
                  <Select size="large">
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                    <Select.Option value="Other">Other</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <FormSocials />
          </Col>
        </Collapse.Panel>
      </Collapse>
      <Row justify={"end"}>
        <Tooltip
          title={
            nameValues.firstName !== "" &&
            nameValues.firstName.length >= 2 &&
            nameValues.lastName !== "" &&
            nameValues.lastName.length >= 2
              ? ""
              : "Please fill out first name and last name with at least 2 characters each."
          }
        >
          <span>
            <Button
              type="primary"
              disabled={
                nameValues.firstName !== "" &&
                nameValues.firstName.length >= 2 &&
                nameValues.lastName !== "" &&
                nameValues.lastName.length >= 2
                  ? false
                  : true
              }
              style={{ margin: "20px 0 0", width: 100 }}
              onClick={() => setIndex(1)}
            >
              Next
            </Button>
          </span>
        </Tooltip>
      </Row>
    </Col>
  );
};

export default Personal;
