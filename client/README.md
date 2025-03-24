```markdown
# SmartExam - Client

SmartExam là ứng dụng front-end được xây dựng bằng Vue.js cho hệ thống xếp lịch thi thông minh. Ứng dụng này tương tác với backend thông qua các API để thực hiện các chức năng như đăng nhập, nhập liệu (import file), tạo lịch thi tự động, và tra cứu lịch thi.

## Tổng Quan

SmartExam (Client) được tạo bằng **Vue CLI v5.0.8** với preset **Default ([Vue 3] babel, eslint)**. Dự án được thiết kế theo kiến trúc client-server, với phần front-end (client) chịu trách nhiệm hiển thị giao diện người dùng và gửi yêu cầu đến backend.

**Các tính năng chính:**
- **Đăng nhập và phân quyền:** Người dùng (Admin, Giảng viên và Sinh viên) đăng nhập và được phân quyền truy cập dashboard phù hợp.
- **Nhập dữ liệu:** Cho phép nhập (import) dữ liệu các đối tượng như phòng thi, thời gian thi, môn học, giảng viên, sinh viên thông qua file Excel/CSV.
- **Tạo lịch thi tự động:** Gửi yêu cầu đến backend dùng 5 tham số (ngày bắt đầu, ngày kết thúc, thời gian bắt đầu ca thi đầu, thời gian kết thúc ca thi cuối, số giám thị) để hệ thống hiện thị bảng lịch thi đã được xử lý.
- **Tra cứu lịch thi:** Tra cứu và hiển thị lịch thi theo tiêu chí tìm kiếm.

## Prerequisites

- **Node.js:** Phiên bản Node ≥ 14.x
- **npm:** Hoặc sử dụng Yarn
- **Vue CLI:** Cài đặt toàn cục với `npm install -g @vue/cli`

## Cài Đặt

1. **Clone Repository & Khởi Tạo Dự Án:**

    ```bash
    git clone <repo-url>
    cd SmartExam/client
    ```

2. **Cài đặt các dependencies:**

    ```bash
    npm install
    ```

## Chạy Ứng Dụng

Để chạy ứng dụng trên môi trường phát triển, sử dụng:

```bash
npm run serve
```

Ứng dụng sẽ chạy trên [http://localhost:8080](http://localhost:8080) và hỗ trợ hot module reloading.

## Build Ứng Dụng

Để build ứng dụng dùng cho production:

```bash
npm run build
```

Kết quả sẽ được tạo ra ở thư mục `dist`.

## Linting & Code Style

Để kiểm tra và tự động sửa lỗi định dạng:

```bash
npm run lint
```

## Cấu Hình Biến Môi Trường

Bạn có thể thay đổi các biến môi trường bằng cách tạo hoặc chỉnh sửa file `.env` tại thư mục gốc của dự án client. Ví dụ, cấu hình API endpoint:

```dotenv
VUE_APP_API_URL=http://localhost:3000/api
```

## Cấu Trúc Thư Mục

```
SmartExam/
└── client/
     ├── node_modules/
     ├── public/
     │   ├── index.html         # Trang HTML gốc
     │   └── favicon.ico
     ├── src/
     │   ├── assets/            # Tài nguyên tĩnh (hình ảnh, CSS, fonts,...)
     │   ├── components/        # Các component tái sử dụng (Header.vue, Footer.vue,...)
     │   ├── views/             # Các trang giao diện (LoginPage.vue, ImportPage.vue, SchedulePage.vue, SearchPage.vue,...)
     │   ├── router/            # Cấu hình định tuyến (router/index.js)
     │   ├── store/             # Vuex store (nếu sử dụng)
     │   ├── services/          # Các module gọi API tới backend (AuthService.js, ScheduleService.js,...)
     │   ├── App.vue            # Component cấp cao nhất
     │   └── main.js            # Entry point của ứng dụng
     ├── .env                   # Tập tin biến môi trường (ví dụ: VUE_APP_API_URL)
     ├── package.json           # File cấu hình dự án
     └── vue.config.js          # Cấu hình tùy chỉnh cho Vue CLI (nếu cần)
```

## Triển Khai

Do dự án sử dụng cấu trúc monorepo theo kiểu Client-Server, phần **client** sẽ được triển khai độc lập, gửi request đến backend thông qua API. Bạn có thể tích hợp với các công cụ CI/CD để cập nhật và build tự động.

## Contributing

Nếu bạn muốn đóng góp vào dự án, hãy fork repository, tạo pull request và đảm bảo tuân thủ các quy tắc về code, format và kiểm thử.

## License

Dự án SmartExam được cấp phép theo giấy phép MIT (hoặc ghi chú theo license của dự án).
```
