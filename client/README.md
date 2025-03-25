# SmartExam React Client

SmartExam React Client là giao diện người dùng của hệ thống SmartExam, được xây dựng bằng React và Ant Design. Ứng dụng cung cấp các chức năng quản lý lịch thi cho nhiều vai trò khác nhau (Admin, Giảng viên, Sinh viên). Giao diện được thiết kế hiện đại, sử dụng phông chữ "Inter" (được import từ Google Fonts) và được dịch hoàn toàn sang tiếng Việt.

---

## Tính năng

- **Đăng nhập:**
  - Hỗ trợ đăng nhập với sẵn dữ liệu cho 3 vai trò:
    - **Admin:** username: `admin`, password: `password`
    - **Giảng viên:** username: `teacher`, password: `password`
    - **Sinh viên:** username: `student`, password: `password`
  - Logo của SmartExam được hiển thị phía trên form đăng nhập.

- **Dashboard cho Admin:**
  - Giao diện bao gồm Header (hiển thị "Phần mềm xếp lịch thi" ở bên trái, "Xin chào, admin" và nút "Đăng xuất" bên phải) và Sidebar điều hướng.
  - Các nội dung dành cho Admin (bảng điều khiển tổng quan, tạo lịch thi, nhập dữ liệu, tra cứu lịch thi) được nhúng vào Dashboard thông qua prop `children`.

- **Giao diện Tra cứu lịch thi (Search):**
  - Cho phép người dùng tìm kiếm lịch thi theo 3 tiêu chí: Môn học, Ngày thi và Phòng thi (sắp xếp trên 1 hàng).
  - Hiển thị kết quả tra cứu theo 2 dạng trong 3 tab: dạng bảng (Table), lịch tháng (Calendar) và lịch tuần (WeeklyCalendar).
  - Component WeeklyCalendar được tách riêng để hiển thị dạng lịch tuần, với 2 nút điều hướng tiến/lùi và hiển thị sự kiện kéo dài (với rowSpan) kèm thông tin thời gian (startTime - endTime GMT+7).

- **Giao diện dành cho Giảng viên và Sinh viên:**
  - Giao diện không có sidebar; Header hiển thị logo, tiêu đề và thông báo "Xin chào" kèm nút "Đăng xuất".
  - Nội dung chính sử dụng Tab để hiển thị lịch thi dưới dạng bảng và lịch tuần (sử dụng WeeklyCalendar).

- **Các giao diện phụ khác (SchedulePage, ImportPage):**
  - **SchedulePage:** Cho phép nhập các tham số để tạo lịch thi tự động (Ngày bắt đầu, Ngày kết thúc, Thời gian ca thi đầu tiên, Thời gian ca thi cuối cùng, Số giám thị).
  - **ImportPage:** Hỗ trợ upload file Excel/CSV để nhập dữ liệu.

---

## Cấu trúc thư mục

Dưới đây là sơ đồ cấu trúc thư mục của phần client:

```
SmartExam/
├── public/
│   ├── index.html           // HTML chính, bao gồm meta viewport và link phông chữ "Inter"
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── logo.png         // Logo của SmartExam
│   ├── components/
│   │   └── WeeklyCalendar.jsx   // Component hiển thị lịch tuần với nút lượt tuần
│   ├── pages/
│   │   ├── LoginPage.jsx         // Trang đăng nhập
│   │   ├── DashboardPage.jsx     // Giao diện dashboard cho Admin (nhúng children từ AppRouter)
│   │   ├── SchedulePage.jsx      // Trang tạo lịch thi tự động dành cho Admin
│   │   ├── ImportPage.jsx        // Trang nhập dữ liệu dành cho Admin
│   │   ├── SearchPage.jsx        // Trang tra cứu lịch thi (hiển thị dạng bảng, lịch tháng và lịch tuần)
│   │   ├── TeacherDashboardPage.jsx  // Giao diện dashboard dành cho Giảng viên (với Tab: bảng và lịch tuần)
│   │   └── StudentDashboardPage.jsx    // Giao diện dashboard dành cho Sinh viên (với Tab: bảng và lịch tuần)
│   ├── routes/
│   │   └── AppRouter.jsx         // Định tuyến chính của ứng dụng
│   ├── App.jsx                   // Thành phần gốc, gói AppRouter và ConfigProvider
│   ├── index.js                  // Điểm khởi đầu của ứng dụng React
│   └── reportWebVitals.js        // (Optional)
├── .eslintrc.js                  // Cấu hình ESLint
├── package.json                  // Quản lý dependencies và script
└── README.md                     // Hướng dẫn dự án (file này)
```

