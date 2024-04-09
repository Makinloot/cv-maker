import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  PDFDownloadLink
} from "@react-pdf/renderer";
import PDFStyles from "../../components/cv-templates/PDFStyles";
import { useAppContext } from "../../context/CVContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EducationPDF from "../../components/cv-templates/components/EducationPDF";
import ExperiencePDF from "../../components/cv-templates/components/ExperiencePDF";
import { v4 as uuidv4 } from "uuid";
import phoneIcon from "/icons/phone.png";
import homeIcon from "/icons/home.png";
import emailIcon from "/icons/email.png";
import OctagoStyles from "./OctagoCVStyles";
import { useTranslation } from "react-i18next";
import { Button, Result } from 'antd'
import FinishedResumeButtons from '../../components/finishedResumeButtons/FinishedResumeButtons'

const OtagoCV = () => {
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
              <Page wrap style={{ padding: "10px 20px" }}>
                {/* welcome */}
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 0.89 }}>
                    {/* name */}
                    <Text
                      style={[
                        PDFStyles.welcomeTitlePrimary,
                        resumeFontFamily("bold-bold"),
                      ]}
                    >{`${data.firstName} ${data.lastName}`}</Text>
                    {/* details */}
                    <View
                      style={{
                        margin: "10px 0",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        columnGap: 10,
                      }}
                    >
                      {data?.address && (
                        <View style={OctagoStyles.flexRow}>
                          <Image src={{ uri: homeIcon }} style={{ width: 12 }} />
                          <Text
                            style={[
                              PDFStyles.siderDetailsText,
                              resumeFontFamily("regular-regular"),
                            ]}
                          >{`${data?.address}${data?.zip && `, ${data.zip}`}${data.city && `, ${data.city}`
                            }`}</Text>
                        </View>
                      )}
                      {(data.phone || data.prefix) && (
                        <View style={OctagoStyles.flexRow}>
                          <Image src={{ uri: phoneIcon }} style={{ width: 12 }} />
                          <View style={{ flexDirection: "row", gap: 2 }}>
                            <Text
                              style={[
                                PDFStyles.siderDetailsText,
                                resumeFontFamily("regular-regular"),
                              ]}
                            >
                              {data.prefix}
                            </Text>
                            <Text
                              style={[
                                PDFStyles.siderDetailsText,
                                resumeFontFamily("regular-regular"),
                              ]}
                            >
                              {data.phone && data.phone.match(/\d{1,3}/g).join("-")}
                            </Text>
                          </View>
                        </View>
                      )}
                      {data.email && (
                        <View style={OctagoStyles.flexRow}>
                          <Image src={{ uri: emailIcon }} style={{ width: 12 }} />
                          <Text
                            style={[
                              PDFStyles.siderDetailsText,
                              resumeFontFamily("regular-regular"),
                            ]}
                          >
                            {data.email}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "-10",
                      height: 60,
                      width: 60,
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      fontSize: 26,
                      backgroundColor: templateColor || "#36BC9B",
                    }}
                  >
                    <Text>CV</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 2,
                    width: "100%%",
                    backgroundColor: "#80808080",
                    margin: "0 0 5px",
                  }}
                />
                {/* personal details */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "space-between",
                  }}
                >
                  {data.dateOfBirth && (
                    <View style={PDFStyles.siderDetailsTextContainer}>
                      <Text
                        style={[
                          PDFStyles.siderDetailsTitleSmall,
                          resumeFontFamily("regular-bold"),
                        ]}
                      >
                        {resumeLanguage === "ge" ? "დაბ. თარიღი" : "Date of birth"}
                      </Text>
                      <Text style={[PDFStyles.siderDetailsText]}>
                        {data.dateOfBirth}
                      </Text>
                    </View>
                  )}
                  {data.placeOfBirth && (
                    <View style={PDFStyles.siderDetailsTextContainer}>
                      <Text
                        style={[
                          PDFStyles.siderDetailsTitleSmall,
                          resumeFontFamily("regular-bold"),
                        ]}
                      >
                        {resumeLanguage === "ge" ? "დაბ. ადგილი" : "Place of birth"}
                      </Text>
                      <Text
                        style={[
                          PDFStyles.siderDetailsText,
                          resumeFontFamily("regular-regular"),
                          { textTransform: "capitalize" },
                        ]}
                      >
                        {data.placeOfBirth}
                      </Text>
                    </View>
                  )}
                  {data.gender && (
                    <View style={PDFStyles.siderDetailsTextContainer}>
                      <Text
                        style={[
                          PDFStyles.siderDetailsTitleSmall,
                          resumeFontFamily("regular-bold"),
                        ]}
                      >
                        {resumeLanguage === "ge" ? "სქესი" : "Gender"}
                      </Text>
                      <Text
                        style={[
                          PDFStyles.siderDetailsText,
                          resumeFontFamily("regular-regular"),
                        ]}
                      >
                        {resumeLanguage === "ge" &&
                          data.gender === "Female" &&
                          "მდედრობითი"}
                        {resumeLanguage === "ge" &&
                          data.gender === "Male" &&
                          "მამრობითი"}
                        {resumeLanguage === "ge" && data.gender === "Other" && "სხვა"}
                        {resumeLanguage !== "ge" && data.gender}
                      </Text>
                    </View>
                  )}
                  {data.nationality && (
                    <View style={PDFStyles.siderDetailsTextContainer}>
                      <Text
                        style={[
                          PDFStyles.siderDetailsTitleSmall,
                          resumeFontFamily("regular-bold"),
                        ]}
                      >
                        {resumeLanguage === "ge" ? "ეროვნება" : "Nationality"}
                      </Text>
                      <Text
                        style={[
                          PDFStyles.siderDetailsText,
                          resumeFontFamily("regular-regular"),
                          { textTransform: "capitalize" },
                        ]}
                      >
                        {data.nationality}
                      </Text>
                    </View>
                  )}
                  {
                    <View style={PDFStyles.siderDetailsTextContainer}>
                      {data?.socials[0] && (
                        <Text
                          style={[
                            PDFStyles.siderDetailsTitleSmall,
                            resumeFontFamily("regular-bold"),
                            { margin: 0 },
                          ]}
                        >
                          {resumeLanguage === "ge" ? "სოც. ქსელი" : "Socials"}
                        </Text>
                      )}
                      <View style={{ flexDirection: "row" }}>
                        {data?.socials?.map(
                          (social) =>
                            social.socialName && (
                              <View
                                style={[PDFStyles.siderDetailsTextContainer]}
                                key={uuidv4()}
                              >
                                <Link
                                  src={social.socialLink}
                                  style={{ color: "black" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(social.socialLink, "_blank");
                                  }}
                                >
                                  <Text
                                    style={[
                                      PDFStyles.siderDetailsText,
                                      resumeFontFamily("regular-regular"),
                                      { textTransform: "capitalize", margin: 0 },
                                    ]}
                                  >
                                    {social.socialName}
                                  </Text>
                                </Link>
                              </View>
                            )
                        )}
                      </View>
                    </View>
                  }
                </View>
                {(data.dateOfBirth ||
                  data.placeOfBirth ||
                  data.gender ||
                  data.nationality ||
                  data.socials[0]?.name) && (
                    <View
                      style={{
                        height: 2,
                        width: "100%%",
                        backgroundColor: "#80808080",
                        margin: "10px 0 5px",
                      }}
                    />
                  )}
                {data.aboutMe && (
                  <View>
                    <Text
                      style={[
                        PDFStyles.welcomeText,
                        resumeFontFamily("regular-regular"),
                        { margin: "5px 0" },
                      ]}
                    >
                      {data.aboutMe}
                    </Text>
                    <View
                      style={{
                        height: 2,
                        width: "100%%",
                        backgroundColor: "#80808080",
                        margin: "10px 0 5px",
                      }}
                    />
                  </View>
                )}
                {data.experience?.length > 0 && data.experience[0]?.startDate && (
                  <>
                    <ExperiencePDF
                      data={data}
                      noPadding
                      resumeFontFamily={resumeFontFamily}
                      resumeLanguage={resumeLanguage}
                    />
                    <View
                      style={{
                        height: 2,
                        width: "100%%",
                        backgroundColor: "#80808080",
                        margin: "5px 0 10px",
                      }}
                    />
                  </>
                )}
                {data.education[0]?.educationStart && (
                  <>
                    <EducationPDF
                      data={data}
                      noDivider
                      resumeFontFamily={resumeFontFamily}
                      resumeLanguage={resumeLanguage}
                    />
                    <View
                      style={{
                        height: 2,
                        width: "100%%",
                        backgroundColor: "#80808080",
                        margin: "10px 0",
                      }}
                    />
                  </>
                )}
                <View style={{ flexDirection: "row", gap: 10 }}>
                  {data.skills?.length > 0 && data.skills[0] && (
                    <View
                      style={[
                        PDFStyles.experienceContainer,
                        { padding: 0, flex: 0.5 },
                      ]}
                    >
                      <Text
                        style={[PDFStyles.title, resumeFontFamily("regular-bold")]}
                      >
                        {resumeLanguage === "ge" ? "უნარები" : "Skills"}
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
                                  marginTop: 4,
                                  textTransform: "uppercase",
                                },
                                resumeFontFamily("regular-bold"),
                              ]}
                            >
                              {item}
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                  {/* languages section */}
                  {data.languages[0]?.language && (
                    <View style={{ flex: 0.5 }}>
                      <Text
                        style={[PDFStyles.title, resumeFontFamily("regular-bold")]}
                      >
                        {resumeLanguage === "ge" ? "ენები" : "Languages"}
                      </Text>
                      <View>
                        {data.languages.map(
                          (language) =>
                            language.language && (
                              <View style={{ flexDirection: "row" }} key={uuidv4()}>
                                <View
                                  style={[
                                    PDFStyles.siderDetailsTextContainer,
                                    { flex: 0.5 },
                                  ]}
                                >
                                  <Text
                                    style={[
                                      PDFStyles.siderDetailsTitleSmall,
                                      resumeFontFamily("regular-bold"),
                                    ]}
                                  >
                                    {language.language}
                                  </Text>
                                </View>
                                <View
                                  style={[
                                    PDFStyles.siderDetailsTextContainer,
                                    { flex: 0.5 },
                                  ]}
                                >
                                  <Text
                                    style={[
                                      PDFStyles.siderDetailsTitleSmall,
                                      resumeFontFamily("regular-bold"),
                                    ]}
                                  >
                                    {resumeLanguage === "ge" &&
                                      language.level === "native" ? (
                                      <Text
                                        style={[
                                          PDFStyles.siderDetailsTitleSmall,
                                          resumeFontFamily("regular-bold"),
                                        ]}
                                      >
                                        მშობლიური
                                      </Text>
                                    ) : (
                                      <Text
                                        style={[PDFStyles.siderDetailsTitleSmall]}
                                      >
                                        {resumeLanguage === "ge" &&
                                          language.level === "native"
                                          ? "მშობლიური"
                                          : language.level}
                                      </Text>
                                    )}
                                  </Text>
                                </View>
                              </View>
                            )
                        )}
                      </View>
                    </View>
                  )}
                </View>
              </Page>
            </Document>
          } fileName="Otago-CV.pdf">
            {({ blob, url, loading, error }) =>
              loading ? t('result.loadingBtn') : t('result.downloadBtn')
            }
          </PDFDownloadLink>
        </Button>
      </div>
      {documentWidth >= 1025 &&
        <PDFViewer style={PDFStyles.viewerContainer}>
          <Document title={`${data.firstName} ${data.lastName}`}>
            <Page wrap style={{ padding: "10px 20px" }}>
              {/* welcome */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.89 }}>
                  {/* name */}
                  <Text
                    style={[
                      PDFStyles.welcomeTitlePrimary,
                      resumeFontFamily("bold-bold"),
                    ]}
                  >{`${data.firstName} ${data.lastName}`}</Text>
                  {/* details */}
                  <View
                    style={{
                      margin: "10px 0",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      columnGap: 10,
                    }}
                  >
                    {data?.address && (
                      <View style={OctagoStyles.flexRow}>
                        <Image src={{ uri: homeIcon }} style={{ width: 12 }} />
                        <Text
                          style={[
                            PDFStyles.siderDetailsText,
                            resumeFontFamily("regular-regular"),
                          ]}
                        >{`${data?.address}${data?.zip && `, ${data.zip}`}${data.city && `, ${data.city}`
                          }`}</Text>
                      </View>
                    )}
                    {(data.phone || data.prefix) && (
                      <View style={OctagoStyles.flexRow}>
                        <Image src={{ uri: phoneIcon }} style={{ width: 12 }} />
                        <View style={{ flexDirection: "row", gap: 2 }}>
                          <Text
                            style={[
                              PDFStyles.siderDetailsText,
                              resumeFontFamily("regular-regular"),
                            ]}
                          >
                            {data.prefix}
                          </Text>
                          <Text
                            style={[
                              PDFStyles.siderDetailsText,
                              resumeFontFamily("regular-regular"),
                            ]}
                          >
                            {data.phone && data.phone.match(/\d{1,3}/g).join("-")}
                          </Text>
                        </View>
                      </View>
                    )}
                    {data.email && (
                      <View style={OctagoStyles.flexRow}>
                        <Image src={{ uri: emailIcon }} style={{ width: 12 }} />
                        <Text
                          style={[
                            PDFStyles.siderDetailsText,
                            resumeFontFamily("regular-regular"),
                          ]}
                        >
                          {data.email}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "-10",
                    height: 60,
                    width: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: 26,
                    backgroundColor: templateColor || "#36BC9B",
                  }}
                >
                  <Text>CV</Text>
                </View>
              </View>
              <View
                style={{
                  height: 2,
                  width: "100%%",
                  backgroundColor: "#80808080",
                  margin: "0 0 5px",
                }}
              />
              {/* personal details */}
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "space-between",
                }}
              >
                {data.dateOfBirth && (
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text
                      style={[
                        PDFStyles.siderDetailsTitleSmall,
                        resumeFontFamily("regular-bold"),
                      ]}
                    >
                      {resumeLanguage === "ge" ? "დაბ. თარიღი" : "Date of birth"}
                    </Text>
                    <Text style={[PDFStyles.siderDetailsText]}>
                      {data.dateOfBirth}
                    </Text>
                  </View>
                )}
                {data.placeOfBirth && (
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text
                      style={[
                        PDFStyles.siderDetailsTitleSmall,
                        resumeFontFamily("regular-bold"),
                      ]}
                    >
                      {resumeLanguage === "ge" ? "დაბ. ადგილი" : "Place of birth"}
                    </Text>
                    <Text
                      style={[
                        PDFStyles.siderDetailsText,
                        resumeFontFamily("regular-regular"),
                        { textTransform: "capitalize" },
                      ]}
                    >
                      {data.placeOfBirth}
                    </Text>
                  </View>
                )}
                {data.gender && (
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text
                      style={[
                        PDFStyles.siderDetailsTitleSmall,
                        resumeFontFamily("regular-bold"),
                      ]}
                    >
                      {resumeLanguage === "ge" ? "სქესი" : "Gender"}
                    </Text>
                    <Text
                      style={[
                        PDFStyles.siderDetailsText,
                        resumeFontFamily("regular-regular"),
                      ]}
                    >
                      {resumeLanguage === "ge" &&
                        data.gender === "Female" &&
                        "მდედრობითი"}
                      {resumeLanguage === "ge" &&
                        data.gender === "Male" &&
                        "მამრობითი"}
                      {resumeLanguage === "ge" && data.gender === "Other" && "სხვა"}
                      {resumeLanguage !== "ge" && data.gender}
                    </Text>
                  </View>
                )}
                {data.nationality && (
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    <Text
                      style={[
                        PDFStyles.siderDetailsTitleSmall,
                        resumeFontFamily("regular-bold"),
                      ]}
                    >
                      {resumeLanguage === "ge" ? "ეროვნება" : "Nationality"}
                    </Text>
                    <Text
                      style={[
                        PDFStyles.siderDetailsText,
                        resumeFontFamily("regular-regular"),
                        { textTransform: "capitalize" },
                      ]}
                    >
                      {data.nationality}
                    </Text>
                  </View>
                )}
                {
                  <View style={PDFStyles.siderDetailsTextContainer}>
                    {data?.socials[0] && (
                      <Text
                        style={[
                          PDFStyles.siderDetailsTitleSmall,
                          resumeFontFamily("regular-bold"),
                          { margin: 0 },
                        ]}
                      >
                        {resumeLanguage === "ge" ? "სოც. ქსელი" : "Socials"}
                      </Text>
                    )}
                    <View style={{ flexDirection: "row" }}>
                      {data?.socials?.map(
                        (social) =>
                          social.socialName && (
                            <View
                              style={[PDFStyles.siderDetailsTextContainer]}
                              key={uuidv4()}
                            >
                              <Link
                                src={social.socialLink}
                                style={{ color: "black" }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(social.socialLink, "_blank");
                                }}
                              >
                                <Text
                                  style={[
                                    PDFStyles.siderDetailsText,
                                    resumeFontFamily("regular-regular"),
                                    { textTransform: "capitalize", margin: 0 },
                                  ]}
                                >
                                  {social.socialName}
                                </Text>
                              </Link>
                            </View>
                          )
                      )}
                    </View>
                  </View>
                }
              </View>
              {(data.dateOfBirth ||
                data.placeOfBirth ||
                data.gender ||
                data.nationality ||
                data.socials[0]?.name) && (
                  <View
                    style={{
                      height: 2,
                      width: "100%%",
                      backgroundColor: "#80808080",
                      margin: "10px 0 5px",
                    }}
                  />
                )}
              {data.aboutMe && (
                <View>
                  <Text
                    style={[
                      PDFStyles.welcomeText,
                      resumeFontFamily("regular-regular"),
                      { margin: "5px 0" },
                    ]}
                  >
                    {data.aboutMe}
                  </Text>
                  <View
                    style={{
                      height: 2,
                      width: "100%%",
                      backgroundColor: "#80808080",
                      margin: "10px 0 5px",
                    }}
                  />
                </View>
              )}
              {data.experience?.length > 0 && data.experience[0]?.startDate && (
                <>
                  <ExperiencePDF
                    data={data}
                    noPadding
                    resumeFontFamily={resumeFontFamily}
                    resumeLanguage={resumeLanguage}
                  />
                  <View
                    style={{
                      height: 2,
                      width: "100%%",
                      backgroundColor: "#80808080",
                      margin: "5px 0 10px",
                    }}
                  />
                </>
              )}
              {data.education[0]?.educationStart && (
                <>
                  <EducationPDF
                    data={data}
                    noDivider
                    resumeFontFamily={resumeFontFamily}
                    resumeLanguage={resumeLanguage}
                  />
                  <View
                    style={{
                      height: 2,
                      width: "100%%",
                      backgroundColor: "#80808080",
                      margin: "10px 0",
                    }}
                  />
                </>
              )}
              <View style={{ flexDirection: "row", gap: 10 }}>
                {data.skills?.length > 0 && data.skills[0] && (
                  <View
                    style={[
                      PDFStyles.experienceContainer,
                      { padding: 0, flex: 0.5 },
                    ]}
                  >
                    <Text
                      style={[PDFStyles.title, resumeFontFamily("regular-bold")]}
                    >
                      {resumeLanguage === "ge" ? "უნარები" : "Skills"}
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
                                marginTop: 4,
                                textTransform: "uppercase",
                              },
                              resumeFontFamily("regular-bold"),
                            ]}
                          >
                            {item}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
                {/* languages section */}
                {data.languages[0]?.language && (
                  <View style={{ flex: 0.5 }}>
                    <Text
                      style={[PDFStyles.title, resumeFontFamily("regular-bold")]}
                    >
                      {resumeLanguage === "ge" ? "ენები" : "Languages"}
                    </Text>
                    <View>
                      {data.languages.map(
                        (language) =>
                          language.language && (
                            <View style={{ flexDirection: "row" }} key={uuidv4()}>
                              <View
                                style={[
                                  PDFStyles.siderDetailsTextContainer,
                                  { flex: 0.5 },
                                ]}
                              >
                                <Text
                                  style={[
                                    PDFStyles.siderDetailsTitleSmall,
                                    resumeFontFamily("regular-bold"),
                                  ]}
                                >
                                  {language.language}
                                </Text>
                              </View>
                              <View
                                style={[
                                  PDFStyles.siderDetailsTextContainer,
                                  { flex: 0.5 },
                                ]}
                              >
                                <Text
                                  style={[
                                    PDFStyles.siderDetailsTitleSmall,
                                    resumeFontFamily("regular-bold"),
                                  ]}
                                >
                                  {resumeLanguage === "ge" &&
                                    language.level === "native" ? (
                                    <Text
                                      style={[
                                        PDFStyles.siderDetailsTitleSmall,
                                        resumeFontFamily("regular-bold"),
                                      ]}
                                    >
                                      მშობლიური
                                    </Text>
                                  ) : (
                                    <Text
                                      style={[PDFStyles.siderDetailsTitleSmall]}
                                    >
                                      {resumeLanguage === "ge" &&
                                        language.level === "native"
                                        ? "მშობლიური"
                                        : language.level}
                                    </Text>
                                  )}
                                </Text>
                              </View>
                            </View>
                          )
                      )}
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

export default OtagoCV;
