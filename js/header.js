
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login");
  const registerBtn = document.querySelector(".register");


  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showLoginForm();
  });


  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showRegisterForm();
  });
});

function showLoginForm() {
  const formHTML = `
  <div class="popup">
    <div class="popup-box">
      <h2>Đăng nhập</h2>
      <input type="text" id="loginUser" placeholder="Tên đăng nhập">
      <input type="password" id="loginPass" placeholder="Mật khẩu">
      <button id="btnLogin">Đăng nhập</button>
      <p>Chưa có tài khoản? <a href="#" id="switchToReg">Đăng ký</a></p>
    </div>
  </div>`;
  showPopup(formHTML);
  addLoginHandlers();
}

function showRegisterForm() {
  const formHTML = `
  <div class="popup">
    <div class="popup-box">
      <h2>Đăng ký</h2>
      <input type="text" id="regUser" placeholder="Tên đăng nhập">
      <input type="password" id="regPass" placeholder="Mật khẩu">
      <input type="password" id="regConfirm" placeholder="Xác nhận mật khẩu">
      <button id="btnRegister">Đăng ký</button>
      <p>Đã có tài khoản? <a href="#" id="switchToLogin">Đăng nhập</a></p>
    </div>
  </div>`;
  showPopup(formHTML);
  addRegisterHandlers();
}

function showPopup(html) {
  const popup = document.createElement("div");
  popup.innerHTML = html;
  document.body.appendChild(popup);
  const box = popup.querySelector(".popup-box");
  popup.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
  box.style.cssText = `
    background: white;
    padding: 25px;
    border-radius: 12px;
    width: 300px;
    text-align: center;
  `;
  popup.addEventListener("click", e => {
    if (e.target === popup) popup.remove();
  });
}

function addLoginHandlers() {
  document.getElementById("switchToReg").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".popup").remove();
    showRegisterForm();
  };

  document.getElementById("btnLogin").onclick = function () {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    if (!user || !pass) return alert("Vui lòng nhập đủ thông tin!");
    const savedPass = localStorage.getItem("user_" + user);
    if (!savedPass) alert("Tài khoản không tồn tại!");
    else if (savedPass !== pass) alert("Sai mật khẩu!");
    else {
      alert("Đăng nhập thành công!");
      document.querySelector(".popup").remove();
    }
  };
}

function addRegisterHandlers() {
  document.getElementById("switchToLogin").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".popup").remove();
    showLoginForm();
  };

  document.getElementById("btnRegister").onclick = function () {
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();
    const confirm = document.getElementById("regConfirm").value.trim();

    if (!user || !pass || !confirm)
      return alert("Vui lòng điền đầy đủ thông tin!");
    if (pass !== confirm)
      return alert("Mật khẩu xác nhận không khớp!");

    localStorage.setItem("user_" + user, pass);
    alert("Đăng ký thành công!");
    document.querySelector(".popup").remove();
    showLoginForm();
  };
}
