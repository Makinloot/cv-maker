import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
} from "@react-pdf/renderer";
import PDFStyles from "./PDFStyles";
import { useAppContext } from "../../context/CVContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const NormalCV = () => {
  const { data } = useAppContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // check if data is equal to null
  useEffect(() => {
    if (data === null) navigate("/");
    else setLoading(false);
  }, [data, navigate]);

  if (loading) return <div>loading...</div>;
  return (
    <PDFViewer style={PDFStyles.viewerContainer}>
      <Document>
        <Page style={{ flexDirection: "row", paddingTop: 10 }} wrap>
          {/* background */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              flexDirection: "row",
            }}
            fixed
          >
            <View style={{ flex: 0.5, backgroundColor: "#2e2e63" }} />
            <View style={{ flex: 1 }} />
          </View>
          {/* end of background */}
          {/* sider */}
          <View style={PDFStyles.sider}>
            <View style={PDFStyles.imageContainer}>
              <Image
                style={PDFStyles.image}
                source={{ uri: "https://picsum.photos/200/300" }}
              />
            </View>
            {/* contact section */}
            <View style={PDFStyles.siderDetailsContainer}>
              <View>
                <Text style={PDFStyles.title}>Contact</Text>
                <View style={PDFStyles.siderDetailsStroke} />
                <View style={PDFStyles.siderDetailsTextContainer}>
                  <Text style={PDFStyles.siderDetailsTitleSmall}>Phone</Text>
                  <Text style={PDFStyles.siderDetailsText}>{data.phone}</Text>
                </View>
                <View style={PDFStyles.siderDetailsTextContainer}>
                  <Text style={PDFStyles.siderDetailsTitleSmall}>Email</Text>
                  <Text style={PDFStyles.siderDetailsText}>{data.email}</Text>
                </View>
                {data.address && (
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={PDFStyles.siderDetailsTitleSmall}>
                      Address
                    </Text>
                    <Text style={PDFStyles.siderDetailsText}>
                      {data.address}
                    </Text>
                  </View>
                )}
                {data.socials?.map(
                  (social) =>
                    social.socialName && (
                      <View
                        style={[PDFStyles.siderDetailsTextContainer]}
                        key={uuidv4()}
                      >
                        <Text style={PDFStyles.siderDetailsTitleSmall}>
                          {social.socialName}
                        </Text>
                        <Link
                          src={social.socialLink}
                          style={{ color: "white" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(social.socialLink, "_blank");
                          }}
                        >
                          <Text
                            style={[
                              PDFStyles.siderDetailsText,
                              { textTransform: "capitalize" },
                            ]}
                          >
                            Visit {social.socialName} profile
                          </Text>
                        </Link>
                      </View>
                    )
                )}
              </View>
            </View>
            {/* end of contact section */}
            {/* information section */}
            {/* <View style={[PDFStyles.siderDetailsContainer, { marginTop: 10 }]}>
              <View>
                <Text style={PDFStyles.title}>Information</Text>
                <View style={PDFStyles.siderDetailsStroke} />
                <View style={PDFStyles.siderDetailsTextContainer}>
                  <Text style={PDFStyles.siderDetailsTitleSmall}>
                    Date of birth
                  </Text>
                  <Text style={PDFStyles.siderDetailsText}>
                    Tbilisi, Georgia
                  </Text>
                </View>
                <View style={PDFStyles.siderDetailsTextContainer}>
                  <Text style={PDFStyles.siderDetailsTitleSmall}>Gender</Text>
                  <Text style={PDFStyles.siderDetailsText}>Male</Text>
                </View>
              </View>
            </View> */}
            {/* end of information section */}
            {/* education section */}
            {data.education[0]?.educationStart && (
              <View
                style={[PDFStyles.siderDetailsContainer, { marginTop: 10 }]}
              >
                <Text style={PDFStyles.title}>Education</Text>
                <View style={PDFStyles.siderDetailsStroke} />
                {data.education?.map(
                  (item) =>
                    item.educationStart && (
                      <View
                        style={PDFStyles.siderDetailsTextContainer}
                        key={uuidv4()}
                      >
                        <Text style={PDFStyles.siderDetailsText}>
                          {item.educationStart}{" "}
                          {item.educationEnd && `- ${item.educationEnd}`}
                        </Text>
                        <Text style={PDFStyles.siderDetailsTitleSmall}>
                          {item.degree}
                        </Text>
                        <Text style={PDFStyles.siderDetailsText}>
                          {item.college}
                        </Text>
                      </View>
                    )
                )}
              </View>
            )}
            {/* end of education section */}
            {/* languages section */}
            <View style={[PDFStyles.siderDetailsContainer, { marginTop: 10 }]}>
              <Text style={PDFStyles.title}>Languages</Text>
              <View style={PDFStyles.siderDetailsStroke} />
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      Georgian
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      Russian
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      English
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* end of languages section */}
            {/* skills section */}
            <View style={[PDFStyles.siderDetailsContainer, { marginTop: 10 }]}>
              <Text style={PDFStyles.title}>Expertise</Text>
              <View style={PDFStyles.siderDetailsStroke} />
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      HTML
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      Javascript
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      React
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      Firebase
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      Illustrator
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      CSS
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      Typescript
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      Node JS
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      Git/Github
                    </Text>
                  </View>
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                      {/* {language.name} */}
                      {/* ქართული */}
                      Photoshop
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* end of skills section */}
          </View>
          {/* end of sider */}
          {/* main */}
          <View style={PDFStyles.main}>
            {/* welcome section */}
            <View style={PDFStyles.welcomeContainer}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <Text style={PDFStyles.welcomeTitlePrimary}>
                  {data.firstName}
                </Text>
                <Text style={PDFStyles.welcomeTitleSecondary}>
                  {data.lastName}
                </Text>
              </View>
              <Text style={PDFStyles.welcomeSubTitle}>React Developer</Text>
              {/* character limit should be 840 */}
              <Text style={PDFStyles.welcomeText}>
                I am a skilled and passionate Frontend Developer with a proven
                track record of creating stunning and user-friendly web
                applications. I am dedicated to crafting exceptional user
                experiences and building responsive, interactive websites. My
                journey in the world of web development has equipped me with a
                deep understanding of HTML, CSS and JavaScript, allowing me to
                breathe life into web designs. I am adept at translating mockups
                and wireframes into pixel-perfect, cross-browser compatible and
                mobile-responsive websites.
              </Text>
            </View>
            {/* end of welcome section */}
            {/* experience section */}
            <View style={PDFStyles.experienceContainer}>
              <View>
                <View style={{ padding: "0px 20px" }}>
                  <Text style={PDFStyles.title}>Experience</Text>
                  <View style={PDFStyles.experienceItemContainer}>
                    <Text style={PDFStyles.siderDetailsText}>
                      10.2023 - 02.2024
                    </Text>
                    <Text style={PDFStyles.siderDetailsTitleSmall}>
                      Junior Frontend Developer
                    </Text>
                    <Text style={PDFStyles.welcomeText}>
                      Georgian Medical Software (MEDSOFT)
                    </Text>
                    <Text style={PDFStyles.welcomeText}>
                      My last journey was working on medical softwares at
                      MEDSOFT. Building website from existing application built
                      on Windows Forms. Technologies I used were React and UI
                      library AntDesign. Here I had constant communication with
                      backened API-s and developers to create user friendly and
                      bug-free website.
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ padding: "0px 20px" }}>
                  <View style={PDFStyles.experienceItemContainer}>
                    <Text style={PDFStyles.siderDetailsText}>
                      07.2022 - 01.2023
                    </Text>
                    <Text style={PDFStyles.siderDetailsTitleSmall}>
                      Junior Frontend Developer
                    </Text>
                    <Text style={PDFStyles.welcomeText}>
                      Illia State University (Unilab)
                    </Text>
                    <Text style={PDFStyles.welcomeText}>
                      Here I had to Work on unfinished real world projects, Fix
                      bugs and solve existing problems. I also had opportunity
                      to create projects from scratch for children language
                      scientists. In the final project I was asked to create
                      website for Illia State University called "Language
                      Corpus", where i had to communicate with great team of
                      developers on daily basis to achieve maximum results.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* end of experience section */}
          </View>
          {/* end of main */}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default NormalCV;
