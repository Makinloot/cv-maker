/* eslint-disable react/prop-types */
import { Font, Link, Text, View } from "@react-pdf/renderer";
import PDFStyles from "../PDFStyles";
import { v4 as uuidv4 } from "uuid";
import interRegular from '../../../assets/fonts/Inter-Regular.ttf'
import interBold from '../../../assets/fonts/Inter-SemiBold.ttf'
import notoSansRegular from '../../../assets/fonts/NotoSansGeorgian_Condensed-Regular.ttf'
import notoSansBold from '../../../assets/fonts/NotoSansGeorgian_Condensed-Bold.ttf'

Font.register({ family: "inter-regular", src: interRegular });
Font.register({ family: "inter-bold", src: interBold });
Font.register({ family: "noto-regular", src: notoSansRegular })
Font.register({ family: "noto-bold", src: notoSansBold })

const ContactPDF = ({ data, resumeLanguage, resumeFontFamily }) => {
  return (
    <View style={[PDFStyles.siderDetailsContainer]}>
      <View style={PDFStyles.siderDetailsTextContainer}>
        {(data.phone || data.prefix) && (
          <>
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold')]}>{resumeLanguage === "ge" ? "მობილური" : "Phone"}</Text>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Text style={[PDFStyles.siderDetailsText, resumeFontFamily('regular-regular')]}>{data.prefix}</Text>
              <Text style={[PDFStyles.siderDetailsText, resumeFontFamily('regular-regular')]}>
                {data.phone && data.phone.match(/\d{1,3}/g).join("-")}
              </Text>
            </View>
          </>
        )}
      </View>
      {
        data.email && (
          <View style={PDFStyles.siderDetailsTextContainer}>
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold')]}>{resumeLanguage === "ge" ? "ელ. ფოსტა" : "Email"}</Text>
            <Text style={[PDFStyles.siderDetailsText, resumeFontFamily('regular-regular')]}>{data.email}</Text>
          </View>
        )
      }
      {
        data?.address && (
          <View style={PDFStyles.siderDetailsTextContainer}>
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold')]}>{resumeLanguage === "ge" ? "მისამართი" : "Address"}</Text>
            <Text style={[PDFStyles.siderDetailsText, resumeFontFamily('regular-regular')]}>{`${data?.address}${data?.zip && `, ${data.zip}`
              }${data.city && `, ${data.city}`}`}</Text>
          </View>
        )
      }
      {
        data.dateOfBirth && (
          <View style={PDFStyles.siderDetailsTextContainer}>
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold')]}>{resumeLanguage === "ge" ? "დაბადების თარიღი" : "Date of birth"}</Text>
            <Text style={[PDFStyles.siderDetailsText, resumeFontFamily('regular-regular')]}>{data.dateOfBirth}</Text>
          </View>
        )
      }
      {
        data.placeOfBirth && (
          <View style={PDFStyles.siderDetailsTextContainer}>
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold')]}>{resumeLanguage === "ge" ? "დაბადების ადგილი" : "Place of birth"}</Text>
            <Text
              style={[
                PDFStyles.siderDetailsText,
                resumeFontFamily('regular-regular'),
                { textTransform: "capitalize" },
              ]}
            >
              {data.placeOfBirth}
            </Text>
          </View>
        )
      }
      {
        data.gender && (
          <View style={PDFStyles.siderDetailsTextContainer}>
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold')]}>{resumeLanguage === "ge" ? "სქესი" : "Gender"}</Text>
            <Text style={[PDFStyles.siderDetailsText, resumeFontFamily('regular-regular')]}>{data.gender}</Text>
          </View>
        )
      }
      {
        data.nationality && (
          <View style={PDFStyles.siderDetailsTextContainer}>
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold')]}>{resumeLanguage === "ge" ? "ეროვნება" : "Nationality"}</Text>
            <Text
              style={[
                PDFStyles.siderDetailsText,
                resumeFontFamily('regular-regular'),
                { textTransform: "capitalize" },
              ]}
            >
              {data.nationality}
            </Text>
          </View>
        )
      }
      {
        <View style={PDFStyles.siderDetailsTextContainer}>
          {data?.socials[0] && (
            <Text style={[PDFStyles.siderDetailsTitleSmall, resumeFontFamily('bold-bold'), { margin: 0 }]}>
              {resumeLanguage === "ge" ? "სოც. ქსელი" : "Socials"}
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
                        resumeFontFamily('regular-regular'),
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
    </View >
  );
};

export default ContactPDF;
