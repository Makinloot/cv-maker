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
import { useEffect, useState } from "react";
import FormSocials from "./FormSocials";
import { useAppContext } from "../../../context/CVContext";
import FormImage from "./FormImage";
import { useTranslation } from "react-i18next";
const Personal = ({ setIndex, hide }) => {
  const { setAdditionalInformation, formRedirect } = useAppContext();
  const [additionalOpen, setAdditionalOpen] = useState(false);
  const [nameValues, setNameValues] = useState({
    firstName: JSON.parse(sessionStorage.getItem("cvData"))?.firstName || "",
    lastName: JSON.parse(sessionStorage.getItem("cvData"))?.lastName || "",
  });
  const { t } = useTranslation();

  useEffect(() => {
    const sessionStorageValues = JSON.parse(sessionStorage.getItem("cvData"));
    if (
      sessionStorageValues?.dateOfBirth ||
      sessionStorageValues?.placeOfBirth ||
      sessionStorageValues?.nationality ||
      sessionStorageValues?.gender ||
      sessionStorageValues?.socials[0].socialName ||
      sessionStorageValues?.socials[1].socialName ||
      sessionStorageValues?.socials[2].socialName
    ) {
      setAdditionalOpen(true);
      setAdditionalInformation(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col hidden={hide}>
      {/* name */}
      <Row gutter={8}>
        {formRedirect === "auckland" ? null : formRedirect ===
          "otago" ? null : (
          <Col span={5} style={{ position: "relative" }}>
            <FormImage />
          </Col>
        )}
        <Col
          span={
            formRedirect === "auckland"
              ? 24
              : formRedirect === "otago"
              ? 24
              : 19
          }
        >
          <Col span={24}>
            <Form.Item
              className={style.formItem}
              labelCol={{ style: { padding: "0 0 2px" } }}
              label={`${t("form.firstName")}`}
              name={"firstName"}
              rules={[
                {
                  required: true,
                  message: t("form.firstNameErrorRequired"),
                },
                {
                  min: 2,
                  message: t("form.firstNameErrorMinimum"),
                },
                {
                  max: 20,
                  message: t("form.firstNameErrorMaximum"),
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
              label={`${t("form.lastName")}`}
              name={"lastName"}
              rules={[
                {
                  required: true,
                  message: t("form.lastNameErrorRequired"),
                },
                {
                  min: 2,
                  message: t("form.lastNameErrorMinimum"),
                },
                {
                  max: 20,
                  message: t("form.lastNameErrorMaximum"),
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
          label={`${t("form.aboutMe")}`}
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
          label={`${t("form.emailAddress")}`}
          name={"email"}
          rules={[
            {
              type: "email",
              message: t("form.emailAddressError"),
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
        bordered={true}
        expandIcon={({ isActive }) =>
          isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />
        }
        className={style.collapse}
      >
        <Collapse.Panel
          header={`${t("form.additionalInformation")}`}
          key="additional"
        >
          <Col style={{ margin: "20px 0 10px" }} hidden={!additionalOpen}>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={`${t("form.dateOfBirth")}`}
                  name={"dateOfBirth"}
                >
                  <DatePicker
                    size="large"
                    style={{ width: "100%" }}
                    placeholder=""
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={`${t("form.placeOfBirth")}`}
                  name={"placeOfBirth"}
                >
                  <Input size="large" allowClear />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={`${t("form.nationality")}`}
                  name={"nationality"}
                >
                  <Input size="large" style={{ width: "100%" }} allowClear />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className={style.formItem}
                  labelCol={{ style: { padding: "0 0 2px" } }}
                  label={`${t("form.gender")}`}
                  name={"gender"}
                >
                  <Select size="large" allowClear>
                    <Select.Option value="Male">{`${t(
                      "form.genderMale"
                    )}`}</Select.Option>
                    <Select.Option value="Female">{`${t(
                      "form.genderFemale"
                    )}`}</Select.Option>
                    <Select.Option value="Other">{`${t(
                      "form.genderOther"
                    )}`}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <FormSocials additionalOpen={additionalOpen} />
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
              {t("form.experienceNext")}
            </Button>
          </span>
        </Tooltip>
      </Row>
    </Col>
  );
};

export default Personal;
