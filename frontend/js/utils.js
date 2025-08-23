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



// Example: click చేస్తే Checkmark iconకి మారేలా
document.addEventListener('click', function(e){
  const btn = e.target.closest('.quick-btn');
  if(!btn) return;

  // ప్రస్తుతం ఉన్న PLUS-CART ని replace చేసి, CHECKMARK SVG inject చేస్తాం
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon-checkmark">
      <path d="M4.75439 10.7485L7.68601 14.5888C7.79288 14.7288 7.84632 14.7988 7.91174 14.8242C7.96907 14.8466 8.03262 14.8469 8.09022 14.8253C8.15596 14.8007 8.21026 14.7314 8.31886 14.5927L15.2475 5.74658"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>`;
});


