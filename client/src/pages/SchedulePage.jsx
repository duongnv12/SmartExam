// src/pages/SchedulePage.jsx
import React from "react";
import { Form, DatePicker, TimePicker, InputNumber, Button, Typography, Row, Col, message } from "antd";
import moment from "moment";

const { Title } = Typography;

const SchedulePage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Các giá trị nhận được:", values);
    message.success("Đã xếp lịch thi thành công!");
  };

  return (
    <div style={{ padding: 24, textAlign: "left" }}>
      <Title level={3} style={{ marginBottom: 24 }}>
        Tạo lịch thi tự động
      </Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          startExamDate: moment(),
          endExamDate: moment().add(1, "days"),
          startTime: moment("08:00", "HH:mm"),
          endTime: moment("17:00", "HH:mm"),
          invigilators: 2,
        }}
      >
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label="Ngày bắt đầu kỳ thi"
              name="startExamDate"
              rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu kỳ thi" }]}
            >
              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Ngày kết thúc kỳ thi"
              name="endExamDate"
              rules={[{ required: true, message: "Vui lòng chọn ngày kết thúc kỳ thi" }]}
            >
              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              label="Thời gian bắt đầu ca thi"
              name="startTime"
              rules={[{ required: true, message: "Vui lòng chọn thời gian bắt đầu ca thi" }]}
            >
              <TimePicker format="HH:mm" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              label="Thời gian kết thúc ca thi"
              name="endTime"
              rules={[{ required: true, message: "Vui lòng chọn thời gian kết thúc ca thi" }]}
            >
              <TimePicker format="HH:mm" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Số giám thị"
              name="invigilators"
              rules={[{ required: true, message: "Vui lòng nhập số giám thị" }]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 24 }}>
          <Col span={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Xếp lịch thi
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SchedulePage;
