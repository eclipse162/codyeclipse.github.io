(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // close menu when clicking a link (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
})();
