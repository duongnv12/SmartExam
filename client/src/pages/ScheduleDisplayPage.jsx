// src/pages/ScheduleDisplayPage.jsx
import React from "react";
import { Tabs, Table, Calendar, Typography, Row, Col } from "antd";

const { Title } = Typography;
const { TabPane } = Tabs;

// Định nghĩa cột cho bảng lịch thi
const examColumns = [
  { title: "Môn học", dataIndex: "subject", key: "subject" },
  { title: "Ngày thi", dataIndex: "date", key: "date" },
  { title: "Phòng thi", dataIndex: "room", key: "room" },
];

// Định nghĩa cột cho bảng lịch trông thi
const invigilationColumns = [
  { title: "Môn học", dataIndex: "subject", key: "subject" },
  { title: "Ngày thi", dataIndex: "date", key: "date" },
  { title: "Phòng giám sát", dataIndex: "room", key: "room" },
];

// Dummy data cho lịch thi
const examData = [
  { key: 1, subject: "Toán học", date: "01/05/2025", room: "101" },
  { key: 2, subject: "Vật lý", date: "03/05/2025", room: "102" },
  { key: 3, subject: "Hóa học", date: "05/05/2025", room: "103" },
];

// Dummy data cho lịch trông thi
const invigilationData = [
  { key: 1, subject: "Toán học", date: "01/05/2025", room: "201" },
  { key: 2, subject: "Hóa học", date: "05/05/2025", room: "202" },
];

// Hàm custom để render nội dung sự kiện trong ô của Calendar
const customDateCellRender = (value, events) => {
  const formattedDate = value.format("DD/MM/YYYY");
  const dayEvents = events.filter((event) => event.date === formattedDate);
  return (
    <div>
      {dayEvents.map((event, index) => (
        <div
          key={index}
          style={{
            background: "#1890ff",
            color: "#fff",
            borderRadius: 2,
            padding: "2px 0",
            marginBottom: 2,
            fontSize: 10,
            textAlign: "center",
          }}
        >
          {event.subject}
        </div>
      ))}
    </div>
  );
};

const ScheduleDisplayPage = () => {
  // Map dữ liệu bảng sang dạng sự kiện cho Calendar
  const examEvents = examData.map(item => ({
    date: item.date,
    subject: item.subject,
  }));
  const invigilationEvents = invigilationData.map(item => ({
    date: item.date,
    subject: item.subject,
  }));

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24, background: "#fff", textAlign: "left" }}>
      <Title level={3}>Hiển thị lịch thi và lịch trông thi</Title>
      <Tabs defaultActiveKey="table">
        {/* Tab Bảng */}
        <TabPane tab="Bảng" key="table">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Title level={4}>Lịch thi</Title>
              <Table columns={examColumns} dataSource={examData} pagination={false} />
            </Col>
            <Col span={12}>
              <Title level={4}>Lịch trông thi</Title>
              <Table columns={invigilationColumns} dataSource={invigilationData} pagination={false} />
            </Col>
          </Row>
        </TabPane>
        {/* Tab Lịch */}
        <TabPane tab="Lịch" key="calendar">
          <Row gutter={16}>
            <Col span={12}>
              <Title level={4}>Lịch thi</Title>
              <Calendar 
                dateCellRender={(value) => customDateCellRender(value, examEvents)}
              />
            </Col>
            <Col span={12}>
              <Title level={4}>Lịch trông thi</Title>
              <Calendar 
                dateCellRender={(value) => customDateCellRender(value, invigilationEvents)}
              />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ScheduleDisplayPage;
