import { Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { useAppContext } from "../../../context/CVContext";
import { useTranslation } from "react-i18next";
const FormImage = () => {
  const { t } = useTranslation()
  const { setCroppedImg } = useAppContext();
  const beforeUpload = (file) => {
    const isImage =
      file.type.startsWith("image/") &&
      /\.(jpg|jpeg|png|gif)$/i.test(file.name);

    if (!isImage) {
      message.error(t('form.imageError'));
    }

    return isImage ? true : Upload.LIST_IGNORE;
  };

  const handleChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} ${t("form.imageSuccess")}`);

      // Create a new FileReader
      const reader = new FileReader();
      reader.onload = (event) => {
        compressImage(event.target.result);
      };
      reader.onerror = (error) => {
        console.error("FileReader error:", error);
      };

      // Read the uploaded image as data URL
      reader.readAsDataURL(info.file.originFileObj);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} ${t("form.imageFailed")}`);
    }
  };

  const compressImage = (base64String) => {
    const img = new Image();
    img.src = base64String;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const MAX_WIDTH = 300; // Adjust this according to your needs
      const scaleFactor = MAX_WIDTH / img.width;
      canvas.width = img.width * scaleFactor;
      canvas.height = img.height * scaleFactor;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const compressedBase64 = canvas.toDataURL("image/jpeg"); // Change format accordingly
      setCroppedImg(compressedBase64);
    };
  };

  const customRequest = ({ file, onSuccess, onError }) => {
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        onSuccess();
      };
      reader.readAsDataURL(file);
    } catch (error) {
      onError(error);
    }
  };

  return (
    <Form.Item
      label={`${t("form.image")}`}
      name="image"
      valuePropName="fileList"
      getValueFromEvent={(e) => e && e.fileList}
      style={{
        width: "100%",
        height: "95%",
        overflow: "hidden",
        position: "absolute",
      }}
    >
      <ImgCrop cropShape="round">
        <Upload
          listType="picture-card"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          customRequest={customRequest}
          showUploadList={{ showPreviewIcon: false }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              width: 24,
              height: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <UploadOutlined />
          </div>
        </Upload>
      </ImgCrop>
    </Form.Item>
  );
};

export default FormImage;
