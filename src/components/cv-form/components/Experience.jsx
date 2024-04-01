/* eslint-disable react/prop-types */
import { Button, Col, Row, Tooltip } from "antd";
import FormExperience from "./FormExperience";
import FormSkills from "./FormSkills";
import { useTranslation } from "react-i18next";

const Experience = ({ setIndex, hide }) => {
  const { t } = useTranslation()
  return (
    <Col hidden={hide}>
      <FormSkills />
      <FormExperience />
      <Row justify={"space-between"}>
        <Button
          type="primary"
          style={{ margin: "20px 0 0", width: 100 }}
          onClick={() => setIndex(0)}
        >
          {t("form.experiencePrevious")}
        </Button>
        <Tooltip>
          <Button
            type="primary"
            style={{ margin: "20px 0 0", width: 100 }}
            onClick={() => setIndex(2)}
          >
            {t("form.experienceNext")}
          </Button>
        </Tooltip>
      </Row>
    </Col>
  );
};

export default Experience;
