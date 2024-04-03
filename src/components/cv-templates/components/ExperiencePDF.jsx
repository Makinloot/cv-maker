/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const ExperiencePDF = ({
  data,
  noPadding,
  resumeLanguage,
  resumeFontFamily,
}) => {
  return (
    <View
      style={[
        PDFStyles.experienceContainer,
        noPadding && { padding: 0, margin: "5px 0" },
      ]}
    >
      <Text style={[PDFStyles.title, resumeFontFamily("regular-bold")]}>
        {resumeLanguage === "ge" ? "სამუშაო გამოცდილება" : "Work experience"}
      </Text>
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
                <Text
                  style={[
                    PDFStyles.siderDetailsTitleSmall,
                    resumeFontFamily("bold-bold"),
                  ]}
                >
                  {item.position}
                </Text>
                <Text
                  style={[
                    PDFStyles.welcomeText,
                    resumeFontFamily("regular-regular"),
                    { textTransform: "capitalize" },
                  ]}
                >
                  {item.companyName}
                </Text>
              </View>
              <Text
                style={[
                  PDFStyles.siderDetailsText,
                  resumeFontFamily("regular-regular"),
                ]}
              >
                {item.startDate}{" "}
                {item.startDate && item.endDate && `- ${item.endDate}`}
                {item.startDate &&
                  !item.endDate &&
                  resumeLanguage === "ge" &&
                  "- აქტიური"}
                {item.startDate &&
                  !item.endDate &&
                  resumeLanguage !== "ge" &&
                  "- Present"}
              </Text>
            </View>
            <Text
              style={[
                PDFStyles.welcomeText,
                resumeFontFamily("regular-regular"),
              ]}
            >
              {item.aboutJob}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ExperiencePDF;
