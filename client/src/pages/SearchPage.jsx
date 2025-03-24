// src/pages/SearchPage.jsx
import React, { useState } from "react";
import { Tabs, Table, Calendar, Typography, Form, Input, DatePicker, Button, Row, Col, message } from "antd";
import WeeklyCalendar from "../components/WeeklyCalendar";

const { Title } = Typography;
const { TabPane } = Tabs;

const dummyData = [
  { key: 1, subject: "Toán học", date: "01/05/2025", room: "101", startTime: "08:00", endTime: "10:00" },
  { key: 2, subject: "Vật lý", date: "03/05/2025", room: "102", startTime: "10:00", endTime: "12:00" },
  { key: 3, subject: "Hóa học", date: "05/05/2025", room: "103", startTime: "14:00", endTime: "16:00" },
];

// Dữ liệu sự kiện được trích xuất từ dummyData
const examEvents = dummyData.map((item) => ({
  date: item.date,
  subject: item.subject,
  startTime: item.startTime,
  endTime: item.endTime,
}));

// Hàm render ô của Calendar cho chế độ tháng
const monthCellRender = (value) => {
  const formattedDate = value.format("DD/MM/YYYY");
  const dayEvents = examEvents.filter((ev) => ev.date === formattedDate);
  if (dayEvents.length > 0) {
    return (
      <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
        {dayEvents.map((ev, idx) => (
          <li
            key={idx}
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
            {ev.subject} ({ev.startTime} - {ev.endTime} GMT+7)
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

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

const SearchPage = () => {
  const [form] = Form.useForm();
  const [data] = useState(dummyData); // Không dùng setData nên chỉ khai báo data

  const onFinish = (values) => {
    console.log("Giá trị tìm kiếm:", values);
    message.success("Tìm kiếm thành công (giả lập)!");
    // Nếu có API, cập nhật state data ở đây
  };

  return (
    <div style={{ margin: "0 auto", padding: 24 }}>
      <Title level={3} style={{ textAlign: "left", marginBottom: 24 }}>
        Tra cứu lịch thi
      </Title>
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Môn học" name="subject">
              <Input placeholder="Nhập môn học" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Ngày thi" name="examDate">
              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Phòng thi" name="room">
              <Input placeholder="Nhập phòng thi" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Tìm kiếm
          </Button>
        </Form.Item>
      </Form>
      <Tabs defaultActiveKey="table">
        <TabPane tab="Bảng" key="table">
          <Table columns={columns} dataSource={data} pagination={false} />
        </TabPane>
        <TabPane tab="Lịch tháng" key="calendar">
          <Calendar dateCellRender={monthCellRender} />
        </TabPane>
        <TabPane tab="Lịch tuần" key="week">
          <WeeklyCalendar events={examEvents} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SearchPage;
