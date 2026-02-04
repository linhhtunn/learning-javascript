//Gửi yêu cầu HTTP GET tới API
fetch("https://jsonplaceholder.typicode.com/albums")

    .then(function(response){
        return response.json() // trả về dạng json 
    })
    .then(function(data){
        var tbody =document.getElementById("bodyTable") //Lấy phần tử theo id 
        var html ="" //một biến chuỗi rỗng dùng để chứa toàn bộ HTML sẽ chèn vào bảng.

        data.forEach (function(albums){ //Đây là vòng lặp, khá giống for, duyệt từng phần tử trong mảng
            //Lấy nội dung cũ + thêm nội dung mới vào sau
            html += ` 
            <tr>
                <td>${albums.id}</td>
                <td>${albums.userId}</td>
                <td>${albums.title}</td>
            </tr>
            `
        })
         tbody.innerHTML = html // thay đổi nội dung HTML 
    })

   
    .catch(function(error){
        console.error(error)
    })
    