import { StyleSheet, Font } from "@react-pdf/renderer";
import interBold from "../../assets/fonts/Inter-SemiBold.ttf";
import interRegular from "../../assets/fonts/Inter-Regular.ttf";

Font.register({ family: "inter-regular", src: interRegular });
Font.register({ family: "inter-bold", src: interBold });

export const colors = {
  gray: "#575757",
  white: "#ffffff",
  darkBlue: "#2e2e63",
};

const PDFStyles = StyleSheet.create({
  viewerContainer: {
    height: "calc(100vh - 129px)",
    width: "100%",
  },
  sider: {
    flex: 0.4045,
    padding: "110px 20.5px 0 17.5px",
    // color: "white",
  },
  main: {
    flex: 1,
  },
  imageContainer: {
    margin: "0 auto",
  },
  image: {
    width: 150,
    maxheight: 150,
  },
  // main items styles
  title: {
    fontFamily: "inter-bold",
    letterSpacing: 1.15,
    fontSize: 16,
    textTransform: "uppercase",
  },
  welcomeContainer: {
    display: "flex",
    padding: "105px 20px 0px 14px",
    width: "100%",
  },
  welcomeTitlePrimary: {
    fontFamily: "inter-bold",
    letterSpacing: 1.15,
    fontSize: 24,
    textTransform: "uppercase",
    color: "black",
  },
  welcomeSubTitle: {
    fontFamily: "inter-regular",
    textTransform: "capitalize",
    fontSize: 14,
    letterSpacing: 1.15,
  },
  welcomeText: {
    fontFamily: "inter-regular",
    fontSize: 10,
    letterSpacing: 1.15,
    color: colors.gray,
  },
  // experience styles
  experienceContainer: {
    padding: "0 14px",
  },
  experienceItemContainer: {
    margin: "5px 0",
    display: "flex",
    gap: 5,
  },
  // end of main items styles
  // sider styles
  siderDetailsContainer: {
    color: colors.white,
  },
  siderDetailsStroke: {
    backgroundColor: "white",
    height: 2,
    margin: "4px 0 0",
    border: "none",
    width: "101%",
  },
  siderDetailsTextContainer: {
    marginTop: 4,
    paddingRight: 10,
  },
  siderDetailsTextContainerEllipse: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    paddingRight: 10,
  },
  siderDetailsTitleSmall: {
    fontFamily: "inter-bold",
    fontSize: 11,
    textTransform: "capitalize",
  },
  siderDetailsText: {
    fontFamily: "inter-regular",
    fontSize: 10,
    margin: "2px 0",
  },
  siderDetailsTextExpertise: {
    fontFamily: "inter-bold",
    fontSize: 10,
    marginLeft: 15,
    textTransform: "capitalize",
  },
  // end of sider styles
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});

export default PDFStyles;
