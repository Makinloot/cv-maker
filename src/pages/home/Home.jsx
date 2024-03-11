import { Card, Col, Row } from "antd";
import style from "./Home.module.css";
import Meta from "antd/es/card/Meta";
import testImage from "/test-image.jpg";
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="Home-wrapper">
          <h1 className={style.title}>CV Maker</h1>
          <p className={style.welcomeText}>
            Increase your chances of finding a job and create your CV with one
            of our professionally designed CV templates.
          </p>
          <div className={style.templateWrapper}>
            <div>
              <h3 className={style.cardTitle}>title</h3>
              <img className={style.cardImage} alt="Card" src={testImage} />
            </div>
            <div>
              <h3 className={style.cardTitle}>title</h3>
              <img className={style.cardImage} alt="Card" src={testImage} />
            </div>
            <div>
              <h3 className={style.cardTitle}>title</h3>
              <img className={style.cardImage} alt="Card" src={testImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
