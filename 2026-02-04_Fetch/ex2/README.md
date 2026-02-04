## Bài 2: Hiển thị Ảnh Card (List Card)

**Yêu cầu:** 
1. Sử dụng Fetch API để lấy dữ liệu từ: `https://jsonplaceholder.typicode.com/photos`
2. Lấy ra **3 item đầu tiên** trong mảng kết quả (`data.slice(0, 3)`).
3. Render ra danh sách các thẻ "Card" có cấu trúc:
   - Ảnh thumbnail (`thumbnailUrl`)
   - Tiêu đề (`title`)
4. Thiết kế giao diện Card hiện đại (Bo góc, đổ bóng, layout tương tự hình ảnh đính kèm).

### HTML Mẫu
```html
<div class="container">
    <h2>Bộ sưu tập Photos</h2>
    <div id="photoList" class="photo-grid">
        <!-- Card sẽ được render ở đây -->
    </div>
</div>
```
