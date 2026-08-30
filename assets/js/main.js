/* ============================================================
   Renders the shared header + footer on every page, and wires up
   the mobile nav toggle. Each page just needs an empty
   <header id="site-header"></header> and <footer id="site-footer"></footer>.
   ============================================================ */

function currentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const active = currentPage();
  const links = NAV_LINKS.map(
    (l) =>
      `<a href="${l.href}"${l.href === active ? ' class="active"' : ""}>${l.label}</a>`
  ).join("");

  mount.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="brand">
        <span class="brand-mark">BT</span>
        <span>
          Baldwin Terney Consulting
          <small>Critical Infrastructure Managed Services Cybersecurity Advisory and Consulting</small>
        </span>
      </a>
      <nav class="main-nav" id="main-nav">${links}</nav>
      <div class="header-cta">
        <a class="btn btn-primary btn-sm" href="contact.html"><span class="long">Book a</span> Consult</a>
      </div>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">☰</button>
    </div>
  `;

  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;
  const year = "2026";
  mount.innerHTML = `
    <div class="footer-inner">
      <div>
        <div class="brand" style="margin-bottom:6px;">
          <span class="brand-mark">BT</span>
          <span>Baldwin Terney Consulting</span>
        </div>
        <p class="footer-note">&copy; ${year} Baldwin Terney Consulting LLC. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="mailto:${SITE_CONFIG.contactEmail}">${SITE_CONFIG.contactEmail}</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  document.querySelectorAll("[data-contact-email]").forEach((el) => {
    el.href = `mailto:${SITE_CONFIG.contactEmail}`;
    if (el.dataset.contactEmail === "text") el.textContent = SITE_CONFIG.contactEmail;
  });
  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.href = `tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`;
    if (el.dataset.phone === "text") el.textContent = SITE_CONFIG.phoneDisplay;
  });
  document.querySelectorAll("[data-linkedin]").forEach((el) => {
    el.href = SITE_CONFIG.linkedinUrl;
  });
});
