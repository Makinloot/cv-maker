import { Button, Card, Row } from "antd";
import style from "./Home.module.css";
import Meta from "antd/es/card/Meta";
import testImage from "/test-image.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";
import auckland from "/auckland.png";
import edinburgh from "/edinburgh.png";
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className={style.homeWrapper}>
          <h1 className={style.title}>CV Maker</h1>
          <p className={style.welcomeText}>
            Increase your chances of finding a job and create your CV with one
            of our professionally designed CV templates.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to={"/form"}>
              <Button className={style.homeButton} size="large" type="primary">
                Create your CV
              </Button>
            </Link>
          </div>
          <div className={style.templateWrapper}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <Zoom>
                  <img className={style.cardImage} alt="Card" src={auckland} />
                </Zoom>
              }
            >
              <Row justify={"space-between"} align={"middle"}>
                <Meta title="Auckland" />
                <Button type="primary">Create</Button>
              </Row>
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <Zoom>
                  <img className={style.cardImage} alt="Card" src={edinburgh} />
                </Zoom>
              }
            >
              <Row justify={"space-between"} align={"middle"}>
                <Meta title="Edinburgh" />
                <Button type="primary">Create</Button>
              </Row>
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <Zoom>
                  <img className={style.cardImage} alt="Card" src={testImage} />
                </Zoom>
              }
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
