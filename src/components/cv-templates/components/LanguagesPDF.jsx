/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const LanguagesPDF = ({ data }) => {
  return (
    <View style={[PDFStyles.siderDetailsContainer, { marginTop: 10 }]}>
      {data.languages.map(
        (language) =>
          language.language && (
            <View
              style={{ flexDirection: "row", color: "black" }}
              key={uuidv4()}
            >
              <View
                style={[PDFStyles.siderDetailsTextContainer, { flex: 0.5 }]}
              >
                <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                  {language.language}
                </Text>
              </View>
              <View
                style={[PDFStyles.siderDetailsTextContainer, { flex: 0.5 }]}
              >
                <Text style={[PDFStyles.siderDetailsTitleSmall]}>
                  {language.level}
                </Text>
              </View>
            </View>
          )
      )}
    </View>
  );
};

export default LanguagesPDF;
