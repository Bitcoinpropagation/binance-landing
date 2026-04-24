// 获取用户地区 - 使用多个备选服务
async function getUserRegion() {
    // 首先尝试从时区判断（最可靠，不依赖网络）
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === 'Asia/Shanghai' || timezone === 'Asia/Hong_Kong' || timezone === 'Asia/Taipei') {
        return 'mainland';
    }
    
    // 其次尝试从语言判断
    const lang = navigator.language || navigator.userLanguage;
    if (lang === 'zh-CN') {
        return 'mainland';
    }
    
    // 最后尝试 IP 检测
    try {
        const response = await fetch('https://ipapi.co/json/', { timeout: 3000 });
        const data = await response.json();
        if (data.country_code === 'CN') {
            return 'mainland';
        }
    } catch (error) {
        console.log('IP检测失败，使用时区/语言判断结果');
    }
    
    return 'overseas';
}

// 处理注册按钮点击
async function handleRegister() {
    const region = await getUserRegion();
    const link = CONFIG.links[region];
    window.open(link, '_blank');
}

// 处理下载按钮点击
async function handleDownload(platform) {
    // 如果没有指定平台，根据地区跳转到对应的下载链接
    if (!platform) {
        const region = cachedRegion || await getUserRegion();
        // 国内用户使用国内下载链接，海外用户使用海外下载链接
        const link = region === 'mainland' ? 'https://www.bsmkweb.cc/en/download' : 'https://www.binance.com/en/download';
        window.open(link, '_blank');
        return;
    }
    const link = CONFIG.downloads[platform] || CONFIG.downloads.android;
    window.open(link, '_blank');
}

// 页面加载时预检测地区（提前获取，点击时更快）
let cachedRegion = null;
getUserRegion().then(region => {
    cachedRegion = region;
    console.log('Detected region:', region);
});

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
