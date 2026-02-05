const API = "http://localhost:3000/users";
const loading = document.getElementById("loading");

var imageInput = document.getElementById("imageInput");
var preview = document.getElementById("preview");
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var saveBtn = document.getElementById("saveBtn");

var editId = null;
var imageBase64 = "";

/* ===================== LOAD IMAGE ===================== */

imageInput.addEventListener("change", function () {
  var file = imageInput.files[0];
  if (!file) return;

  var reader = new FileReader();

  reader.onload = function () {
    imageBase64 = reader.result;
    preview.src = imageBase64;
    preview.classList.remove("hidden");
  };

  reader.readAsDataURL(file);
});


/* ===================== CREATE & UPDATE ===================== */

saveBtn.addEventListener("click", function () {

  var user = {
    name: nameInput.value,
    age: ageInput.value,
    image: imageBase64
  };

  if (editId !== null) {

    fetch(API + "/" + editId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(function () {
      editId = null;
      loadUsers();
      resetForm();
    });

  } else {

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(function () {
      loadUsers();
      resetForm();
    });
  }

});


/* ===================== READ ===================== */

function loadUsers() {
     loading.classList.remove("hidden"); // HIỆN spinner
  fetch(API)
    .then(function (res) {
      return res.json();
    })
    
    .then(function (data) {
  setTimeout(function () {   // ⏳ giả lập chờ 1.5 giây

    var tbody = document.getElementById("userTable");
    var html = "";

    data.forEach(function (user) {
      html += `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td class="flex justify-center items-center">
            <img src="${user.image || 'https://via.placeholder.com/60'}" 
                 class="w-14 h-14 rounded-full object-cover border">
          </td>
          <td class="gap-2">
            <button 
              onclick="editUser('${user.id}')"
              class="px-3 py-1 border border-blue-500 text-blue-600 rounded-md
                     hover:bg-blue-500 hover:text-white transition">
              Sửa
            </button>

            <button 
              onclick="deleteUser('${user.id}')"
              class="px-3 py-1 border border-red-500 text-red-600 rounded-md
                     hover:bg-red-500 hover:text-white transition">
              Xóa
            </button>
          </td>
        </tr>
      `;
    });

    tbody.innerHTML = html;

  }, 1500); // 👈 đổi 1500 = 1.5s (test cho rõ spinner)
    })
        .finally(() => {
      loading.classList.add("hidden"); // ẨN spinner dù success hay error
    });
}

loadUsers();


/* ===================== DELETE ===================== */

function deleteUser(id) {

 
  fetch(API + "/" + id, {
    method: "DELETE"
  })
  .then(function () {
    loadUsers();
  });
}


/* ===================== EDIT ===================== */

function editUser(id) {
  fetch(API + "/" + id)
    .then(function (res) {
      return res.json();
    })
    .then(function (user) {

      editId = id;
      nameInput.value = user.name;
      ageInput.value = user.age;
      imageBase64 = user.image || "";

      if (user.image) {
        preview.src = user.image;
        preview.classList.remove("hidden");
      } else {
        preview.classList.add("hidden");
      }
    });
}


/* ===================== RESET ===================== */

function resetForm() {
  nameInput.value = "";
  ageInput.value = "";
  imageInput.value = "";
  preview.classList.add("hidden");
  imageBase64 = "";
}
