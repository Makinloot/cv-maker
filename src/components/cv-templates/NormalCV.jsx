import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";
import PDFStyles from "./PDFStyles";
import { useAppContext } from "../../context/CVContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactPDF from "./components/ContactPDF";
import EducationPDF from "./components/EducationPDF";
import LanguagesPDF from "./components/LanguagesPDF";
import SkillsPDF from "./components/SkillsPDF";
import ExperiencePDF from "./components/ExperiencePDF";

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
          {/* sider */}
          <View style={PDFStyles.sider}>
            <View style={PDFStyles.imageContainer}>
              <Image style={PDFStyles.image} source={{ uri: data.image }} />
            </View>
            {/* contact section */}
            <ContactPDF data={data} />
            {/* education section */}
            {data.education[0]?.educationStart && <EducationPDF data={data} />}
            {/* languages section */}
            {data.languages[0]?.language && <LanguagesPDF data={data} />}
            {/* skills section */}
            {data.skills?.length > 0 && data.skills[0] && (
              <SkillsPDF data={data} />
            )}
          </View>
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
              <Text style={PDFStyles.welcomeSubTitle}>{data.profession}</Text>
              <Text style={PDFStyles.welcomeText}>{data.aboutMe}</Text>
            </View>
            {/* end of welcome section */}
            {/* experience section */}
            {data.experience?.length > 0 && data.experience[0]?.startDate && (
              <ExperiencePDF data={data} />
            )}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default NormalCV;
