/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const EducationPDF = ({
  data,
  noDivider,
  resumeLanguage,
  resumeFontFamily,
}) => {
  return (
    <>
      {!noDivider && (
        <View
          style={{
            height: 2,
            width: "93%",
            backgroundColor: "#80808080",
            margin: "10px auto",
          }}
        />
      )}
      <View style={!noDivider && { padding: "0 14px" }}>
        <Text
          style={[
            PDFStyles.title,
            resumeFontFamily("regular-bold"),
            { marginBottom: 5 },
          ]}
        >
          {resumeLanguage === "ge" ? "განათლება" : "education"}
        </Text>
        <View style={{ gap: 10 }}>
          {data.education?.map(
            (item) =>
              item.educationStart && (
                <View key={uuidv4()}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 50,
                    }}
                  >
                    <View>
                      <Text
                        style={[
                          PDFStyles.siderDetailsTitleSmall,
                          resumeFontFamily("bold-bold"),
                          { width: 280 },
                        ]}
                      >
                        {item.degree}
                      </Text>
                      <Text
                        style={[
                          PDFStyles.welcomeText,
                          resumeFontFamily("regular-regular"),
                          {
                            textTransform: "capitalize",
                            width: 280,
                          },
                        ]}
                      >
                        {item.college}
                      </Text>
                    </View>
                    <Text
                      style={[
                        PDFStyles.siderDetailsText,
                        resumeFontFamily("regular-regular"),
                      ]}
                    >
                      {item.educationStart}{" "}
                      {item.educationStart &&
                        item.educationEnd &&
                        `- ${item.educationEnd}`}
                      {item.educationStart &&
                        !item.educationEnd &&
                        resumeLanguage === "ge" &&
                        "- აქტიური"}
                      {item.educationStart &&
                        !item.educationEnd &&
                        resumeLanguage !== "ge" &&
                        "- Present"}
                    </Text>
                  </View>
                </View>
              )
          )}
        </View>
      </View>
    </>
  );
};

export default EducationPDF;
