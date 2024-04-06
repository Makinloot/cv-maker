import { Card, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/CVContext";
import { useEffect, useState } from "react";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";
import style from "./CVForm.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";

const CVForm = () => {
  const { additionalInformation, croppedImg, formRedirect } = useAppContext();
  const navigate = useNavigate();
  const { setData } = useAppContext();
  const [formIndex, setFormIndex] = useState(0);
  const { t } = useTranslation();
  const [formInitialValues, setFormInitialValues] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (formRedirect === "") navigate("/templates");
  }, [formRedirect, navigate]);

  // submit form
  const onFinish = async (values) => {
    console.log("values", values);

    try {
      const cvData = {
        firstName: values.firstName,
        lastName: values.lastName,
        prefix: values.prefix,
        phone: values.phone,
        email: values.email,
        address: values.address,
        zip: values.zip,
        city: values.city,
        dateOfBirth: additionalInformation
          ? values.dateOfBirth && values.dateOfBirth.format("DD.MM.YYYY")
          : "",
        placeOfBirth: additionalInformation ? values.placeOfBirth : "",
        nationality: additionalInformation ? values.nationality : "",
        gender: additionalInformation ? values.gender : "",
        socials: additionalInformation
          ? [
              {
                socialName: values.socialName,
                socialLink: values.socialLink,
              },
              {
                socialName: values.socialName2,
                socialLink: values.socialLink2,
              },
              {
                socialName: values.socialName3,
                socialLink: values.socialLink3,
              },
            ]
          : [],
        education: [
          {
            educationStart:
              values.educationStart && values.educationStart.year(),
            educationEnd: values.educationEnd && values.educationEnd.year(),
            college: values.college,
            degree: values.degree,
          },
          {
            educationStart:
              values.educationStart2 && values.educationStart2.year(),
            educationEnd: values.educationEnd2 && values.educationEnd2.year(),
            college: values.college2,
            degree: values.degree2,
          },
        ],
        languages: [
          {
            language: values.language,
            level: values.languageLevel,
          },
          {
            language: values.language2,
            level: values.languageLevel2,
          },
          {
            language: values.language3,
            level: values.languageLevel3,
          },
          {
            language: values.language4,
            level: values.languageLevel4,
          },
        ],
        aboutMe: values.aboutMe,
        skills: values.skills,
        experience: [
          {
            startDate:
              values.experienceStart &&
              values.experienceStart.format("MM.YYYY"),
            endDate:
              values.experienceEnd && values.experienceEnd.format("MM.YYYY"),
            position: values.position,
            companyName: values.company,
            aboutJob: values.aboutJob,
          },
          {
            startDate:
              values.experienceStart2 &&
              values.experienceStart2.format("MM.YYYY"),
            endDate:
              values.experienceEnd2 && values.experienceEnd2.format("MM.YYYY"),
            position: values.position2,
            companyName: values.company2,
            aboutJob: values.aboutJob2,
          },
          {
            startDate:
              values.experienceStart3 &&
              values.experienceStart3.format("MM.YYYY"),
            endDate:
              values.experienceEnd3 && values.experienceEnd3.format("MM.YYYY"),
            position: values.position3,
            companyName: values.company3,
            aboutJob: values.aboutJob3,
          },
        ],
        image: croppedImg,
      };
      sessionStorage.setItem("cvData", JSON.stringify(cvData));
      await setData(cvData);
      console.log("data on submit", cvData);
      navigate(`/cv/${formRedirect}`);
    } catch (error) {
      console.log(error, "error setting values");
    }
  };

  // submit error
  const onFinishFailed = (values) => {
    console.log(values);
    message.error(t("form.formSubmitError"));
  };

  useEffect(() => {
    const loadValues = async () => {
      try {
        const valuesFromSessionStorage = JSON.parse(
          sessionStorage.getItem("cvData")
        );
        setFormInitialValues(valuesFromSessionStorage);
        setLoading(false);
      } catch (error) {
        message.error("error loading values");
        console.log("error loading values", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    loadValues();
  }, []);

  if (loading) return <div>loading</div>;

  return (
    <div className="Form">
      <div className="container">
        <div className={style.formContainer}>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            layout="vertical"
            className={style.formWrapper}
            initialValues={{
              firstName: formInitialValues?.firstName,
              lastName: formInitialValues?.lastName,
              prefix: formInitialValues?.prefix,
              phone: formInitialValues?.phone,
              email: formInitialValues?.email,
              address: formInitialValues?.address,
              zip: formInitialValues?.zip,
              city: formInitialValues?.city,
              // TODO: FIX DATE
              // dateOfBirth: formInitialValues?.dateOfBirth ? moment(formInitialValues.dateOfBirth, "DD.MM.YYYY") : null,
              placeOfBirth: formInitialValues?.placeOfBirth,
              nationality: formInitialValues?.nationality,
              gender: formInitialValues?.gender,
              socialName: formInitialValues?.socials[0]?.socialName,
              socialName2: formInitialValues?.socials[1]?.socialName,
              socialName3: formInitialValues?.socials[2]?.socialName,
              socialLink: formInitialValues?.socials[0]?.socialLink,
              socialLink2: formInitialValues?.socials[1]?.socialLink,
              socialLink3: formInitialValues?.socials[2]?.socialLink,
              // education section
              // TODO: DATES
              education: formInitialValues?.education,
              college: formInitialValues?.education[0]?.college,
              college2: formInitialValues?.education[1]?.college,
              degree: formInitialValues?.education[0]?.degree,
              degree2: formInitialValues?.education[1]?.degree,
              language: formInitialValues?.languages[0]?.language,
              language2: formInitialValues?.languages[1]?.language,
              language3: formInitialValues?.languages[2]?.language,
              language4: formInitialValues?.languages[3]?.language,
              languageLevel: formInitialValues?.languages[0]?.level,
              languageLevel2: formInitialValues?.languages[1]?.level,
              languageLevel3: formInitialValues?.languages[2]?.level,
              languageLevel4: formInitialValues?.languages[3]?.level,
              aboutMe: formInitialValues?.aboutMe,
              // experience section
              // TODO: DATES
              skills: formInitialValues?.skills?.map((item) => item),
              position: formInitialValues?.experience[0]?.position,
              position2: formInitialValues?.experience[1]?.position,
              position3: formInitialValues?.experience[2]?.position,
              company: formInitialValues?.experience[0]?.companyName,
              company2: formInitialValues?.experience[1]?.companyName,
              company3: formInitialValues?.experience[2]?.companyName,
              aboutJob: formInitialValues?.experience[0]?.aboutJob,
              aboutJob2: formInitialValues?.experience[1]?.aboutJob,
              aboutJob3: formInitialValues?.experience[2]?.aboutJob,
            }}
          >
            <Card
              className={style.card}
              title={
                formIndex === 0
                  ? t("form.cardTitlePersonal")
                  : formIndex === 1
                  ? t("form.cardTitleExperience")
                  : formIndex === 2 && t("form.cardTitleEducation")
              }
            >
              {/* personal information */}
              <Personal
                setIndex={setFormIndex}
                hide={formIndex === 0 ? false : true}
              />
              {/* experience */}
              <Experience
                setIndex={setFormIndex}
                hide={formIndex === 1 ? false : true}
              />
              {/* education */}
              <Education
                setIndex={setFormIndex}
                hide={formIndex === 2 ? false : true}
              />
            </Card>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CVForm;
