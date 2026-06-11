// ===============================
// DATA
// ===============================

// Dev Courses
const devCourses = [
  {
    title: "HTML",
    img: "img/html.png",
    desc: "Learn the building blocks of the web and structure your first web pages like a pro.",
    link: "courses/HTML/list.html",
    btn: "Start Learning"
  },
  {
    title: "CSS",
    img: "img/css.png",
    desc: "Style your websites beautifully and make your pages visually appealing.",
    link: "#",
    btn: "Soon"
  },
  {
    title: "Python",
    img: "img/python.png",
    desc: "Start coding in Python and solve real problems with clean code.",
    link: "#",
    btn: "Soon"
  }
];

// Summary Courses
const summaryCourses = [
  {
    title: "Network",
    img: "img/network.png",
    desc: "Keep networks running smoothly, one connection at a time.",
    link: "reels/network.html",
    btn: "Start Learning"
  },
  {
    title: "WordPress",
    img: "img/wordpress.png",
    desc: "Build stunning websites easily with WordPress magic.",
    link: "reels/wordpress.html",
    btn: "Start Learning"
  }
   ,{
    title: "Access",
    img: "img/Access.png",
    desc: "Master data management and build powerful database applications effortlessly.",
    link: "reels/access.html",
    btn: "Start Learning"
  },
  {
    title: "Android",
    img: "img/wordpress.png",
    desc: "Build stunning websites easily with WordPress magic.",
    link: "reels/wordpress.html",
    btn: "Start Learning"
  }
];

// Thinking Blog
const thinkingPosts = [
  {
    situation: "I don’t understand this lesson.",
    wrong: "Programming is not for me. Everyone else understands faster.",
    right: "Confusion means my brain is building something new. I need time, not quitting."
  },
  {
    situation: "My code doesn’t work.",
    wrong: "I failed. I’m bad at coding.",
    right: "The code is showing me what I don’t understand yet. Debugging is learning."
  },
  {
    situation: "I learn slower than others.",
    wrong: "Speed means intelligence.",
    right: "Strong understanding matters more than speed. Depth builds confidence."
  }
];

// Mindset Map Nodes
const mindsetNodes = [
  { icon: "fa-brain", title: "Problem Solving", desc: "Think logically before coding" },
  { icon: "fa-repeat", title: "Consistency", desc: "Daily effort beats motivation" },
  { icon: "fa-code", title: "Learning by Doing", desc: "Practice builds mastery" },
  { icon: "fa-bug", title: "Debugging Mindset", desc: "Errors are lessons" },
  { icon: "fa-question", title: "Curiosity", desc: "Never stop asking why" },
  { icon: "fa-arrow-up-right-dots", title: "Self Improvement", desc: "Grow every single day" }
];

// ===============================
// TEMPLATES
// ===============================

// Course Card Template Updated
function courseCard(course) {
  // تحديد كلاس إضافي إذا كان الزر "Soon" لجعل شكله باهت قليلاً
  const isSoon = course.btn === "Soon" ? "style='opacity: 0.6; cursor: not-allowed; filter: grayscale(1);'" : "";
  
  return `
    <div class="hero-box">
      <div class="img">
        <img src="${course.img}" alt="${course.title}">
      </div>
      <h2>${course.title}</h2>
      <p>${course.desc}</p>
      <a href="${course.link}" style="text-decoration: none; ${course.btn === "Soon" ? "pointer-events: none;" : ""}">
        <button class="btn" ${isSoon}>${course.btn}</button>
      </a>
    </div>
  `;
}

// Thinking Blog Card
function thinkingCard(post) {
  return `
    <div class="think-card">
      <h3>🧠 Situation</h3>
      <p class="situation">${post.situation}</p>
      <div class="thinking wrong">
        <span>❌ Wrong Thinking</span>
        <p>${post.wrong}</p>
      </div>
      <div class="thinking right">
        <span>✅ Correct Thinking</span>
        <p>${post.right}</p>
      </div>
    </div>
  `;
}

// Mindset Node Card
function mindsetCard(node) {
  return `
    <div class="mind-node">
      <i class="fa-solid ${node.icon}"></i>
      <h3>${node.title}</h3>
      <p>${node.desc}</p>
    </div>
  `;
}

// ===============================
// RENDER FUNCTIONS
// ===============================

// Render Courses
function renderCourses(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  data.forEach(course => {
    container.insertAdjacentHTML("beforeend", courseCard(course));
  });
}

// Render Thinking Blog
function renderThinking(posts, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  posts.forEach(post => {
    container.insertAdjacentHTML("beforeend", thinkingCard(post));
  });
}

// Render Mindset Map
function renderMindset(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  data.forEach(node => {
    container.insertAdjacentHTML("beforeend", mindsetCard(node));
  });
}

// ===============================
// INIT
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  renderCourses(devCourses, "devCourses");
  renderCourses(summaryCourses, "summaryCourses");
  renderThinking(thinkingPosts, "thinkingBlog");
  renderMindset(mindsetNodes, "mindsetNodes");
});

const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-list');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        // إضافة أو حذف كلاس active لإظهار وإخفاء القائمة
        navLinks.classList.toggle('active');
        
        // تغيير شكل الأيقونة بين Bars و X
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
}

// إغلاق القائمة تلقائياً عند الضغط على أي لينك
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});