---

## Công nghệ sử dụng

- **React** – Thư viện xây dựng giao diện người dùng.
- **React Router Dom** – Quản lý định tuyến và điều hướng.
- **Ant Design (antd)** – Thư viện UI hiện đại, cung cấp các thành phần Layout, Form, Button, Table, Calendar, v.v.
- **Axios** – Xử lý các yêu cầu HTTP (ví dụ: upload file).
- **Moment** – Xử lý và định dạng ngày giờ.
- **Phông chữ Inter** – Được import từ Google Fonts giúp giao diện hiện đại và rõ ràng.

---

## Hướng dẫn cài đặt và chạy dự án

1. **Clone dự án:**

   ```bash
   git clone https://github.com/duongnv12/SmartExam.git
   cd SmartExam/client
   ```

2. **Cài đặt các phụ thuộc:**

   ```bash
   npm install
   ```

3. **Khởi động ứng dụng:**

   ```bash
   npm start
   ```

4. **Truy cập ứng dụng trên trình duyệt tại:**

   ```
   http://localhost:3000
   ```

---

## Các Route chính

- **/login:**  
  Trang đăng nhập với logo hiển thị phía trên form đăng nhập. Dữ liệu đăng nhập sẵn cho 3 vai trò: Admin, Giảng viên và Sinh viên.

- **Admin Routes:**  
  - **/home:** Giao diện dashboard tổng quan cho Admin (DashboardPage).
  - **/schedule:** Trang tạo lịch thi tự động (SchedulePage) được nhúng vào DashboardPage.
  - **/import:** Trang nhập dữ liệu (ImportPage) được nhúng vào DashboardPage.
  - **/search:** Trang tra cứu lịch thi (SearchPage) được nhúng vào DashboardPage, hiển thị kết quả dưới dạng bảng, lịch tháng và lịch tuần.

- **Teacher Route:**  
  **/teacher** – Giao diện dashboard dành cho Giảng viên (TeacherDashboardPage), hiển thị lịch thi dưới dạng bảng và lịch tuần.

- **Student Route:**  
  **/student** – Giao diện dashboard dành cho Sinh viên (StudentDashboardPage), hiển thị lịch thi dưới dạng bảng và lịch tuần.

---

## Tích hợp API

Hiện tại, phần dữ liệu sử dụng là dummy data để mô phỏng kết quả tìm kiếm, xếp lịch thi, nhập dữ liệu, …  
Khi API của server đã sẵn sàng, bạn cần cập nhật:
- **Xác thực đăng nhập**
- **Upload dữ liệu từ ImportPage**
- **Xếp lịch thi tự động từ SchedulePage**
- **Tra cứu lịch thi từ SearchPage**
- **Lịch thực tế cho Giảng viên và Sinh viên**

---

## Kết luận

Phần client của SmartExam React Client đã hoàn thiện với các giao diện đăng nhập, dashboard cho Admin, giảng viên và sinh viên, cùng với các chức năng tạo lịch thi, nhập dữ liệu và tra cứu lịch thi được xây dựng bằng Ant Design.  
Giao diện được thiết kế hiện đại, sử dụng phông chữ "Inter" và toàn bộ văn bản tiếng Việt, giúp dễ dàng tích hợp với API của server khi backend sẵn sàng.

Nếu có bất kỳ câu hỏi hay yêu cầu bổ sung nào, vui lòng liên hệ với nhóm phát triển. Chúc bạn thành công với dự án SmartExam!

---
