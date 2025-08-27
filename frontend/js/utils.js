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



  document.addEventListener("DOMContentLoaded", function() {
    // Only apply on mobile
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".footer-col").forEach(col => {
        // Create toggle button
        let btn = document.createElement("span");
        btn.classList.add("footer-toggle-btn");

        // Append button to h4
        let heading = col.querySelector("h4");
        heading.appendChild(btn);

        // Toggle show/hide
        btn.addEventListener("click", () => {
          col.classList.toggle("active");
        });
      });
    }
  });




   window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });





document.addEventListener("DOMContentLoaded", () => {
  const reviewsGrid = document.querySelector(".reviews-grid");

  // duplicate reviews for seamless loop
  reviewsGrid.innerHTML += reviewsGrid.innerHTML;

  // start animation
  reviewsGrid.classList.add("scrolling");
});



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reviews-row").forEach(row => {
    row.innerHTML += row.innerHTML; // duplicate reviews for seamless loop
    row.classList.add("scrolling"); // start scroll
  });
});



function toggleFilter(button, id) {
  const item = button.parentElement;
  item.classList.toggle("active");

  // Toggle icon text
  const icon = button.querySelector(".icon");
  if (item.classList.contains("active")) {
    icon.textContent = "−"; // minus when open
  } else {
    icon.textContent = "+"; // plus when closed
  }
}





function toggleDropdown() {
  const menu = document.getElementById("sortMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
document.addEventListener("click", function(e) {
  if (!e.target.closest(".custom-dropdown")) {
    document.getElementById("sortMenu").style.display = "none";
  }
});



function nextImage(button) {
  const thumb = button.closest(".thumb");
  const img = thumb.querySelector(".main-img");
  const images = JSON.parse(img.getAttribute("data-images"));

  let currentIndex = images.indexOf(img.getAttribute("src"));
  currentIndex = (currentIndex + 1) % images.length;
  img.setAttribute("src", images[currentIndex]);
}

function prevImage(button) {
  const thumb = button.closest(".thumb");
  const img = thumb.querySelector(".main-img");
  const images = JSON.parse(img.getAttribute("data-images"));

  let currentIndex = images.indexOf(img.getAttribute("src"));
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  img.setAttribute("src", images[currentIndex]);
}














function toggleFilter(button, id){
  button.parentElement.classList.toggle("active");
}

function toggleDropdown(){
  document.getElementById("sortMenu").classList.toggle("show");
}

function openFilter(){
  document.getElementById("mobileFilter").classList.add("active");
}

function closeFilter(){
  document.getElementById("mobileFilter").classList.remove("active");
}

function prevImage(btn){
  const img = btn.parentElement.querySelector(".main-img");
  let imgs = JSON.parse(img.getAttribute("data-images"));
  let current = imgs.indexOf(img.src.split(window.location.origin)[1]);
  img.src = imgs[(current - 1 + imgs.length) % imgs.length];
}

function nextImage(btn){
  const img = btn.parentElement.querySelector(".main-img");
  let imgs = JSON.parse(img.getAttribute("data-images"));
  let current = imgs.indexOf(img.src.split(window.location.origin)[1]);
  img.src = imgs[(current + 1) % imgs.length];
}

function toggleMore(btn) {
  const moreBox = btn.previousElementSibling;
  const textSpan = btn.querySelector(".text");
  const iconSpan = btn.querySelector(".icon");

  if (!moreBox.classList.contains("open")) {
    moreBox.classList.add("open");
    btn.classList.add("active");
    textSpan.textContent = "Show less";
    iconSpan.textContent = "▲";
  } else {
    moreBox.classList.remove("open");
    btn.classList.remove("active");
    textSpan.textContent = "Show more";
    iconSpan.textContent = "▼";
  }
}
