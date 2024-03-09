import { StyleSheet, Font } from "@react-pdf/renderer";
import robotoRegular from "../../assets/fonts/Roboto-Regular.ttf";
import robotoBold from "../../assets/fonts/Roboto-Bold.ttf";
import ninoMtavruli from "../../assets/fonts/BPGNinoMtavruli-Bold.ttf";
import glaho from "../../assets/fonts/BPGGlaho.ttf";

Font.register({ family: "roboto", src: robotoRegular });
Font.register({ family: "roboto-bold", src: robotoBold });
Font.register({ family: "georgianBold", src: ninoMtavruli });
Font.register({ family: "georgianRegular", src: glaho });

export const colors = {
  gray: "#575757",
  white: "#ffffff",
  darkBlue: "#2e2e63",
};

const PDFStyles = StyleSheet.create({
  viewerContainer: {
    height: "100vh",
    width: "100vw",
  },
  sider: {
    flex: 0.5,
    backgroundColor: colors.darkBlue,
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
    fontFamily: "roboto-bold",
    // fontFamily: "georgianBold",
    letterSpacing: 1.15,
    fontSize: 24,
    // textTransform: "capitalize",
  },
  welcomeContainer: {
    display: "flex",
    gap: 5,
    height: 206,
    padding: "10px 20px 20px",
    borderBottom: "2px solid black",
  },
  welcomeTitlePrimary: {
    fontFamily: "roboto-bold",
    // fontFamily: "georgianBold",
    letterSpacing: 1.15,
    fontSize: 24,
    textTransform: "capitalize",
  },
  welcomeTitleSecondary: {
    // fontFamily: "georgianBold",
    fontFamily: "roboto-bold",
    letterSpacing: 1.15,
    fontSize: 24,
    textTransform: "capitalize",
  },
  welcomeSubTitle: {
    fontFamily: "roboto",
    // fontFamily: "georgianRegular",
    textTransform: "capitalize",
    fontSize: 14,
    letterSpacing: 1.15,
  },
  welcomeText: {
    fontFamily: "roboto",
    // fontFamily: "georgianRegular",
    // marginTop: 5,
    fontSize: 10,
    letterSpacing: 1.15,
    color: colors.gray,
    textIndent: 10,
  },
  // experience styles
  experienceContainer: {
    marginTop: 10,
    padding: "0 20px",
  },
  experienceItemContainer: {
    margin: "5px 0",
    display: "flex",
    gap: 5,
  },
  // end of main items styles
  // sider styles
  siderDetailsContainer: {
    marginLeft: 25,
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
    fontFamily: "roboto-bold",
    // fontFamily: "georgianBold",
    fontSize: 12,
    textTransform: "capitalize",
  },
  siderDetailsText: {
    fontFamily: "roboto",
    // fontFamily: "georgianRegular",
    fontSize: 10,
    margin: "2px 0",
  },
  siderDetailsTextExpertise: {
    fontFamily: "roboto-bold",
    fontSize: 10,
    marginLeft: 15,
    textTransform: "capitalize",
  },
  // end of sider styles
});

export default PDFStyles;
