document.getElementById("confirmBtn").addEventListener("click", function(e) {
    e.preventDefault();
    let fullname = document.getElementById("fullname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let method = document.getElementById("paymentMethod").value;
    if(fullname==""||phone==""||address==""||method==""){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (phone && !/^0\d{9}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ, vui lòng nhập lại");
        return;
    }
    if (!method) {
        alert("Vui lòng chọn phương thức thanh toán!");
        return;
      }
    if (method === "transfer"){
        window.location.href = "../html/transfer.html";
        }else if (method === "cod") {
        alert("Đặt hàng thành công! Bạn sẽ thanh toán khi nhận hàng.");
        window.location.href = "../html/success.html"; // có thể thay bằng trang cảm ơn
    }


});