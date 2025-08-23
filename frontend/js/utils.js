// ✅ Toggle mobile menu open/close
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    const closeMenu = document.querySelector(".close-menu");

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        hamburger.style.display = "none";
        closeMenu.style.display = "block";
    } else {
        hamburger.style.display = "block";
        closeMenu.style.display = "none";
    }
}

// ✅ Change navbar background on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("header.navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // white bg apply
    } else {
        navbar.classList.remove("scrolled"); // back to transparent
    }
});
let menuHistory = [];

function openMenu() {
  document.getElementById("mobileMenu").classList.add("active");
  showMenu("menu-root", "Menu");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
  menuHistory = [];
}

function showMenu(id, title) {
  document.querySelectorAll(".menu-level").forEach(m => m.classList.remove("active"));
  document.getElementById("submenu-" + id) 
    ? document.getElementById("submenu-" + id).classList.add("active") 
    : document.querySelector(".menu-root").classList.add("active");

  document.getElementById("menuTitle").innerText = title;
}

function openSubmenu(name) {
  menuHistory.push(document.querySelector(".menu-level.active").id);
  showMenu(name, capitalize(name));
  document.getElementById("menuBack").style.display = "inline";
}

function goBack() {
  let last = menuHistory.pop();
  if (last) {
    document.querySelectorAll(".menu-level").forEach(m => m.classList.remove("active"));
    document.getElementById(last).classList.add("active");
    document.getElementById("menuTitle").innerText = last.replace("submenu-", "");
  } else {
    showMenu("menu-root", "Menu");
    document.getElementById("menuBack").style.display = "none";
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

