// src/pages/StudentDashboardPage.jsx
import React from "react";
import { Layout, Typography, Button, Tabs, Table } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import WeeklyCalendar from "../components/WeeklyCalendar";

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { TabPane } = Tabs;

const studentData = [
  { key: 1, subject: "Toán học", date: "01/05/2025", room: "101", startTime: "08:00", endTime: "10:00" },
  { key: 2, subject: "Vật lý", date: "03/05/2025", room: "102", startTime: "10:00", endTime: "12:00" },
  { key: 3, subject: "Hóa học", date: "05/05/2025", room: "103", startTime: "14:00", endTime: "16:00" },
];

const studentEvents = studentData.map(item => ({
  date: item.date,
  subject: item.subject,
  startTime: item.startTime,
  endTime: item.endTime,
}));

const columns = [
  { title: "Môn học", dataIndex: "subject", key: "subject" },
  { title: "Ngày thi", dataIndex: "date", key: "date" },
  { title: "Phòng thi", dataIndex: "room", key: "room" },
  {
    title: "Giờ thi",
    dataIndex: "startTime",
    key: "time",
    render: (_, record) => `${record.startTime} - ${record.endTime} GMT+7`,
  },
];

const StudentDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Header style={{ background: "#fff", padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo SmartExam" style={{ height: 32, marginRight: 16, objectFit: "contain" }} />
          <Title level={4} style={{ margin: 0 }}>Lịch thi của tôi</Title>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text style={{ fontSize: 16, marginRight: 16 }}>Xin chào, sinh viên</Text>
          <Button type="primary" danger onClick={() => navigate("/login")}>
            Đăng xuất
          </Button>
        </div>
      </Header>
      <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
        <Tabs defaultActiveKey="table">
          <TabPane tab="Bảng" key="table">
            <Table columns={columns} dataSource={studentData} pagination={false} />
          </TabPane>
          <TabPane tab="Lịch tuần" key="week">
            <WeeklyCalendar events={studentEvents} />
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default StudentDashboardPage;
