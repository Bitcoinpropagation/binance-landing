// 获取用户地区
async function getUserRegion() {
    try {
        // 尝试通过 IP 判断地区
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // 如果是中国，返回 mainland，否则返回 overseas
        if (data.country_code === 'CN') {
            return 'mainland';
        }
        return 'overseas';
    } catch (error) {
        console.log('无法获取地区信息，默认使用海外链接');
        return 'overseas';
    }
}

// 处理注册按钮点击
async function handleRegister() {
    const region = await getUserRegion();
    const link = CONFIG.links[region];
    window.open(link, '_blank');
}

// 处理下载按钮点击
function handleDownload(platform) {
    const link = CONFIG.downloads[platform] || CONFIG.downloads.android;
    window.open(link, '_blank');
}

// 语言切换
let currentLang = localStorage.getItem('lang') || CONFIG.defaultLanguage;

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    const texts = I18N[currentLang];
    const langBtn = document.getElementById('lang-text');
    
    if (langBtn) {
        langBtn.textContent = currentLang === 'zh' ? 'English' : '中文';
    }
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.textContent = texts[key];
        }
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage();
});
