// src/pages/DashboardPage.jsx
import React from "react";
import { Layout, Menu, Typography, Button, List } from "antd";
import {
  DashboardOutlined,
  UploadOutlined,
  ScheduleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-white.png";


const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const DashboardPage = ({ children }) => {
  const navigate = useNavigate();

  // Dummy data cho các kỳ thi
  const exams = [
    { subject: "Toán học", date: "2025-05-01" },
    { subject: "Vật lý", date: "2025-05-03" },
    { subject: "Hóa học", date: "2025-05-05" },
  ];

  const menuItems = [
    { key: "/home", icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { key: "/import", icon: <UploadOutlined />, label: "Nhập dữ liệu" },
    { key: "/schedule", icon: <ScheduleOutlined />, label: "Tạo lịch thi" },
    { key: "/search", icon: <SearchOutlined />, label: "Tra cứu lịch thi" },
  ];

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  // Nội dung chính nếu không có children được truyền từ AppRouter
  const defaultContent = (
    <div>
      <Title level={3} style={{ marginTop: 5 }}>Các kỳ thi sắp tới</Title>
      <List
        itemLayout="horizontal"
        dataSource={exams}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.subject} description={item.date} />
          </List.Item>
        )}
      />
    </div>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider width={240} theme="dark">
        <div style={{ margin: "16px 0", textAlign: "center" }}>
          <img src={logo} alt="Logo SmartExam" style={{ height: 32, objectFit: "contain" }} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/home"]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        {/* Header */}
        <Header style={{ background: "#fff", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <Title level={4} style={{ margin: 0 }}>
              Phần mềm xếp lịch thi
            </Title>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text strong style={{ fontSize: 16, marginRight: 16 }}>
              Xin chào, admin
            </Text>
            <Button type="primary" danger onClick={() => navigate("/login")}>
              Đăng xuất
            </Button>
          </div>
        </Header>
        {/* Nội dung chính */}
        <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
          {children ? children : defaultContent}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
