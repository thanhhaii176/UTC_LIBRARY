document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let fullname = document.getElementById("fullname").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let cccd = document.getElementById("cccd").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    if(fullname==""||dob==""||gender==""||cccd==""||phone==""||email==""||address==""){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Email không đúng định dạng");
        return;
    }
    if (cccd && !/^\d{12}$/.test(cccd)) {
        alert("CCCD không hợp lệ, vui lòng nhập lại");
        return;
    }
    if (phone && !/^0\d{9}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ, vui lòng nhập lại");
        return;
    }
    alert("Đăng ký thành công");
    window.location.href="../html/thanh_cong.html";


});