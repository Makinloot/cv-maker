import { Button, Card, Col, Row } from "antd";
import style from "./Home.module.css";
import Meta from "antd/es/card/Meta";
import testImage from "/test-image.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
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
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Button className={style.homeButton} size="large" type="primary">
              Create your CV
            </Button>
          </div>
          <div className={style.templateWrapper}>
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
