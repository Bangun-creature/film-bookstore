// Ambil hamburger tombol
const hamburger = document.querySelector("#hamburger");

// Ambil navbar-list
const navbarList = document.querySelector(".navbar-list");

// Ketika hamburger di klik
hamburger.addEventListener("click", function (event) {
  // Tambahkan class = "appear"
  //   toggle artinya :
  //   Jika sudah ada -> hapus || jika belum ada -> tambahkan
  navbarList.classList.toggle("appear");
  // Agar halaman tidak ke refresh
  event.preventDefault();
});

// Ketika di klik selain hamburger menu dan navbar list :
document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarList.contains(event.target)) {
    navbarList.classList.remove("appear");
  }
});

// Ambil aside
const aside = document.querySelector("aside");

// Tambahkan class slide ketika di klik
aside.addEventListener("click", function () {
  aside.classList.toggle("slide");
});

// Ketika di klik selain aside
document.addEventListener("click", function (event) {
  if (!aside.contains(event.target)) {
    aside.classList.remove("slide");
  }
});
