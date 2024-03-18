/* eslint-disable react/prop-types */
import { Button, Col, Row } from "antd";
import FormEducation from "./FormEducation";
import FormLanguages from "./FormLanguages";

const Education = ({ setIndex, hide }) => {
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
          Previous
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          style={{ margin: "20px 0 0", width: 100 }}
        >
          Submit
        </Button>
      </Row>
    </Col>
  );
};

export default Education;
