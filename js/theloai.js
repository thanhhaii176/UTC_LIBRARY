document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("pageSelect");
  if (select) {
    select.addEventListener("change", function () {
      if (this.value !== "#") {
        window.location.href = this.value;
      }
    });
  }
});




