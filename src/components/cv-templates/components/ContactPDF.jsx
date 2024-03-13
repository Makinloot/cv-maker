/* eslint-disable react/prop-types */
import { Link, Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const ContactPDF = ({ data }) => {
  return (
    <View style={PDFStyles.siderDetailsContainer}>
      <View>
        {/* <View style={PDFStyles.siderDetailsStroke} /> */}
        <View style={PDFStyles.siderDetailsTextContainer}>
          <Text style={PDFStyles.siderDetailsTitleSmall}>Phone</Text>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <Text style={PDFStyles.siderDetailsText}>{data.prefix}</Text>
            <Text style={PDFStyles.siderDetailsText}>
              {data.phone && data.phone.match(/\d{1,3}/g).join("-")}
            </Text>
          </View>
        </View>
        <View style={PDFStyles.siderDetailsTextContainer}>
          <Text style={PDFStyles.siderDetailsTitleSmall}>Email</Text>
          <Text style={PDFStyles.siderDetailsText}>{data.email}</Text>
        </View>
        {data?.address && (
          <View style={PDFStyles.siderDetailsTextContainer}>
            <Text style={PDFStyles.siderDetailsTitleSmall}>Address</Text>
            <Text style={PDFStyles.siderDetailsText}>{data?.address}</Text>
          </View>
        )}
        {data?.socials?.map(
          (social) =>
            social.socialName && (
              <View
                style={[PDFStyles.siderDetailsTextContainer]}
                key={uuidv4()}
              >
                <Text style={PDFStyles.siderDetailsTitleSmall}>
                  {social.socialName}
                </Text>
                <Link
                  src={social.socialLink}
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(social.socialLink, "_blank");
                  }}
                >
                  <Text
                    style={[
                      PDFStyles.siderDetailsText,
                      { textTransform: "capitalize" },
                    ]}
                  >
                    Visit {social.socialName} profile
                  </Text>
                </Link>
              </View>
            )
        )}
      </View>
    </View>
  );
};

export default ContactPDF;
