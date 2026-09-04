/*=============== MOBILE MENU TOGGLE ===============*/
const headerToggle = document.getElementById("header-toggle"),
  headerClose = document.getElementById("header-close"),
  headerNav = document.getElementById("header-nav");

const showMenu = () => headerNav.classList.add("show-menu");
const hideMenu = () => headerNav.classList.remove("show-menu");

if (headerToggle) headerToggle.addEventListener("click", showMenu);
if (headerClose) headerClose.addEventListener("click", hideMenu);

/* Close menu when a nav link is clicked (mobile) */
document.querySelectorAll(".header__link").forEach((link) => {
  link.addEventListener("click", hideMenu);
});

/*=============== HEADER BACKGROUND ON SCROLL ===============*/
const header = document.getElementById("header");

const scrollHeader = () => {
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", scrollHeader);

/*=============== ACTIVE NAV LINK ON SCROLL (SCROLL SPY) ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(`.header__link[href*="${sectionId}"]`);

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((el) => revealObserver.observe(el));

/*=============== COPY EMAIL BUTTON ===============*/
const contactEmailBtn = document.getElementById("contact-email");
const contactEmailText = document.getElementById("contact-email-text");

if (contactEmailBtn) {
  contactEmailBtn.addEventListener("click", () => {
    const email = contactEmailBtn.getAttribute("data-email");

    navigator.clipboard.writeText(email).then(() => {
      const original = contactEmailText.textContent;
      contactEmailText.textContent = "Copied to clipboard!";

      setTimeout(() => {
        contactEmailText.textContent = original;
      }, 2000);
    });
  });
}

/*=============== FOOTER YEAR ===============*/
const footerYear = document.getElementById("footer-year");
if (footerYear) footerYear.textContent = new Date().getFullYear();

/*=============== Mouse Animation ===============*/
const mouseFollower = document.querySelector(".mouse-follower");

document.addEventListener("mousemove", (event) => {
  mouseFollower.style.left = event.clientX + "px";
  mouseFollower.style.top = event.clientY + "px";
});
const interactiveElements = document.querySelectorAll("a, button");

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    mouseFollower.classList.add("active");
  });

  element.addEventListener("mouseleave", () => {
    mouseFollower.classList.remove("active");
  });
});
