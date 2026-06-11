// ================= DATA =================
const courses = [
  {
    title: "استكشاف الإنترنت والمواقع",
    img: "../../img/html.png",
    link: "lect1.html",
    time: "10 دقائق",
    topics: "5 محاور",
    task: "تكليف واحد",
    goals: [
      "مقدمة عن الإنترنت وكيفية عمله",
      "فهم الموقع الإلكتروني ومكوناته",
      "الدومين والـ URL وهوية الموقع",
      "رحلة الموقع من الفكرة إلى التنفيذ",
      "أدوار مطوري المواقع Front-End / Back-End / Full-Stack"
    ]
  },
  {
    title: "الدخول إلى عالم HTML",
    img: "../../img/html.png",
    link: "lect2.html",
    time: "10 دقائق",
    topics: "5 محاور",
    task: "تكليف واحد",
    goals: [
      "اكتشاف HTML",
      "أدوات المطور الأساسية",
      "العناصر الأساسية في HTML"
    ]
  },
  {
    title: "اصنع أول صفحة ويب حقيقية بنفسك",
    img: "../../img/html.png",
    link: "lect3.html",
    time: "10 دقائق",
    topics: "5 محاور",
    task: "تكليف واحد",
    goals: [
      "أساسيات HTML والهيكل العام",
      "تنظيم الصفحة بين head و body",
      "إعداد الهيد وTitle وفكرة SEO"
    ]
  },
  {
    title: "بناء المحتوى النصي لصفحة الويب",
    img: "../../img/html.png",
    link: "lect4.html",
    time: "10 دقائق",
    topics: "5 محاور",
    task: "تكليف واحد",
    goals: [
      "إضافة نصوص للصفحة",
      "إضافة عناوين Hierarchy",
      "تنسيق النصوص",
      "تنظيم الكود بطريقة واضحة",
      "فواصل وأسطر باستخدام HR وBR"
    ]
  },
  {
    title: "تنظيم المحتوى: القوائم والجداول",
    img: "../../img/html.png",
    link: "lect5.html",
    time: "10 دقائق",
    topics: "5 محاور",
    task: "تكليف واحد",
    goals: [
      "تعلم القوائم وأنواعها",
      "إدراج الجداول وتنظيم البيانات"
    ]
  },
  {
    title: "الوسائط المتعددة: حياة لموقعك",
    img: "../../img/html.png",
    link: "lect6.html",
    time: "10 دقائق",
    topics: "5 محاور",
    task: "تكليف واحد",
    goals: [
      "إدراج الصور وتعديل خصائصها",
      "إدراج الفيديوهات وتشغيلها",
      "إدراج ملفات الصوت",
      "إدراج الإطارات iframe",
      "إدارة مسارات الملفات وتنظيم الوسائط"
    ]
  },
  {
    title: "بناء نماذج بسيطة في HTML",
    img: "../../img/html.png",
    link: "lect7.html",
    time: "10 دقائق",
    topics: "5 محاور",
    task: "تكليف واحد",
    goals: [
      "إنشاء نماذج تسجيل البيانات",
      "حقول النصوص والأزرار",
      "اختيارات وقوائم منسدلة",
      "أزرار الإرسال وإعادة التعيين"
    ]
  },
  {
    title: "بناء Layout احترافي",
    img: "../../img/html.png",
    link: "lect8.html",
    time: "10 دقائق",
    topics: "5 محاور",
    task: "تكليف واحد",
    goals: [
      "Header و Footer",
      "Nav و Main",
      "Section و Article",
      "تنظيم الهيكل العام للصفحة بطريقة احترافية"
    ]
  }
];
// ================= RENDER =================
function loadCourses() {
  const container = document.getElementById("courses");
  if (!container) return;

  let html = "";

  courses.forEach((course, index) => {
    // الترقيم التلقائي عند العرض
    const displayTitle = `${index + 1} | ${course.title}`;

    let goalsHTML = "";
    course.goals.forEach(goal => {
      goalsHTML += `
        <li>
          <input type="checkbox">
          ${goal}
        </li>
      `;
    });

    html += `
      <article class="hero-box">
        <div class="img">
          <img src="${course.img}" alt="HTML">
        </div>

        <div class="det">
          <h4>${displayTitle}</h4>

          <ul class="goals">
            ${goalsHTML}
          </ul>

          <p class="meta">
            ⏱ ${course.time} • 📌 ${course.topics} • 📝 ${course.task}
          </p>
        </div>

        <a href="${course.link}" class="action">
          <button>ابدأ التعلّم</button>
        </a>
      </article>
    `;
  });

  container.innerHTML = html;
}

// استدعاء الدالة عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", loadCourses);
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
INSERT FOOTER
============================== */
document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    footerContainer.innerHTML = footerTemplate;
  }
});

// ================= INIT =================

document.addEventListener("DOMContentLoaded", loadCourses);