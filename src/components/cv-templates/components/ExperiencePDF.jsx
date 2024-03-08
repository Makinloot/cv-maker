/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const ExperiencePDF = ({ data }) => {
  return (
    <View style={PDFStyles.experienceContainer}>
      <Text style={PDFStyles.title}>Experience</Text>
      {data.experience.map((item) => (
        <View style={{ padding: "0px 0px" }} key={uuidv4()}>
          <View style={PDFStyles.experienceItemContainer}>
            <Text style={PDFStyles.siderDetailsText}>
              {item.startDate} {item.endDate && `- ${item.endDate}`}
            </Text>
            <Text style={PDFStyles.siderDetailsTitleSmall}>
              {item.position}
            </Text>
            <Text
              style={[PDFStyles.welcomeText, { textTransform: "capitalize" }]}
            >
              {item.companyName}
            </Text>
            <Text style={PDFStyles.welcomeText}>{item.aboutJob}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ExperiencePDF;
