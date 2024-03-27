import { useState } from "react";
import { Button, Card, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";
import testImage from "/test-image.jpg";
import aucklandBlue from "/auckland-blue.png";
import aucklandDark from "/auckland-dark.png";
import aucklandGreen from "/auckland-green.png";
import edinburghDark from "/edinburgh-dark.png";
import edinburghBlue from "/edinburgh-blue.png";
import edinburghGreen from "/edinburgh-green.png";
import otagoBlue from "/otago-blue.png";
import otagoDark from "/otago-dark.png";
import otagoGreen from "/otago-green.png";
import TemplateModal from "../../components/templateModal/TemplateModal";
import style from "./Home.module.css";
const Home = () => {
  const [aucklandModal, setAucklandModal] = useState(false);
  const [edinburghModal, setEdinburghModal] = useState(false);
  const [otagoModal, setOtagoModal] = useState(false);
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
            {/* auckland */}
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
              title={"Auckland"}
            />
            {/* edinburgh */}
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
              title={"Edinburgh"}
            />
            {/* otago */}
            <TemplateModal
              primaryImage={otagoGreen}
              image={{
                blue: otagoBlue,
                dark: otagoDark,
                green: otagoGreen,
              }}
              setShow={setOtagoModal}
              show={otagoModal}
              navigationPath={"otago"}
              title={"Otago"}
            />
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image src={aucklandBlue} style={{ padding: 2 }} />}
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
              cover={<Image src={edinburghDark} style={{ padding: 2 }} />}
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
              cover={<Image src={otagoBlue} style={{ padding: 2 }} />}
            >
              <Row justify={"space-between"} align={"middle"}>
                <Meta title="Otago" />
                <Button type="primary" onClick={() => setOtagoModal(true)}>
                  Create
                </Button>
              </Row>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
