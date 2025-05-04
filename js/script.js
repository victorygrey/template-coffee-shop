// Toggle class active Hamburger
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu di klik
const hamburgerMenu = document.querySelector("#hamburger-menu");
if (hamburgerMenu) {
  hamburgerMenu.onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
  };
}

// Toggle class active Search Form
const searchButton = document.querySelector("#search-button");
if (searchButton) {
  searchButton.onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
  };
}
const shoppingCartButton = document.querySelector("#shopping-cart");
if (shoppingCartButton) {
  shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
  };
}
// Toggle class active Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
}

// Modal Box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

const closeIcon = document.querySelector(".modal .close-icon");
if (closeIcon) {
  closeIcon.onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  };
}
});

// klik tombol close

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
}