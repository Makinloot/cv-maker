/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const EducationPDF = ({ data }) => {
  return (
    <View style={[PDFStyles.siderDetailsContainer, { marginTop: 10 }]}>
      <Text style={PDFStyles.title}>Education</Text>
      <View style={PDFStyles.siderDetailsStroke} />
      {data.education?.map(
        (item) =>
          item.educationStart && (
            <View style={PDFStyles.siderDetailsTextContainer} key={uuidv4()}>
              <Text style={PDFStyles.siderDetailsText}>
                {item.educationStart}{" "}
                {item.educationEnd && `- ${item.educationEnd}`}
              </Text>
              <Text style={PDFStyles.siderDetailsTitleSmall}>
                {item.degree}
              </Text>
              <Text style={PDFStyles.siderDetailsText}>{item.college}</Text>
            </View>
          )
      )}
    </View>
  );
};

export default EducationPDF;
