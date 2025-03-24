// src/pages/ImportPage.jsx
import React, { useState } from "react";
import { Typography, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title, Paragraph } = Typography;

const ImportPage = () => {
  const [fileList, setFileList] = useState([]);
  const [importMessage, setImportMessage] = useState("");

  const uploadProps = {
    beforeUpload: (file) => {
      setFileList([file]); // Giữ lại duy nhất một file
      return false; // Ngăn upload tự động; xử lý bằng tay
    },
    fileList,
    onRemove: () => setFileList([]),
  };

  const handleUpload = async () => {
    if (fileList.length === 0) {
      message.error("Chưa chọn tệp.");
      return;
    }
    // Lấy file thực từ fileList
    const file = fileList[0].originFileObj ? fileList[0].originFileObj : fileList[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      // Thay '/api/upload' bằng endpoint tải lên thực tế nếu có
      await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      message.success("Tải lên thành công!");
      setImportMessage(`Tệp đã tải lên: ${file.name}`);
    } catch (error) {
      message.error("Lỗi khi tải lên tệp.");
    }
  };

  return (
    <div style={{ margin: "0 auto", padding: 24, textAlign: "left" }}>
      <Title level={3}>Nhập dữ liệu</Title>
      <Upload {...uploadProps}>
        <Button icon={<UploadOutlined />}>Chọn tệp CSV/XLSX</Button>
      </Upload>
      <Button type="primary" onClick={handleUpload} style={{ marginTop: 16 }}>
        Tải lên
      </Button>
      {importMessage && (
        <Paragraph style={{ color: "#1890ff" }}>
          {importMessage}
        </Paragraph>
      )}
    </div>
  );
};

export default ImportPage;
