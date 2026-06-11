// المحرك الذكي v2.1 - مالك ترك
let files = {
    "index.html": `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مشروعك الجديد</title>
</head>
<body>
    <div class="content">
        <h1>Never Give UP </h1>
        <p>Malak Tork Support You</p>
    </div>
</body>
</html>`,
    "style.css": `body { 
    background: #eef0ef; 
    color: #2cbb97; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    font-family: sans-serif; 
}
.content {
    border: 2px solid #2cbb97;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 20px #2cbb97;
}`,
    "script.js": `console.log("النظام يعمل بكفاءة..");`
};

let currentFile = "index.html";
let editor;

window.onload = () => {
    // 1. تعريف المحرر وربطه بالعنصر الذي يحمل id="editor"
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/vibrant_ink");
    editor.setOptions({
        fontSize: "16px",
        enableLiveAutocompletion: true,
        showPrintMargin: false,
        wrap: true
    });

    // 2. إجبار المحرر على عرض الكود الافتراضي فور التحميل
    editor.setValue(files["index.html"], -1);
    editor.session.setMode("ace/mode/html");

    // 3. مراقبة التغييرات في الكود لتحديث الذاكرة
    editor.session.on('change', () => {
        files[currentFile] = editor.getValue();
    });

    // 4. تشغيل العرض المباشر (Preview) فوراً
    runCode();
};

function switchFile(name, btn) {
    if (!editor) return;

    // حفظ الكود الحالي قبل الانتقال للملف الآخر
    files[currentFile] = editor.getValue();
    currentFile = name;

    // تحديث شكل التبويبات (Tabs)
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    if (btn) {
        btn.classList.add('active');
    } else {
        // محاولة إيجاد الزر بناءً على الاسم إذا لم يتم تمريره
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(t => {
            if(t.innerText.toLowerCase() === name.toLowerCase()) t.classList.add('active');
        });
    }

    // تغيير وضع المحرر (Syntax Highlighting)
    let mode = name.split('.').pop();
    if (mode === 'js') mode = 'javascript';
    editor.session.setMode(`ace/mode/${mode}`);

    // عرض محتوى الملف المختار
    editor.setValue(files[name], -1);
}

function runCode() {
    const frame = document.getElementById('preview');
    if (!frame) return;

    let html = files['index.html'];
    const styleTag = `<style>body{margin:0;} ${files['style.css']}</style>`;
    const scriptTag = `<script>${files['script.js']}<\/script>`;

    // دمج الـ CSS والـ JS داخل الـ HTML المكتوب
    if (html.includes('</head>')) {
        html = html.replace('</head>', `${styleTag}</head>`);
    } else {
        html = styleTag + html;
    }

    if (html.includes('</body>')) {
        html = html.replace('</body>', `${scriptTag}</body>`);
    } else {
        html = html + scriptTag;
    }
    
    // تحديث محتوى الـ Iframe
    const doc = frame.contentDocument || frame.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type.startsWith('image/')) {
        const blobUrl = URL.createObjectURL(file);
        const imgTag = `\n<img src="${blobUrl}" alt="uploaded image" style="max-width:100%; border-radius:10px;">\n`;
        editor.insert(imgTag);
        runCode();
    } else {
        const reader = new FileReader();
        reader.onload = (e) => {
            const name = file.name;
            files[name] = e.target.result;
            addNewTab(name);
            switchFile(name);
        };
        reader.readAsText(file);
    }
}

function addNewTab(name) {
    const tabs = document.getElementById('tabs-container');
    if (!tabs) return;

    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.innerText = name.toUpperCase();
    btn.onclick = (e) => switchFile(name, e.target);
    tabs.appendChild(btn);
}


