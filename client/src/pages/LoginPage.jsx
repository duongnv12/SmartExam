// src/pages/LoginPage.jsx
import React from "react";
import { Form, Input, Button, Typography, Row, Col, message } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { username, password } = values;
    // Định nghĩa dữ liệu đăng nhập cho các vai trò
    if (username === "admin" && password === "password") {
      navigate("/home");
    } else if (username === "teacher" && password === "password") {
      navigate("/teacher");
    } else if (username === "student" && password === "password") {
      navigate("/student");
    } else {
      message.error("Tên đăng nhập hoặc mật khẩu không chính xác");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Col xs={22} sm={16} md={12} lg={8} xl={6}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <img src={logo} alt="Logo SmartExam" style={{ height: 70, objectFit: "contain" }} />
          </div>
        <div style={{ padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
            Đăng nhập
          </Title>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Tên đăng nhập"
              name="username"
              rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập" }]}
            >
              <Input placeholder="Nhập tên đăng nhập" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
