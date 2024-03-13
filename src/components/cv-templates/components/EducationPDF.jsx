/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const EducationPDF = ({ data }) => {
  return (
    <>
      <View
        style={{
          height: 2,
          width: "93%",
          backgroundColor: "#80808080",
          margin: "10px auto",
        }}
      />
      <View style={{ padding: "0 14px" }}>
        <Text style={[PDFStyles.title, { marginBottom: 5 }]}>education</Text>
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
                          { width: 280 },
                        ]}
                      >
                        {item.degree}
                      </Text>
                      <Text
                        style={[
                          PDFStyles.welcomeText,
                          {
                            textTransform: "capitalize",
                            width: 280,
                          },
                        ]}
                      >
                        {item.college}
                      </Text>
                    </View>
                    <Text style={PDFStyles.siderDetailsText}>
                      {item.educationStart}{" "}
                      {item.educationEnd && `- ${item.educationEnd}`}
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
