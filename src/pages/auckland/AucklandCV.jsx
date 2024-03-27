import { PDFViewer, Document, Page, Text, View } from "@react-pdf/renderer";
import PDFStyles from "../../components/cv-templates/PDFStyles";
import { useAppContext } from "../../context/CVContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactPDF from "../../components/cv-templates/components/ContactPDF";
import EducationPDF from "../../components/cv-templates/components/EducationPDF";
import LanguagesPDF from "../../components/cv-templates/components/LanguagesPDF";
import SkillsPDF from "../../components/cv-templates/components/SkillsPDF";
import ExperiencePDF from "../../components/cv-templates/components/ExperiencePDF";

const AucklandCV = () => {
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
              style={{ flex: 0.5, backgroundColor: templateColor || "#3F6591" }}
            />
            <View style={{ flex: 1 }} />
          </View>
          {/* full name */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              width: "100%",
              padding: "18px 0",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "94%",
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                border: "2px",
              }}
            >
              <Text style={PDFStyles.welcomeTitlePrimary}>
                {`${data.firstName} ${data.lastName}`}
              </Text>
            </View>
          </View>
          {/* sider */}
          <View style={[PDFStyles.sider, { color: "white" }]}>
            <Text style={[PDFStyles.title, { marginBottom: 10 }]}>
              personal
            </Text>
            {/* contact section */}
            <ContactPDF data={data} />
            {/* skills section */}
            {data.skills?.length > 0 && data.skills[0] && (
              <>
                <Text style={[PDFStyles.title, { marginTop: 10 }]}>skills</Text>
                <SkillsPDF data={data} />
              </>
            )}
            {/* languages section */}
            {data.languages[0]?.language && (
              <>
                <Text style={[PDFStyles.title, { marginTop: 10 }]}>
                  languages
                </Text>
                <LanguagesPDF data={data} />
              </>
            )}
          </View>
          {/* main */}
          <View style={PDFStyles.main}>
            {/* welcome section */}
            <View style={PDFStyles.welcomeContainer}>
              <Text style={PDFStyles.welcomeText}>{data.aboutMe}</Text>
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
              <ExperiencePDF data={data} />
            )}
            {/* education section */}
            {data.education[0]?.educationStart && <EducationPDF data={data} />}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default AucklandCV;
