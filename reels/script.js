async function initializeAcademy() {
    const grid = document.getElementById('reels-grid');
    if (!grid) return;

    const category = typeof currentCategory !== 'undefined' ? currentCategory : 'network';

    grid.innerHTML = `<p style="text-align:center; width:100%; color:#00bfa6; font-family:'Cairo';">جاري تحميل دروس ${category.toUpperCase()}...</p>`;

const hardCodedVideos = [
    // الفيديوهات الأربعة للشبكات
    { category: 'network', title: 'Devices', url: 'Videos/devices.mp4', poster: '' },
    { category: 'network', title: 'NIC Localhost', url: 'Videos/nic_localhost.mp4', poster: '' },
    { category: 'network', title: 'Router', url: 'Videos/Router.mp4', poster: '' },
    { category: 'network', title: 'TCP/IP', url: 'Videos/TCP_IP.mp4', poster: '' },
    
    // يمكنك إضافة الفيديوهات الأخرى التي كانت في الصورة سابقاً بنفس التنسيق
    { category: 'access', title: 'Macro', url: 'Videos/1.mp4', poster: '' },
    { category: 'access', title: 'Code Builder', url: 'Videos/2.mp4', poster: '' },
    { category: 'access', title: 'Access Course', url: 'Videos/3.mp4', poster: '' },
    { category: 'wordpress', title: 'Add content', url: 'Videos/add content to my website.mp4', poster: '' },
    { category: 'wordpress', title: 'Dashboard', url: 'Videos/dashboard.mp4', poster: '' },
    { category: 'wordpress', title: 'Themes & Plugin', url: 'Videos/themes & plugin.mp4', poster: '' }
,{ category: 'android', title: 'Android 1 & TextView', url: 'Videos/android1&textview.mp4', poster: '' },
{ category: 'android', title: 'Android 2', url: 'Videos/android2.mp4', poster: '' },
{ category: 'android', title: 'Android 3', url: 'Videos/android3.mp4', poster: '' },
{ category: 'android', title: 'Android 4', url: 'Videos/android4.mp4', poster: '' },
{ category: 'android', title: 'Android 5', url: 'Videos/android5.mp4', poster: '' },
{ category: 'android', title: 'Android 6', url: 'Videos/android6.mp4', poster: '' },
];

    // 3. جلب البيانات القديمة من الـ LocalStorage
    const localData = JSON.parse(localStorage.getItem('myAcademyVideos')) || [];

    // 4. دمج الاثنين مع بعض (القديم + الجديد)
    const allVideos = [...localData, ...hardCodedVideos];

    // 5. فلترة الفيديوهات: ناخد بس اللي تبع القسم ده
    const filteredVideos = allVideos.filter(video => video.category === category);

    grid.innerHTML = ''; // تفريغ الشبكة لبناء الكروت

    // لو مفيش فيديوهات للقسم ده
    if (filteredVideos.length === 0) {
        grid.innerHTML = `
            <div style="text-align:center; width:100%; padding: 50px; color:#666;">
                <i class="fas fa-video-slash" style="font-size: 40px; margin-bottom: 15px;"></i>
                <p>لا توجد فيديوهات مضافة في قسم ${category} حالياً.</p>
            </div>`;
        return;
    }

    // 6. رسم كروت الفيديوهات المفلترة
    filteredVideos.forEach((lesson, index) => {
        const videoId = `video-${index}`;
        const loaderId = `loader-${index}`;

        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="video-wrapper">
                <div class="video-loader" id="${loaderId}"></div>
                <video id="${videoId}" 
                       src="" 
                       poster="${lesson.poster || ''}"
                       controls 
                       playsinline 
                       preload="metadata" 
                       oncontextmenu="return false;"
                       controlsList="nodownload"
                       onloadedmetadata="handleVideoReady('${loaderId}', '${videoId}')">
                </video>
            </div>
            <div class="card-info">
                <h3>${lesson.title}</h3>
            </div>
        `;
        grid.appendChild(card);

        // تشفير الرابط وحمايته (Blob Masking)
        loadSecureVideo(lesson.url, videoId);
    });
}

/**
 * دالة تشفير الرابط لتحويله لـ Blob (حماية ضد التحميل المباشر)
 */
async function loadSecureVideo(rawUrl, videoElementId) {
    try {
        const response = await fetch(rawUrl);
        const blob = await response.blob();
        const secureUrl = URL.createObjectURL(blob);
        const videoElement = document.getElementById(videoElementId);
        if (videoElement) {
            videoElement.src = secureUrl;
        }
    } catch (err) {
        console.error("خطأ في تشفير الفيديو:", err);
    }
}

/**
 * إخفاء علامة التحميل وإظهار الفيديو بسلاسة
 */
function handleVideoReady(loaderId, videoId) {
    const loader = document.getElementById(loaderId);
    const video = document.getElementById(videoId);
    if (loader) loader.style.display = 'none';
    if (video) video.classList.add('loaded');
}

// تشغيل المحرك عند فتح الصفحة
document.addEventListener('DOMContentLoaded', initializeAcademy);