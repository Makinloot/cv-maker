/* eslint-disable react/prop-types */
import { Button, Col, Row, Tooltip } from "antd";
import FormExperience from "./FormExperience";
import FormSkills from "./FormSkills";

const Experience = ({ setIndex, hide }) => {
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
          Previous
        </Button>
        <Tooltip>
          <Button
            type="primary"
            style={{ margin: "20px 0 0", width: 100 }}
            onClick={() => setIndex(2)}
          >
            Next
          </Button>
        </Tooltip>
      </Row>
    </Col>
  );
};

export default Experience;
