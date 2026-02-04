## Bài 1: Hiển thị danh sách Album (Table)

**Yêu cầu:** 
1. Sử dụng Fetch API để lấy dữ liệu từ: `https://jsonplaceholder.typicode.com/albums`
2. Sử dụng `document.getElementById` để truy cập vào thẻ `<tbody>` của một bảng HTML.
3. Sử dụng `innerHTML` (hoặc `appendChild`) để duyệt qua mảng dữ liệu và chèn các dòng (`<tr>`) tương ứng với: `ID`, `User ID`, và `Title`.

### HTML Mẫu
```html
<div class="container">
    <h2>Danh sách Albums</h2>
    <table id="albumTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Tiêu đề Album</th>
            </tr>
        </thead>
        <tbody id="albumBody">
            <!-- Dữ liệu sẽ được render ở đây -->
        </tbody>
    </table>
</div>
```

### Script Gợi ý
```javascript
fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(data => {
      const albumBody = document.getElementById('albumBody');
      let html = '';
      
      data.forEach(album => {
          html += `
             <tr>
                <td>${album.id}</td>
                <td>${album.userId}</td>
                <td>${album.title}</td>
             </tr>
          `;
      });
      
      albumBody.innerHTML = html;
  })
  .catch(error => console.error('Lỗi:', error));
```

---