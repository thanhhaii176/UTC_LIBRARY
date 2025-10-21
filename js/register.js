// Khi trang đã tải xong
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Chặn reload trang

    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // 🟠 Kiểm tra dữ liệu trống
    if (!fullname || !username || !password || !confirmPassword) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // 🔴 Kiểm tra mật khẩu trùng khớp
    if (password !== confirmPassword) {
      alert("❌ Mật khẩu xác nhận không khớp!");
      return;
    }

    // 🟢 Lưu thông tin người dùng vào localStorage
    const userData = {
      fullname: fullname,
      username: username,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // 🟢 Thông báo và chuyển sang đăng nhập
    alert("✅ Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.");
    window.open("login.html", "_self");
  });
});
