# Bài tập Tổng hợp: Xây dựng ứng dụng Quản lý người dùng (CRUD)

## 🎯 Mục tiêu
Xây dựng một ứng dụng web hoàn chỉnh để quản lý danh sách người dùng. Bài tập giúp bạn thành thạo kỹ năng thao tác với DOM, xử lý sự kiện, gọi API bằng Fetch và xử lý dữ liệu hình ảnh trong JavaScript.

## 🛠 Công nghệ sử dụng
- **Giao diện**: HTML5, Tailwind.
- **Logic**: Vanilla JavaScript (ES6+), Fetch API, Async/Await.
- **Mock API**: [JSON Server](https://github.com/typicode/json-server).
- **Lưu trữ ảnh**: 
    - Cách 1: Chuyển đổi ảnh sang chuỗi **Base64**.
    - Cách 2: Upload ảnh lên **Cloudinary** (Sử dụng Cloudinary Upload API).

## 📋 Yêu cầu tính năng (CRUD)

### 1. Xem danh sách (Read)
- Lấy dữ liệu từ endpoint `http://localhost:3000/users`.
- Hiển thị danh sách người dùng dưới dạng **Table** hoặc các **Card** đẹp mắt.
- Mỗi item hiển thị đầy đủ: Ảnh đại diện, Tên, Tuổi.

### 2. Thêm người dùng mới (Create)
- Thiết kế một Form nhập liệu gồm:
    - Input Text: Tên người dùng.
    - Input Number: Tuổi.
    - Input File: Chọn ảnh đại diện (Preview ảnh trước khi upload).
- Xử lý lưu trữ ảnh:
    - Nếu dùng Base64: Sử dụng `FileReader` để đọc file.
    - Nếu dùng Cloudinary: Gọi API upload của Cloudinary để lấy URL.
- Gửi request **POST** để lưu vào `db.json`.

### 3. Cập nhật thông tin (Update)
- Khi nhấn nút "Sửa" (Edit), đổ dữ liệu của người dùng đó vào form.
- Cho phép thay đổi thông tin và ảnh.
- Gửi request **PUT** hoặc **PATCH** để cập nhật dữ liệu.

### 4. Xóa người dùng (Delete)
- Khi nhấn nút "Xóa", hiển thị thông báo xác nhận (Confirm).
- Gửi request **DELETE** để xóa người dùng khỏi hệ thống.

### 5. Tiện ích bổ sung (Bonus)
- **Tìm kiếm**: Tìm kiếm người dùng theo tên ngay khi đang gõ (Debounce).
- **Sắp xếp**: Sắp xếp danh sách theo tuổi tăng dần hoặc giảm dần.
- **Loading**: Hiển thị spinner/loading khi đang chờ API phản hồi.

---

## 🏗 Cấu trúc dữ liệu mẫu (`db.json`)
```json
{
  "users": [
    {
      "id": "1",
      "name": "Nguyễn Văn A",
      "age": 20,
      "image": "https://res.cloudinary.com/demo/image/upload/v123456/sample.jpg"
    },
    {
      "id": "2",
      "name": "Trần Thị B",
      "age": 22,
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSU..."
    }
  ]
}
```

## 🚀 Hướng dẫn bắt đầu
1. Khởi tạo project: Tạo thư mục project và các file `index.html`, `style.css`, `main.js`.
2. Tạo file `db.json` với cấu trúc như trên.
3. Chạy Server: `npx json-server --watch db.json --port 3000`.
4. Viết code JavaScript để fetch dữ liệu và render ra màn hình.
