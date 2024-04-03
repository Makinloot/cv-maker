import { Button } from "antd";
import Lottie from "lottie-react";
import getStartedAnimation from "../../assets/animations/start.json";
import style from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/CVContext";

const Home = () => {
  const { language, languageClass } = useAppContext();
  const { t } = useTranslation();

  return (
    <div className="Home">
      <div className="container">
        <div className={style.homeWrapper}>
          <h1 className={`${style.title} ${languageClass(language)}`}>
            {t("home.welcome")}
          </h1>
          <h3
            className={`${style.subTitle} ${languageClass(language)}`}
            style={language === "ge" ? { maxWidth: 500 } : {}}
          >
            {t("home.subWelcome")}
          </h3>
          <div className={style.welcomeAnimationContainer}>
            <Lottie
              className={style.welcomeAnimation}
              animationData={getStartedAnimation}
            />
            <div className="flexCenter">
              <a href={"/templates"}>
                <Button className={`${style.getStartedBtn}`} type="primary">
                  {t("home.startBtn")}
                </Button>
              </a>
            </div>
          </div>
          <div>
            <h3
              className={`${style.title} ${languageClass(language)}`}
              style={{ margin: "80px 0 40px" }}
            >
              {t("home.instructionTitle")}
            </h3>
            <ul className="flexCenter" style={{ flexDirection: "column" }}>
              <li
                style={{
                  fontSize: "1.2rem",
                  margin: "5px 0",
                  width: language === "en" ? 250 : 305,
                }}
              >
                <span className={`instructionSpan ${languageClass(language)}`}>
                  {t("home.instructionFirst")}
                </span>
              </li>
              <li
                style={{
                  fontSize: "1.2rem",
                  margin: "5px 0",
                  width: language === "en" ? 250 : 305,
                }}
              >
                <span className={`instructionSpan ${languageClass(language)}`}>
                  {t("home.instructionSecond")}
                </span>
              </li>
              <li
                style={{
                  fontSize: "1.2rem",
                  margin: "5px 0",
                  width: language === "en" ? 250 : 305,
                }}
              >
                <span className={`instructionSpan ${languageClass(language)}`}>
                  {t("home.instructionThird")}
                </span>
              </li>
              <li
                style={{
                  fontSize: "1.2rem",
                  margin: "5px 0",
                  width: language === "en" ? 250 : 305,
                }}
              >
                <span className={`instructionSpan ${languageClass(language)}`}>
                  {t("home.instructionFourth")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
