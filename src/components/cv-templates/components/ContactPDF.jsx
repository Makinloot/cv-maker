/* eslint-disable react/prop-types */
import { Link, Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";

const ContactPDF = ({ data }) => {
  return (
    <View style={[PDFStyles.siderDetailsContainer]}>
      <View style={PDFStyles.siderDetailsTextContainer}>
        {(data.phone || data.prefix) && (
          <>
            <Text style={PDFStyles.siderDetailsTitleSmall}>Phone</Text>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Text style={PDFStyles.siderDetailsText}>{data.prefix}</Text>
              <Text style={PDFStyles.siderDetailsText}>
                {data.phone && data.phone.match(/\d{1,3}/g).join("-")}
              </Text>
            </View>
          </>
        )}
      </View>
      {data.email && (
        <View style={PDFStyles.siderDetailsTextContainer}>
          <Text style={PDFStyles.siderDetailsTitleSmall}>Email</Text>
          <Text style={PDFStyles.siderDetailsText}>{data.email}</Text>
        </View>
      )}
      {data?.address && (
        <View style={PDFStyles.siderDetailsTextContainer}>
          <Text style={PDFStyles.siderDetailsTitleSmall}>Address</Text>
          <Text style={PDFStyles.siderDetailsText}>{`${data?.address}${
            data?.zip && `, ${data.zip}`
          }${data.city && `, ${data.city}`}`}</Text>
        </View>
      )}
      {data.dateOfBirth && (
        <View style={PDFStyles.siderDetailsTextContainer}>
          <Text style={PDFStyles.siderDetailsTitleSmall}>Date of birth</Text>
          <Text style={[PDFStyles.siderDetailsText]}>{data.dateOfBirth}</Text>
        </View>
      )}
      {data.placeOfBirth && (
        <View style={PDFStyles.siderDetailsTextContainer}>
          <Text style={PDFStyles.siderDetailsTitleSmall}>Place of birth</Text>
          <Text
            style={[
              PDFStyles.siderDetailsText,
              { textTransform: "capitalize" },
            ]}
          >
            {data.placeOfBirth}
          </Text>
        </View>
      )}
      {data.gender && (
        <View style={PDFStyles.siderDetailsTextContainer}>
          <Text style={PDFStyles.siderDetailsTitleSmall}>Gender</Text>
          <Text style={[PDFStyles.siderDetailsText]}>{data.gender}</Text>
        </View>
      )}
      {data.nationality && (
        <View style={PDFStyles.siderDetailsTextContainer}>
          <Text style={PDFStyles.siderDetailsTitleSmall}>Nationality</Text>
          <Text
            style={[
              PDFStyles.siderDetailsText,
              { textTransform: "capitalize" },
            ]}
          >
            {data.nationality}
          </Text>
        </View>
      )}
      {
        <View style={PDFStyles.siderDetailsTextContainer}>
          {data?.socials[0] && (
            <Text style={[PDFStyles.siderDetailsTitleSmall, { margin: 0 }]}>
              Socials
            </Text>
          )}
          {data?.socials?.map(
            (social) =>
              social.socialName && (
                <View
                  style={[PDFStyles.siderDetailsTextContainer]}
                  key={uuidv4()}
                >
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
                        { textTransform: "capitalize", margin: 0 },
                      ]}
                    >
                      {social.socialName}
                    </Text>
                  </Link>
                </View>
              )
          )}
        </View>
      }
    </View>
  );
};

export default ContactPDF;
