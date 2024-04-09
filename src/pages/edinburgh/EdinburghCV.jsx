import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  PDFDownloadLink
} from "@react-pdf/renderer";
import PDFStyles from "../../components/cv-templates/PDFStyles";
import { useAppContext } from "../../context/CVContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactPDF from "../../components/cv-templates/components/ContactPDF";
import EducationPDF from "../../components/cv-templates/components/EducationPDF";
import LanguagesPDF from "../../components/cv-templates/components/LanguagesPDF";
import ExperiencePDF from "../../components/cv-templates/components/ExperiencePDF";
import { v4 as uuidv4 } from "uuid";
import { Button, Result } from 'antd'
import { useTranslation } from "react-i18next";
import FinishedResumeButtons from '../../components/finishedResumeButtons/FinishedResumeButtons'


const EdinburghCV = () => {
  const { data, templateColor, resumeLanguage, resumeFontFamily } =
    useAppContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const { t } = useTranslation()

  // check if data is equal to null
  useEffect(() => {
    if (data === null) navigate("/");
    else setLoading(false);
  }, [data, navigate]);

  // check document width
  useEffect(() => {
    const handleResize = () => {
      setDocumentWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  if (loading) return <div>loading...</div>;
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px 0' }}>
        <Result
          status="success"
          title={t('result.title')}
          subTitle={t('result.subTitle')}
        />
        <FinishedResumeButtons />
        <Button style={{ width: 200, height: 85, fontSize: '1.25rem', fontWeight: 600 }} type="primary">
          <PDFDownloadLink document={
            <Document title={`${data.firstName} ${data.lastName}`}>
              <Page style={{ flexDirection: "row" }} wrap>
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
                  <View
                    style={{
                      flex: 0.433,
                      backgroundColor: templateColor || "#434A54",
                    }}
                  />
                  <View style={{ flex: 1 }} />
                </View>
                {/* sider */}
                <View
                  style={[
                    PDFStyles.sider,
                    { padding: 0, overflow: "hidden", flex: 0.433, color: "white" },
                  ]}
                >
                  {/* first name & image */}
                  <View
                    style={{
                      position: "relative",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 20,
                    }}
                  >
                    {/* name & img background */}
                    {/* name */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 20px",
                        flexWrap: "wrap",
                        columnGap: 5,
                      }}
                    >
                      <Text style={[PDFStyles.title, resumeFontFamily("bold-bold")]}>
                        {data.firstName}
                      </Text>
                      <Text style={[PDFStyles.title, resumeFontFamily("bold-bold")]}>
                        {data.lastName}
                      </Text>
                    </View>
                    {/* image */}
                    {data.image && (
                      <View
                        style={{
                          width: 140,
                          height: 140,
                          borderRadius: 10000,
                          backgroundColor: "black",
                          marginTop: 20,
                          overflow: "hidden",
                        }}
                      >
                        <Image src={{ uri: data.image }} />
                      </View>
                    )}
                  </View>
                  {/* personal details */}
                  <View style={{ padding: "20 15.5px 0 17.5px" }}>
                    <Text
                      style={[
                        PDFStyles.title,
                        resumeFontFamily("regular-bold"),
                        { marginBottom: 10 },
                      ]}
                    >
                      {resumeLanguage === "ge" ? "პირადი" : "personal"}
                    </Text>
                    {/* contact section */}
                    <ContactPDF
                      data={data}
                      resumeFontFamily={resumeFontFamily}
                      resumeLanguage={resumeLanguage}
                    />
                    {/* languages section */}
                    {data.languages[0]?.language && (
                      <>
                        <Text
                          style={[
                            PDFStyles.title,
                            resumeFontFamily("regular-bold"),
                            { marginTop: 10 },
                          ]}
                        >
                          {resumeLanguage === "ge" ? "ენები" : "languages"}
                        </Text>
                        <LanguagesPDF
                          data={data}
                          resumeFontFamily={resumeFontFamily}
                          resumeLanguage={resumeLanguage}
                        />
                      </>
                    )}
                  </View>
                </View>
                <View style={PDFStyles.main}>
                  <View style={[PDFStyles.welcomeContainer, { paddingTop: 22 }]}>
                    <Text
                      style={[
                        PDFStyles.welcomeText,
                        resumeFontFamily("regular-regular"),
                      ]}
                    >
                      {data.aboutMe}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 2,
                      width: "93%",
                      backgroundColor: "#80808080",
                      margin: "10px auto",
                    }}
                  />
                  {/* experience section */}
                  {data.experience?.length > 0 && data.experience[0]?.startDate && (
                    <ExperiencePDF
                      data={data}
                      resumeFontFamily={resumeFontFamily}
                      resumeLanguage={resumeLanguage}
                    />
                  )}
                  {/* education section */}
                  {data.education[0]?.educationStart && (
                    <EducationPDF
                      resumeFontFamily={resumeFontFamily}
                      resumeLanguage={resumeLanguage}
                      data={data}
                    />
                  )}
                  {/* skills section */}
                  {data.skills?.length > 0 && data.skills[0] && (
                    <View style={PDFStyles.experienceContainer}>
                      <Text
                        style={[
                          PDFStyles.title,
                          resumeFontFamily("regular-bold"),
                          { marginTop: 10 },
                        ]}
                      >
                        {resumeLanguage === "ge" ? "უნარები" : "skills"}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          flexWrap: "wrap",
                          alignItems: "center",
                        }}
                      >
                        {data.skills.map((item) => (
                          <View style={{ flexBasis: "50%" }} key={uuidv4()}>
                            <Text
                              style={[
                                PDFStyles.siderDetailsTitleSmall,
                                {
                                  marginTop: 2,
                                  textTransform: "uppercase",
                                },
                                resumeFontFamily("regular-regular"),
                              ]}
                            >
                              {item}
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                </View>
              </Page>
            </Document>
          } fileName="Edinburgh-CV.pdf">
            {({ blob, url, loading, error }) =>
              loading ? t('result.loadingBtn') : t('result.downloadBtn')
            }
          </PDFDownloadLink>
        </Button>
      </div>
      {documentWidth >= 1025 &&
        <PDFViewer style={PDFStyles.viewerContainer}>
          <Document title={`${data.firstName} ${data.lastName}`}>
            <Page style={{ flexDirection: "row" }} wrap>
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
                <View
                  style={{
                    flex: 0.433,
                    backgroundColor: templateColor || "#434A54",
                  }}
                />
                <View style={{ flex: 1 }} />
              </View>
              {/* sider */}
              <View
                style={[
                  PDFStyles.sider,
                  { padding: 0, overflow: "hidden", flex: 0.433, color: "white" },
                ]}
              >
                {/* first name & image */}
                <View
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 20,
                  }}
                >
                  {/* name & img background */}
                  {/* name */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0 20px",
                      flexWrap: "wrap",
                      columnGap: 5,
                    }}
                  >
                    <Text style={[PDFStyles.title, resumeFontFamily("bold-bold")]}>
                      {data.firstName}
                    </Text>
                    <Text style={[PDFStyles.title, resumeFontFamily("bold-bold")]}>
                      {data.lastName}
                    </Text>
                  </View>
                  {/* image */}
                  {data.image && (
                    <View
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 10000,
                        backgroundColor: "black",
                        marginTop: 20,
                        overflow: "hidden",
                      }}
                    >
                      <Image src={{ uri: data.image }} />
                    </View>
                  )}
                </View>
                {/* personal details */}
                <View style={{ padding: "20 15.5px 0 17.5px" }}>
                  <Text
                    style={[
                      PDFStyles.title,
                      resumeFontFamily("regular-bold"),
                      { marginBottom: 10 },
                    ]}
                  >
                    {resumeLanguage === "ge" ? "პირადი" : "personal"}
                  </Text>
                  {/* contact section */}
                  <ContactPDF
                    data={data}
                    resumeFontFamily={resumeFontFamily}
                    resumeLanguage={resumeLanguage}
                  />
                  {/* languages section */}
                  {data.languages[0]?.language && (
                    <>
                      <Text
                        style={[
                          PDFStyles.title,
                          resumeFontFamily("regular-bold"),
                          { marginTop: 10 },
                        ]}
                      >
                        {resumeLanguage === "ge" ? "ენები" : "languages"}
                      </Text>
                      <LanguagesPDF
                        data={data}
                        resumeFontFamily={resumeFontFamily}
                        resumeLanguage={resumeLanguage}
                      />
                    </>
                  )}
                </View>
              </View>
              <View style={PDFStyles.main}>
                <View style={[PDFStyles.welcomeContainer, { paddingTop: 22 }]}>
                  <Text
                    style={[
                      PDFStyles.welcomeText,
                      resumeFontFamily("regular-regular"),
                    ]}
                  >
                    {data.aboutMe}
                  </Text>
                </View>
                <View
                  style={{
                    height: 2,
                    width: "93%",
                    backgroundColor: "#80808080",
                    margin: "10px auto",
                  }}
                />
                {/* experience section */}
                {data.experience?.length > 0 && data.experience[0]?.startDate && (
                  <ExperiencePDF
                    data={data}
                    resumeFontFamily={resumeFontFamily}
                    resumeLanguage={resumeLanguage}
                  />
                )}
                {/* education section */}
                {data.education[0]?.educationStart && (
                  <EducationPDF
                    resumeFontFamily={resumeFontFamily}
                    resumeLanguage={resumeLanguage}
                    data={data}
                  />
                )}
                {/* skills section */}
                {data.skills?.length > 0 && data.skills[0] && (
                  <View style={PDFStyles.experienceContainer}>
                    <Text
                      style={[
                        PDFStyles.title,
                        resumeFontFamily("regular-bold"),
                        { marginTop: 10 },
                      ]}
                    >
                      {resumeLanguage === "ge" ? "უნარები" : "skills"}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      {data.skills.map((item) => (
                        <View style={{ flexBasis: "50%" }} key={uuidv4()}>
                          <Text
                            style={[
                              PDFStyles.siderDetailsTitleSmall,
                              {
                                marginTop: 2,
                                textTransform: "uppercase",
                              },
                              resumeFontFamily("regular-regular"),
                            ]}
                          >
                            {item}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            </Page>
          </Document>
        </PDFViewer>
      }
    </div>
  );
};

export default EdinburghCV;
