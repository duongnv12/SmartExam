// src/components/WeeklyCalendar.jsx
import React, { useState } from "react";
import { DatePicker, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import moment from "moment";

const { WeekPicker } = DatePicker;

const WeeklyCalendar = ({ events }) => {
  const [selectedWeek, setSelectedWeek] = useState(moment());

  const onWeekChange = (value) => {
    if (value) {
      // Đảm bảo chuyển đổi sang đối tượng moment
      setSelectedWeek(moment(value));
    }
  };

  const goToPreviousWeek = () => {
    setSelectedWeek((prev) => prev.clone().subtract(1, "weeks"));
  };

  const goToNextWeek = () => {
    setSelectedWeek((prev) => prev.clone().add(1, "weeks"));
  };

  // Tính ngày đầu tuần (ISO: thứ 2)
  const startOfWeek = selectedWeek.clone().isoWeekday(1);
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(startOfWeek.clone().add(i, "days"));
  }

  // Tạo mảng timeSlots: giả sử từ 08:00 đến 17:00 (mỗi giờ một hàng)
  const timeSlots = [];
  for (let hr = 8; hr <= 17; hr++) {
    timeSlots.push(moment({ hour: hr }).format("HH:mm"));
  }

  // Tạo mảng weeklyCoverage cho mỗi ngày (mỗi phần tử là một mảng có độ dài = số timeSlots)
  const weeklyCoverage = days.map((day) => {
    const coverage = Array(timeSlots.length).fill(null);
    const dayStr = day.format("DD/MM/YYYY");
    const dayEvents = events.filter((ev) => ev.date === dayStr);
    dayEvents.forEach((ev) => {
      const startIndex = timeSlots.indexOf(ev.startTime);
      if (startIndex !== -1) {
        // Giả định giờ bắt đầu và giờ kết thúc luôn là số nguyên (định dạng "HH:mm")
        const startHour = parseInt(ev.startTime.split(":")[0], 10);
        const endHour = parseInt(ev.endTime.split(":")[0], 10);
        const rowSpan = endHour - startHour; // Ví dụ: 10 - 8 = 2
        coverage[startIndex] = { event: ev, rowSpan };
        for (let i = startIndex + 1; i < startIndex + rowSpan; i++) {
          if (i < coverage.length) {
            coverage[i] = "skip";
          }
        }
      }
    });
    return coverage;
  });

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
        <Button icon={<LeftOutlined />} onClick={goToPreviousWeek} />
        <WeekPicker
          onChange={onWeekChange}
          value={selectedWeek}
          style={{ margin: "0 16px", flexGrow: 1 }}
        />
        <Button icon={<RightOutlined />} onClick={goToNextWeek} />
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #f0f0f0", padding: 8, background: "#fafafa" }}>
              Thời gian (GMT+7)
            </th>
            {days.map((day, index) => (
              <th key={index} style={{ border: "1px solid #f0f0f0", padding: 8, background: "#fafafa" }}>
                {day.format("ddd, DD/MM")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, slotIndex) => (
            <tr key={slotIndex}>
              <td style={{ border: "1px solid #f0f0f0", padding: 8 }}>{slot}</td>
              {days.map((day, dayIndex) => {
                const cell = weeklyCoverage[dayIndex][slotIndex];
                if (cell === "skip") {
                  return null; // Ô bị che bởi rowspan, không render
                } else if (cell && cell.event) {
                  return (
                    <td
                      key={dayIndex}
                      rowSpan={cell.rowSpan}
                      style={{ border: "1px solid #f0f0f0", padding: 8 }}
                    >
                      <div
                        style={{
                          background: "#1890ff",
                          color: "#fff",
                          borderRadius: 2,
                          padding: "2px 0",
                          fontSize: 10,
                          textAlign: "center",
                        }}
                      >
                        {cell.event.subject} ({cell.event.startTime} - {cell.event.endTime} GMT+7)
                      </div>
                    </td>
                  );
                } else {
                  return <td key={dayIndex} style={{ border: "1px solid #f0f0f0", padding: 8 }} />;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyCalendar;
