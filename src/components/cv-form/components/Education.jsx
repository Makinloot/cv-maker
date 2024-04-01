/* eslint-disable react/prop-types */
import { Button, Col, Row } from "antd";
import FormEducation from "./FormEducation";
import FormLanguages from "./FormLanguages";
import { useTranslation } from "react-i18next";

const Education = ({ setIndex, hide }) => {
  const { t } = useTranslation()
  return (
    <Col hidden={hide}>
      <FormLanguages />
      <FormEducation />
      <Row justify={"space-between"}>
        <Button
          type="primary"
          style={{ margin: "20px 0 0", width: 100 }}
          onClick={() => setIndex(1)}
        >
          {t("form.experiencePrevious")}
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          style={{ margin: "20px 0 0", width: 100 }}
        >
          {t("form.submit")}
        </Button>
      </Row>
    </Col>
  );
};

export default Education;
