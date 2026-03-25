// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Animate skill bars when visible
        entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
      }
    });
  },
  { threshold: 0.3 },
);

reveals.forEach((el) => observer.observe(el));

// Also trigger skill bars if already in view on load
document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
  const rect = bar.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    setTimeout(() => (bar.style.width = bar.dataset.width + "%"), 400);
  }
});

// Smooth nav highlight (optional enhancement)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute("href") === "#" + current ? "var(--white)" : "";
  });
});


// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor-inner");

const isTouchDevice =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  window.matchMedia("(pointer: coarse)").matches;

if (isTouchDevice) {
  if (cursor) cursor.style.display = "none";
} else {
  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    if (cursor) {
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
    }

    if (cursorInner && cursor) {
      cursorInner.style.left = `${
        cursor.clientWidth / 2 + (mouseX - cursorX)
      }px`;
      cursorInner.style.top = `${
        cursor.clientHeight / 2 + (mouseY - cursorY)
      }px`;
    }

    requestAnimationFrame(animate);
  }

  animate();

  const interactiveElements = document.querySelectorAll(
    'a, button, input[type="submit"], [role="button"]',
  );

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (cursor) cursor.classList.add("hover");
      if (cursorInner) cursorInner.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      if (cursor) cursor.classList.remove("hover");
      if (cursorInner) cursorInner.classList.remove("hover");
    });
  });

  document.addEventListener("mousedown", () => {
    if (cursor) cursor.classList.add("click");
    if (cursorInner) cursorInner.classList.add("click");
  });
  document.addEventListener("mouseup", () => {
    if (cursor) cursor.classList.remove("click");
    if (cursorInner) cursorInner.classList.remove("click");
  });

  const textElements = document.querySelectorAll(
    'input[type="text"], textarea',
  );

  textElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (cursor) cursor.classList.add("text");
      if (cursorInner) cursorInner.classList.add("text");
    });
    el.addEventListener("mouseleave", () => {
      if (cursor) cursor.classList.remove("text");
      if (cursorInner) cursorInner.classList.remove("text");
    });
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact Form Handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    // Here you would typically send the form data to a server
    console.log("Form Data:", { name, email, message });

    // Show success message
    alert("Thank you for your message! I'll get back to you soon.");

    // Reset form
    contactForm.reset();
  });
}

// Explore my work button
const exploreBtn = document.querySelector(".buttons-shortcut button");
if (exploreBtn) {
  exploreBtn.addEventListener("click", function () {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}


const themeToggle = document.getElementById("changerColorTheme");
const currentImg = document.getElementById("currentThemeImg");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  currentImg.src = document.body.classList.contains("light-theme")
    ? "./assets/night-mode.png"
    : "./assets/light-mode (1).png";
});