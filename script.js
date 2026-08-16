// DevOps Dashboard — minimal client-side behavior.
// No backend, no API calls, no build step required.

document.addEventListener("DOMContentLoaded", () => {
  // Footer year, kept in sync automatically.
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Highlight the current nav section on scroll (progressive enhancement only).
  const sections = document.querySelectorAll("main section[id], main[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const matches = link.getAttribute("href") === `#${id}`;
            link.style.color = matches ? "var(--text)" : "";
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
