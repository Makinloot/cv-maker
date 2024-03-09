import { Button, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const FormImage = () => {
  const [imageUploaded, setImageUploaded] = useState(false); // New state variable

  const beforeUpload = (file) => {
    const isImage =
      file.type.startsWith("image/") &&
      /\.(jpg|jpeg|png|gif)$/i.test(file.name);

    if (!isImage) {
      message.error("You can only upload image files (jpg, jpeg, png, gif)!");
    }

    return isImage ? true : Upload.LIST_IGNORE;
  };

  const handleChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setImageUploaded(true);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    } else if (info.file.status === "removed") {
      // Check if there are any remaining files
      const remainingFiles = info.fileList.filter(
        (file) => file.status !== "removed"
      );

      if (remainingFiles.length === 0) {
        // No remaining files, reset imageUploaded to false
        setImageUploaded(false);
      }
    }
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
      label="Image"
      name="image"
      valuePropName="fileList"
      getValueFromEvent={(e) => e && e.fileList}
      rules={[
        {
          required: true,
          message: "Required field",
        },
      ]}
    >
      <Upload
        listType="picture"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={customRequest}
      >
        <Button icon={<UploadOutlined />} disabled={imageUploaded}>
          Upload Image
        </Button>
      </Upload>
    </Form.Item>
  );
};

export default FormImage;
