/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const ExperiencePDF = ({ data, noPadding }) => {
  return (
    <View
      style={[
        PDFStyles.experienceContainer,
        noPadding && { padding: 0, margin: "5px 0" },
      ]}
    >
      <Text style={PDFStyles.title}>work experience</Text>
      {data.experience.map((item) => (
        <View style={{ padding: "0px 0px" }} key={uuidv4()}>
          <View style={PDFStyles.experienceItemContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={PDFStyles.siderDetailsTitleSmall}>
                  {item.position}
                </Text>
                <Text
                  style={[
                    PDFStyles.welcomeText,
                    { textTransform: "capitalize" },
                  ]}
                >
                  {item.companyName}
                </Text>
              </View>
              <Text style={PDFStyles.siderDetailsText}>
                {item.startDate}{" "}
                {item.endDate ? `- ${item.endDate}` : "- Present"}
              </Text>
            </View>
            <Text style={PDFStyles.welcomeText}>{item.aboutJob}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ExperiencePDF;
