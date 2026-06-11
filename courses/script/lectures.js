/* ==============================
HEADER TEMPLATE
============================== */
const headerTemplate = `
<header class="header" id="mainHeader">
  <div class="container header-inner">
    
    <a href="../../index.html"><h2>مـلـك تـرك</h2></a>

    <nav class="nav" id="navMenu">
      <a href="#learn">تعلم بصرياً</a>
      <a href="#challenges">تحديات برمجية</a>
      <a href="editor.html">ايديتور</a>
    </nav>

    <a href="start.html" class="btn-start">سلم التاسك</a>

    <div class="menu-btn" id="menuBtn">☰</div>
  </div>
</header>
`;

/* ==============================
SITE HEADER TEMPLATE
============================== */
const siteHeaderTemplate = `
<div class="site-header">
    <h1 id="pageTitle"></h1>
    <p class="site-subtitle" id="pageSubtitle"></p>
</div>
`;

/* ==============================
FOOTER TEMPLATE
============================== */
const footerTemplate = `
<footer class="footer">
  <div class="container footer-inner">
    &copy; Malak Tork 2026
  </div>
</footer>
`;

/* ==============================
DOM LOAD
============================== */
document.addEventListener("DOMContentLoaded", () => {

  insertHeader();
  insertSiteHeader();
  insertFooter();
  initHeaderFunctions();
  initSidebar();
  initActiveLinks();
  initAceEditors();
  initRunCode();
  initFileEditorSystem();

});


/* ==============================
INSERT HEADER
============================== */
function insertHeader() {
  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.innerHTML = headerTemplate;
  }
}

/* ==============================
INSERT SITE HEADER
============================== */
function insertSiteHeader() {
  const siteHeaderContainer = document.getElementById("siteHeader");
  if (siteHeaderContainer) {
    siteHeaderContainer.innerHTML = siteHeaderTemplate;

    const title = siteHeaderContainer.dataset.title;
    const subtitle = siteHeaderContainer.dataset.subtitle;

    const pageTitle = document.getElementById("pageTitle");
    const pageSubtitle = document.getElementById("pageSubtitle");

    if (pageTitle) pageTitle.textContent = title || "";
    if (pageSubtitle) pageSubtitle.textContent = subtitle || "";
  }
}

/* ==============================
INSERT FOOTER
============================== */
function insertFooter() {
  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    footerContainer.innerHTML = footerTemplate;
  }
}

/* ==============================
HEADER FUNCTIONS
============================== */
function initHeaderFunctions() {
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  const header = document.getElementById("mainHeader");

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });

  window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 50) {
      header.style.padding = "5px 0";
    } else {
      header.style.padding = "";
    }
  });
}

/* ==============================
SIDEBAR
============================== */
function initSidebar() {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.visual-nav');
  const content = document.querySelector('.content');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      if (content) content.classList.toggle('shifted');
    });
  }
}

/* ==============================
ACTIVE LINKS
============================== */
function initActiveLinks() {
  const navLinks = document.querySelectorAll('.visual-nav a');
  if (!navLinks.length) return;

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}


// ===================================
//    Content
//====================================
