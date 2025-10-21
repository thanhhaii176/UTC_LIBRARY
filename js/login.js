document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("⚠️ Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu!");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("❌ Chưa có tài khoản nào được đăng ký!");
      return;
    }

    if (username === savedUser.username && password === savedUser.password) {
      alert(`✅ Đăng nhập thành công! Xin chào, ${savedUser.fullname}`);
      localStorage.setItem("loggedInUser", savedUser.fullname);
      window.open("index.html", "_self");
    } else {
      alert("❌ Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });
});
