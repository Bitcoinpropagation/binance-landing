# Binance 推广落地页

币安风格的注册下载推广网站，支持自动地区检测和多语言切换。

## 功能特点

- 🌍 **自动地区检测**: 根据用户 IP 自动判断是海外用户还是大陆用户
- 🔗 **智能跳转**: 海外用户跳转到 binance.com，大陆用户跳转到备用链接
- 🌐 **多语言支持**: 中英文一键切换
- 📱 **全平台下载**: iOS、Android、Windows、Mac 下载入口
- 🔐 **后台管理**: 独立 admin 面板，方便修改跳转链接
- 📊 **数据统计**: 首页展示平台数据（可自定义）
- 📱 **响应式设计**: 完美适配手机和电脑

## 文件结构

```
binance-landing/
├── index.html      # 主页面
├── admin.html      # 后台管理面板
├── styles.css      # 样式文件
├── app.js          # 主要逻辑
├── config.js       # 配置文件（链接、密码等）
└── README.md       # 说明文档
```

## 快速开始

### 1. 配置链接

编辑 `config.js` 文件，修改以下链接：

```javascript
links: {
    overseas: 'https://www.binance.com/join?ref=VIPBN',  // 海外用户链接
    mainland: 'https://www.bsmkweb.cc/join?ref=VIPBN'   // 大陆用户链接
}
```

### 2. 修改管理员密码

在 `config.js` 中修改：

```javascript
adminPassword: '你的新密码'
```

### 3. 部署到 GitHub Pages

#### 方法一：直接上传

1. 在 GitHub 创建新仓库（如 `binance-landing`）
2. 上传所有文件到仓库
3. 进入 Settings → Pages
4. Source 选择 "Deploy from a branch"
5. Branch 选择 "main"，文件夹选择 "/ (root)"
6. 保存后等待几分钟，访问 `https://你的用户名.github.io/binance-landing`

#### 方法二：使用 Git 命令

```bash
# 初始化仓库
git init
git add .
git commit -m "Initial commit"

# 关联远程仓库
git remote add origin https://github.com/你的用户名/binance-landing.git
git branch -M main
git push -u origin main
```

### 4. 访问后台管理

打开 `https://你的用户名.github.io/binance-landing/admin.html`

默认密码：`admin123`（请在 config.js 中修改）

## 自定义配置

### 修改链接

通过后台管理面板修改，或直接编辑 `config.js`：

```javascript
const CONFIG = {
    links: {
        overseas: '海外用户注册链接',
        mainland: '大陆用户注册链接'
    },
    downloads: {
        ios: 'iOS下载链接',
        android: 'Android下载链接',
        windows: 'Windows下载链接',
        mac: 'Mac下载链接'
    },
    adminPassword: '管理员密码',
    defaultLanguage: 'zh'  // 默认语言：zh 或 en
};
```

### 修改多语言文本

在 `config.js` 中找到 `I18N` 对象，添加或修改翻译：

```javascript
const I18N = {
    zh: { /* 中文 */ },
    en: { /* 英文 */ }
};
```

## 注意事项

1. **GitHub Pages 限制**: 免费版有流量限制，适合个人使用
2. **地区检测**: 使用 ipapi.co 免费服务，可能有请求限制
3. **静态网站**: 这是一个纯前端项目，没有后端服务器
4. **配置更新**: 修改 config.js 后需要重新部署才能生效

## 技术栈

- HTML5 + CSS3
- Vanilla JavaScript
- 无框架依赖

## License

MIT License
