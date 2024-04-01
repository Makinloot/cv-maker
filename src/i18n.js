import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            // translations
            translation: {
                home: {
                    welcome: 'Create Your Professional CV in Minutes!',
                    subWelcome: 'Craft a Winning Resume Effortlessly with Our Easy-to-Use CV Builder',
                    startBtn: 'Get started',
                    instructionTitle: 'How to use',
                    instructionFirst: "Choose a Template & Color",
                    instructionSecond: "Add Your Information",
                    instructionThird: "Download and Use"
                },
                templates: {
                    text: "Increase your chances of finding a job and create your CV with one of our professionally designed CV templates.",
                    createBtn: "Create",
                    modalTitle: "Template",
                    modalBtnOk: "Ok",
                    modalBtnCancel: "Cancel"
                },
                form: {
                    formSubmitError: "Please fill every field correctly",
                    cardTitlePersonal: "Personal",
                    cardTitleExperience: "Experience",
                    cardTitleEducation: "Education",
                    image: "Image",
                    imageError: "You can only upload image files (jpg, jpeg, png)!",
                    imageSuccess: "uploaded successfully!",
                    imageFailed: "upload failed",
                    firstName: "First name",
                    firstNameErrorRequired: "Required field",
                    firstNameErrorMinimum: "Minimum 2 characters",
                    firstNameErrorMaximum: "Maximum 24 characters",
                    lastName: "last name",
                    lastNameErrorRequired: "Required field",
                    lastNameErrorMinimum: "Minimum 2 characters",
                    lastNameErrorMaximum: "Maximum 24 characters",
                    aboutMe: "About me",
                    prefix: "Prefix",
                    phoneNumber: "Phone number",
                    emailAddress: "Email address",
                    emailAddressError: "Please enter a valid email address",
                    address: "Address",
                    zipCode: "Zip code",
                    cityTown: "City/Town",
                    additionalInformation: "Additional Information",
                    dateOfBirth: "Date of birth",
                    placeOfBirth: "Place of birth",
                    nationality: "Nationality",
                    gender: "Gender",
                    genderMale: "Male",
                    genderFemale: "Female",
                    genderOther: "Other",
                    websiteName: "Website name",
                    websiteUrl: "Website URL",
                    addSocial: "Add more social",
                    removeSocial: "Remove social",
                    skills: "Skills",
                    skillsPlaceholder: "Type and select values",
                    startDate: "Start date",
                    endDate: "End date",
                    position: "Position",
                    company: "Company",
                    aboutJob: "About job",
                    addExperience: "Add experience",
                    removeExperience: "Remove experience",
                    experienceNext: "Next",
                    experiencePrevious: "Previous",
                    submit: "Submit",
                    languagesTitle: "Languages",
                    language: "Language",
                    languageLevel: "Level",
                    addLanguage: "Add language",
                    removeLanguage: "Remove language",
                    educationTitle: "Education",
                    educationStartDate: "Start date",
                    educationEndDate: "End date",
                    college: "College",
                    degree: "Degree",
                    addEducation: "Add education",
                    removeEducation: "Remove education"
                },
                aside: {
                    home: "Home",
                    templates: "Templates"
                },
                footer: {
                    createdBy: "Created by Tornike Epitashvili"
                }
            }
        },
        ge: {
            // translations
            translation: {
                home: {
                    welcome: 'შექმენი პროფესიონალური სივი წუთებში!',
                    subWelcome: 'გამოთალე მომგებიანი რეზიუმე ძალისხმევის გარეშე ჩვენი მარტივი გამოსაყენებელი სივის მშენებელით',
                    startBtn: 'დაიწყეთ',
                    instructionTitle: 'როგორ გამოვიყენოთ',
                    instructionFirst: "აირჩიეთ შაბლონი & ფერი",
                    instructionSecond: "დაამატეთ თქვენი ინფორმაცია",
                    instructionThird: "გადმოწერეთ და გამოიყენეთ"
                },
                templates: {
                    text: "გაზარდე შანსები სამსახურის პოვნისა, ჩვენი პროფესიონალური სივის დიზაინით.",
                    createBtn: "შექმნა",
                    modalTitle: "შაბლონი",
                    modalBtnOk: "დასტური",
                    modalBtnCancel: "გაუქმება"
                },
                form: {
                    formSubmitError: "გთხოვთ შეავსეთ ყველა ველი სწორად",
                    cardTitlePersonal: "პირადი ინფორმაცია",
                    cardTitleExperience: "გამოცდილება",
                    cardTitleEducation: "განათლება",
                    image: "სურათი",
                    imageError: "მიღებულია მხოლოდ (jpg, jpeg, png) ფორმატი!",
                    imageSuccess: "წარმატებით აიტვირთა!",
                    imageFailed: "წარუმატებელი ატვირთვა",
                    firstName: "სახელი",
                    firstNameErrorRequired: "სავალდებულო ველი",
                    firstNameErrorMinimum: "მინიმუმ 2 სიმბოლო",
                    firstNameErrorMaximum: "მაქსიმუმ 24 სიმბოლო",
                    lastName: "გვარი",
                    lastNameErrorRequired: "სავალდებულო ველი",
                    lastNameErrorMinimum: "მინიმუმ 2 სიმბოლო",
                    lastNameErrorMaximum: "მაქსიმუმ 24 სიმბოლო",
                    aboutMe: "ჩემს შესახებ",
                    prefix: "პრეფიქსი",
                    phoneNumber: "ტელეფონის ნომერი",
                    emailAddress: "ელექტრონული ფოსტა",
                    emailAddressError: "გთხოვთ შეიყვანეთ სწორი ელექტრონული ფოსტა",
                    address: "მისამართი",
                    zipCode: "საფოსტო კოდი",
                    cityTown: "ქალაქი/ქვეყანა",
                    additionalInformation: "დამატებითი ინფორმაცია",
                    dateOfBirth: "დაბადების თარიღი",
                    placeOfBirth: "დაბადების ადგილი",
                    nationality: "წარმომავლობა",
                    gender: "სქესი",
                    genderMale: "მამრობითი",
                    genderFemale: "მდედრობითი",
                    genderOther: "სხვა",
                    websiteName: "სოც. ქსელის სახელი",
                    websiteUrl: "სოც. ქსელის URL",
                    addSocial: "დაამატეთ სოც. ქსელი",
                    removeSocial: "წაშალეთ სოც. ქსელი",
                    skills: "უნარები",
                    skillsPlaceholder: "ჩაწერეთ და აირჩიეთ მონაცემები",
                    startDate: "დაწყების თარიღი",
                    endDate: "დასრულების თარიღი",
                    position: "პოზიცია",
                    company: "კომპანია",
                    aboutJob: "სამსახურის შესახებ",
                    addExperience: "დაამატეთ გამოცდილება",
                    removeExperience: "წაშალეთ გამოცდილება",
                    experienceNext: "შემდეგი",
                    experiencePrevious: "უკან",
                    submit: "დასტური",
                    languagesTitle: "ენები",
                    language: "ენა",
                    languageLevel: "დონე",
                    addLanguage: "დაამატე ენა",
                    removeLanguage: "წაშალე ენა",
                    educationTitle: "განათლება",
                    educationStartDate: "დაწყების თარიღი",
                    educationEndDate: "დასრულების თარიღი",
                    college: "სასწავლებელი",
                    degree: "ხარისხი",
                    addEducation: "დაამატე განათლება",
                    removeEducation: "წაშალე განათლება"
                },
                aside: {
                    home: "მთავარი",
                    templates: "შაბლონები"
                },
                footer: {
                    createdBy: "შექმნილია თორნიკე ეპიტაშვილის მიერ"
                }
            }
        }
    }
})