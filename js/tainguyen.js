// Lấy tất cả nav1
const navs = document.querySelectorAll('.nav1');

navs.forEach(nav => {
  const conten = nav.querySelector('.conten1');       // scroll container
  const btnLeft = nav.querySelector('.cuon.left');    // nút trái
  const btnRight = nav.querySelector('.cuon.right');  // nút phải
  const items = conten.querySelectorAll('.item');     // tất cả item trong conten1

  if (items.length > 0) {
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);

    btnRight.addEventListener('click', () => {
      conten.scrollLeft += itemWidth * 4; // cuộn 4 quyển 1 lần
    });

    btnLeft.addEventListener('click', () => {
      conten.scrollLeft -= itemWidth * 4; // cuộn ngược 4 quyển
    });
  }
});
// Lấy tất cả nav2
const nav2s = document.querySelectorAll('.nav2');

nav2s.forEach(nav => {
  const conten = nav.querySelector('.conten2');       // scroll container
  const btnLeft = nav.querySelector('.cuon.left');    // nút trái
  const btnRight = nav.querySelector('.cuon.right');  // nút phải
  const items = conten.querySelectorAll('.item1');    // tất cả item1 trong conten2

  if (items.length > 0) {
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);

    btnRight.addEventListener('click', () => {
      conten.scrollLeft += itemWidth * 3; // cuộn 1 "item1" 1 lần, hoặc thay số tuỳ ý
    });

    btnLeft.addEventListener('click', () => {
      conten.scrollLeft -= itemWidth * 3; // cuộn ngược
    });
  }
});









