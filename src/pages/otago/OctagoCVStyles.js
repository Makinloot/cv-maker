import { StyleSheet, Font } from "@react-pdf/renderer";
import interBold from "../../assets/fonts/Inter-SemiBold.ttf";
import interRegular from "../../assets/fonts/Inter-Regular.ttf";

Font.register({ family: "inter-regular", src: interRegular });
Font.register({ family: "inter-bold", src: interBold });

const OctagoStyles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
});

export default OctagoStyles;
