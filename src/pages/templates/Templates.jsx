import { useState } from "react";
import { Button, Card, Col, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";
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
import style from './Templates.module.css'
import { useTranslation } from "react-i18next";

const Templates = () => {
    const [aucklandModal, setAucklandModal] = useState(false);
    const [edinburghModal, setEdinburghModal] = useState(false);
    const [otagoModal, setOtagoModal] = useState(false);
    const { t } = useTranslation()
    return (
        <div style={{}}>
            <h1 className={style.title}>CV Maker</h1>
            <p className={style.welcomeText}>
                {t("templates.text")}
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
                    title={"Auckland"}
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
                    title={"Edinburgh"}
                />
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
                            <Button
                                type="primary"
                                onClick={() => setEdinburghModal(true)}
                            >
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
    )
}

export default Templates