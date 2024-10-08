/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const SkillsPDF = ({ data, resumeFontFamily }) => {
  return (
    <View style={[PDFStyles.siderDetailsContainer, { marginTop: 10 }]}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {data.skills.map((item) => (
          <View
            style={[PDFStyles.siderDetailsTextContainer, { flexBasis: "50%" }]}
            key={uuidv4()}
          >
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold')]}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SkillsPDF;
