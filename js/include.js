function includePart(file, targetId) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error('Không thể tải ' + file);
            return response.text();
        })
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
             if (targetId === "header-data") {
                highlightActiveMenu();
            }
        })
        .catch(error => {
            console.error('Lỗi include:', error);
        });
}
function highlightActiveMenu() {
  const page = window.location.pathname.split("/").pop().toLowerCase();

  setTimeout(() => {
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
      const href = (link.getAttribute("href") || "").split("/").pop().toLowerCase();
      const text = link.textContent.trim().toLowerCase();

  
      if (["borrow.html", "buy.html", "member.html", "dki.html", "thanh_cong.html"].includes(page)) {
        if (text.includes("dịch vụ")) link.classList.add("active");
        else link.classList.remove("active");
      }


      else if (["hdan.html", "question.html", "copyright.html"].includes(page)) {
        if (text.includes("hướng dẫn")) link.classList.add("active");
        else link.classList.remove("active");
      }
      else if (["theloai1_mua.html", "theloai2_mua.html", "theloai3_mua.html", "theloai4_mua.html"].includes(page)) {
        if (text.includes("mua sách")) link.classList.add("active");
        else link.classList.remove("active");
      }
    else if (["theloai1_muon.html", "theloai2_muon.html", "theloai3_muon.html", "theloai4_muon.html"].includes(page)) {
        if (text.includes("mượn sách")) link.classList.add("active");
        else link.classList.remove("active");
      }
      else if (["theloai1.html", "theloai2.html", "theloai3.html", "theloai4.html", "timkiem.html"].includes(page)) {
        if (text.includes("tài nguyên")) link.classList.add("active");
        else link.classList.remove("active");
      }

      else if (page === "" || page === "index.html") {
        if (text.includes("trang chủ") || href === "index.html") link.classList.add("active");
        else link.classList.remove("active");
      }

      else if (href === page) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, 150);
}

document.addEventListener('DOMContentLoaded', function() {
    includePart('../html/header.html', 'header-data');
    includePart('../html/footer.html', 'footer-data');
});

