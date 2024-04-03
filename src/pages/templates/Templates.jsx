import { useState } from "react";
import { Button, Card, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";
import aucklandBlue from "/cv-templates/auckland-blue.png";
import aucklandDark from "/cv-templates/auckland-dark.png";
import aucklandGreen from "/cv-templates/auckland-green.png";
import aucklandGeorgianBlue from "/cv-templates/auckland-georgian-blue.png";
import aucklandGeorgianDark from "/cv-templates/auckland-georgian-dark.png";
import aucklandGeorgianGreen from "/cv-templates/auckland-georgian-green.png";
import edinburghDark from "/cv-templates/edinburgh-dark.png";
import edinburghBlue from "/cv-templates/edinburgh-blue.png";
import edinburghGreen from "/cv-templates/edinburgh-green.png";
import edinburghGeorgianDark from "/cv-templates/edinburgh-georgian-dark.png";
import edinburghGeorgianBlue from "/cv-templates/edinburgh-georgian-blue.png";
import edinburghGeorgianGreen from "/cv-templates/edinburgh-georgian-green.png";
import otagoBlue from "/cv-templates/otago-blue.png";
import otagoDark from "/cv-templates/otago-dark.png";
import otagoGreen from "/cv-templates/otago-green.png";
import otagoGeorgianBlue from "/cv-templates/otago-georgian-blue.png";
import otagoGeorgianDark from "/cv-templates/otago-georgian-dark.png";
import otagoGeorgianGreen from "/cv-templates/otago-georgian-green.png";
import TemplateModal from "../../components/templateModal/TemplateModal";
import style from "./Templates.module.css";
import { useTranslation } from "react-i18next";

const Templates = () => {
  const [aucklandModal, setAucklandModal] = useState(false);
  const [edinburghModal, setEdinburghModal] = useState(false);
  const [otagoModal, setOtagoModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div style={{}}>
      <h1 className={style.title}>CV Maker</h1>
      <p className={style.welcomeText}>{t("templates.text")}</p>
      <div className={style.templateWrapper}>
        <TemplateModal
          primaryImage={aucklandBlue}
          primaryImageGeorgian={aucklandGeorgianBlue}
          image={{
            blue: aucklandBlue,
            dark: aucklandDark,
            green: aucklandGreen,
            blueGeorgian: aucklandGeorgianBlue,
            darkGeorgian: aucklandGeorgianDark,
            greenGeorgian: aucklandGeorgianGreen,
          }}
          setShow={setAucklandModal}
          show={aucklandModal}
          navigationPath={"auckland"}
          title={"Auckland"}
        />
        <TemplateModal
          primaryImage={edinburghDark}
          primaryImageGeorgian={edinburghGeorgianDark}
          image={{
            blue: edinburghBlue,
            dark: edinburghDark,
            green: edinburghGreen,
            blueGeorgian: edinburghGeorgianBlue,
            darkGeorgian: edinburghGeorgianDark,
            greenGeorgian: edinburghGeorgianGreen,
          }}
          setShow={setEdinburghModal}
          show={edinburghModal}
          navigationPath={"edinburgh"}
          title={"Edinburgh"}
        />
        <TemplateModal
          primaryImage={otagoGreen}
          primaryImageGeorgian={otagoGeorgianGreen}
          image={{
            blue: otagoBlue,
            dark: otagoDark,
            green: otagoGreen,
            blueGeorgian: otagoGeorgianBlue,
            darkGeorgian: otagoGeorgianDark,
            greenGeorgian: otagoGeorgianGreen,
          }}
          setShow={setOtagoModal}
          show={otagoModal}
          navigationPath={"otago"}
          title={"Otago"}
        />
        <div
          style={{
            display: "flex",
            gap: 50,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<Image src={aucklandBlue} style={{ padding: 2 }} />}
          >
            <Row justify={"space-between"} align={"middle"}>
              <Meta title="Auckland" />
              <Button type="primary" onClick={() => setAucklandModal(true)}>
                {t("templates.createBtn")}
              </Button>
            </Row>
          </Card>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<Image src={edinburghDark} style={{ padding: 2 }} />}
          >
            <Row justify={"space-between"} align={"middle"}>
              <Meta title="Edinburgh" />
              <Button type="primary" onClick={() => setEdinburghModal(true)}>
                {t("templates.createBtn")}
              </Button>
            </Row>
          </Card>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<Image src={otagoGreen} style={{ padding: 2 }} />}
          >
            <Row justify={"space-between"} align={"middle"}>
              <Meta title="Otago" />
              <Button type="primary" onClick={() => setOtagoModal(true)}>
                {t("templates.createBtn")}
              </Button>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Templates;
