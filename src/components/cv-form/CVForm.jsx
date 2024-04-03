import { Card, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/CVContext";
import { useEffect, useState } from "react";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";
import style from "./CVForm.module.css";
import { useTranslation } from "react-i18next";

const CVForm = () => {
  const { additionalInformation, croppedImg, formRedirect } = useAppContext();
  const navigate = useNavigate();
  const { setData } = useAppContext();
  const [formIndex, setFormIndex] = useState(0);
  const { t } = useTranslation();

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
      await setData(cvData);
      console.log("data", cvData);
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
