import { Button, Card, Image, Row } from "antd";
import style from "./Home.module.css";
import Meta from "antd/es/card/Meta";
import testImage from "/test-image.jpg";
import aucklandBlue from "/auckland-blue.png";
import aucklandDark from "/auckland-dark.png";
import aucklandGreen from "/auckland-green.png";
import edinburghDark from "/edinburgh-dark.png";
import edinburghBlue from "/edinburgh-blue.png";
import edinburghGreen from "/edinburgh-green.png";
import { useState } from "react";
import TemplateModal from "../../components/templateModal/TemplateModal";
const Home = () => {
  const [aucklandModal, setAucklandModal] = useState(false);
  const [edinburghModal, setEdinburghModal] = useState(false);
  return (
    <div className="Home">
      <div className="container">
        <div className={style.homeWrapper}>
          <h1 className={style.title}>CV Maker</h1>
          <p className={style.welcomeText}>
            Increase your chances of finding a job and create your CV with one
            of our professionally designed CV templates.
          </p>
          <div className={style.templateWrapper}>
            <TemplateModal
              primaryImage={aucklandBlue}
              image={{
                blue: aucklandBlue,
                dark: aucklandDark,
                green: aucklandGreen,
              }}
              setShow={setAucklandModal}
              show={aucklandModal}
              navigationPath={"auckland"}
            />
            <TemplateModal
              primaryImage={edinburghDark}
              image={{
                blue: edinburghBlue,
                dark: edinburghDark,
                green: edinburghGreen,
              }}
              setShow={setEdinburghModal}
              show={edinburghModal}
              navigationPath={"edinburgh"}
            />
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image src={aucklandBlue} />}
            >
              <Row justify={"space-between"} align={"middle"}>
                <Meta title="Auckland" />
                <Button type="primary" onClick={() => setAucklandModal(true)}>
                  Create
                </Button>
              </Row>
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image src={edinburghDark} />}
            >
              <Row justify={"space-between"} align={"middle"}>
                <Meta title="Edinburgh" />
                <Button type="primary" onClick={() => setEdinburghModal(true)}>
                  Create
                </Button>
              </Row>
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image src={testImage} />}
            >
              <Meta title="Minimalistic" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
