import { Button } from "antd";
import Lottie from "lottie-react";
import getStartedAnimation from '../../assets/animations/start.json'
import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="Home">
      <div className="container">
        <div className={style.homeWrapper}>
          <h1 className={style.title}>Create Your Professional CV in Minutes</h1>
          <h3 className={style.subTitle}>Craft a Winning Resume Effortlessly with Our Easy-to-Use CV Builder</h3>
          <div className={style.welcomeAnimationContainer}>
            <Lottie className={style.welcomeAnimation} animationData={getStartedAnimation} />
            <div className="flexCenter">
              <Link to={'/templates'}>
                <Button className={style.getStartedBtn} type="primary">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <h3 className={style.title} style={{ margin: '80px 0 40px' }}>How to use</h3>
            <ul className="flexCenter" style={{ flexDirection: 'column' }}>
              <li style={{ fontSize: '1.2rem', margin: '5px 0', width: 235 }}>
                <span>Choose a Template & Color</span>
              </li>
              <li style={{ fontSize: '1.2rem', margin: '5px 0', width: 235 }}>
                <span>Add Your Information</span>
              </li>
              <li style={{ fontSize: '1.2rem', margin: '5px 0', width: 235 }}>
                <span>Download and Use</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
