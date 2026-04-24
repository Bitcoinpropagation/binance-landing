// 配置文件 - 可以通过 admin 面板修改
const CONFIG = {
    // 注册链接配置
    links: {
        // 海外用户链接
        overseas: 'https://www.binance.com/join?ref=VIPBN',
        // 大陆用户链接
        mainland: 'https://www.bsmkweb.cc/join?ref=VIPBN'
    },
    
    // 下载链接配置
    downloads: {
        ios: 'https://www.binance.com/en/download',
        android: 'https://www.binance.com/en/download',
        windows: 'https://www.binance.com/en/download',
        mac: 'https://www.binance.com/en/download'
    },
    
    // 后台管理密码 (建议修改)
    adminPassword: 'admin123',
    
    // 默认语言
    defaultLanguage: 'zh'
};

// 多语言配置
const I18N = {
    zh: {
        features: '功能',
        download: '下载',
        support: '支持',
        login: '登录',
        register: '注册',
        hero_title: '全球领先的数字资产交易平台',
        hero_subtitle: '安全、快捷、专业的加密货币交易服务',
        start_now: '立即开始',
        download_now: '立即下载',
        countries: '国家/地区',
        users: '注册用户',
        cryptos: '加密货币',
        why_binance: '为什么选择 Binance',
        security: '安全可靠',
        security_desc: '多重安全机制，保障您的资产安全',
        fast: '极速交易',
        fast_desc: '毫秒级撮合引擎，交易无延迟',
        low_fees: '低手续费',
        low_fees_desc: '行业最低交易费率，BNB额外折扣',
        multi_platform: '多平台支持',
        multi_platform_desc: '随时随地，多端同步交易',

        footer_text: '© 2024 Binance. 全球领先的数字资产交易平台'
    },
    en: {
        features: 'Features',
        download: 'Download',
        support: 'Support',
        login: 'Log In',
        register: 'Register',
        hero_title: 'The World\'s Leading Digital Asset Trading Platform',
        hero_subtitle: 'Secure, fast, and professional cryptocurrency trading services',
        start_now: 'Get Started',
        download_now: 'Download Now',
        countries: 'Countries/Regions',
        users: 'Registered Users',
        cryptos: 'Cryptocurrencies',
        why_binance: 'Why Binance',
        security: 'Secure & Safe',
        security_desc: 'Multiple security mechanisms to protect your assets',
        fast: 'Lightning Fast',
        fast_desc: 'Millisecond matching engine, zero trading delays',
        low_fees: 'Low Fees',
        low_fees_desc: 'Industry-lowest trading fees, extra BNB discounts',
        multi_platform: 'Multi-Platform',
        multi_platform_desc: 'Trade anytime, anywhere, across all devices',

        footer_text: '© 2024 Binance. The World\'s Leading Digital Asset Trading Platform'
    }
};
