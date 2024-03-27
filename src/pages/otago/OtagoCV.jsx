import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
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

const OtagoCV = () => {
  const { data, templateColor } = useAppContext();
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
      <Document title={`${data.firstName} ${data.lastName}`}>
        <Page wrap style={{ padding: "10px 20px" }}>
          {/* welcome */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.89 }}>
              {/* name */}
              <Text
                style={PDFStyles.welcomeTitlePrimary}
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
                    <Text style={PDFStyles.siderDetailsText}>{`${
                      data?.address
                    }${data?.zip && `, ${data.zip}`}${
                      data.city && `, ${data.city}`
                    }`}</Text>
                  </View>
                )}
                {(data.phone || data.prefix) && (
                  <View style={OctagoStyles.flexRow}>
                    <Image src={{ uri: phoneIcon }} style={{ width: 12 }} />
                    <View style={{ flexDirection: "row", gap: 2 }}>
                      <Text style={PDFStyles.siderDetailsText}>
                        {data.prefix}
                      </Text>
                      <Text style={PDFStyles.siderDetailsText}>
                        {data.phone && data.phone.match(/\d{1,3}/g).join("-")}
                      </Text>
                    </View>
                  </View>
                )}
                {data.email && (
                  <View style={OctagoStyles.flexRow}>
                    <Image src={{ uri: emailIcon }} style={{ width: 12 }} />
                    <Text style={PDFStyles.siderDetailsText}>{data.email}</Text>
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
                <Text style={PDFStyles.siderDetailsTitleSmall}>
                  Date of birth
                </Text>
                <Text style={[PDFStyles.siderDetailsText]}>
                  {data.dateOfBirth}
                </Text>
              </View>
            )}
            {data.placeOfBirth && (
              <View style={PDFStyles.siderDetailsTextContainer}>
                <Text style={PDFStyles.siderDetailsTitleSmall}>
                  Place of birth
                </Text>
                <Text
                  style={[
                    PDFStyles.siderDetailsText,
                    { textTransform: "capitalize" },
                  ]}
                >
                  {data.placeOfBirth}
                </Text>
              </View>
            )}
            {data.gender && (
              <View style={PDFStyles.siderDetailsTextContainer}>
                <Text style={PDFStyles.siderDetailsTitleSmall}>Gender</Text>
                <Text style={[PDFStyles.siderDetailsText]}>{data.gender}</Text>
              </View>
            )}
            {data.nationality && (
              <View style={PDFStyles.siderDetailsTextContainer}>
                <Text style={PDFStyles.siderDetailsTitleSmall}>
                  Nationality
                </Text>
                <Text
                  style={[
                    PDFStyles.siderDetailsText,
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
                    style={[PDFStyles.siderDetailsTitleSmall, { margin: 0 }]}
                  >
                    Socials
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
              <Text style={[PDFStyles.welcomeText, { margin: "5px 0" }]}>
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
              <ExperiencePDF data={data} noPadding />
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
              <EducationPDF data={data} noDivider />
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
                <Text style={[PDFStyles.title]}>skills</Text>
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
                <Text style={[PDFStyles.title]}>languages</Text>
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
                            <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                              {language.language}
                            </Text>
                          </View>
                          <View
                            style={[
                              PDFStyles.siderDetailsTextContainer,
                              { flex: 0.5 },
                            ]}
                          >
                            <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                              {language.level}
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
  );
};

export default OtagoCV;
