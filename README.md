# 枫雪白露 - 个人作品集网站

这是一个优雅的个人作品集网站，采用现代化的视觉设计和交互体验，展示产品设计师的专业形象。

## 功能特性

- ✨ **现代设计** - 深色主题配渐变背景和毛玻璃效果
- 🎨 **季节装饰** - 动态的枫叶和雪花动画效果
- 👤 **个人展示** - 专业的人物形象展示区域
- 📱 **响应式设计** - 完美支持桌面、平板和移动设备
- ⚡ **优化性能** - 使用Next.js 15最新特性
- 🌙 **深色主题** - 专业的深色UI设计
- 📄 **作品集** - 作品展示和博客页面

## 技术栈

- **Next.js 15** - React框架
- **React 19** - UI库
- **TypeScript** - 类型安全
- **CSS Modules** - 样式隔离
- **Google Fonts** - 自定义字体

## 安装与运行

### 前置要求
- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看结果。

### 生产构建

```bash
npm run build
npm start
# 或
yarn build
yarn start
```

## 项目结构

```
├── app/
│   ├── layout.tsx           # 根布局
│   ├── page.tsx            # 登陆页面
│   ├── page.module.css     # 页面样式
│   └── globals.css         # 全局样式
├── components/
│   ├── LoginForm.tsx       # 登陆表单组件
│   └── LoginForm.module.css # 表单样式
├── public/
│   └── images/             # 图片资源
├── package.json            # 项目依赖
├── tsconfig.json          # TypeScript配置
├── next.config.js         # Next.js配置
└── README.md              # 项目说明
```

## 功能说明

### 主页 (露台)
- **个人介绍** - 优雅的文字介绍和设计理念
- **人物展示** - 透明背景的专业人物形象
- **导航菜单** - 快速访问各个页面
- **下载按钮** - 下载简历与作品集

### 作品集 (枫语)
- **作品展示** - 展示个人设计作品
- **图片画廊** - 高质量的作品集展示

### 博客 (雪迹)
- **文章发布** - 分享设计心得和经验
- **阅读体验** - 优化的文章排版

## 在线访问

🌐 **访问地址：** [https://personal-website-six-sigma-75.vercel.app/](https://personal-website-six-sigma-75.vercel.app/)

项目已部署到Vercel，支持实时访问和自动部署更新。

## 自定义配置

### 修改颜色主题

编辑 `globals.css` 中的颜色变量：

```css
/* 主色 */
color: #FF6262; /* 红色主题 */

/* 背景渐变 */
background: linear-gradient(180deg, rgba(31, 37, 81, 1) 0%, rgba(18, 11, 79, 1) 100%);
```

### 修改字体

在 `globals.css` 中的 `@import` 部分修改Google Fonts：

```css
@import url('https://fonts.googleapis.com/css2?family=...display=swap');
```

## 扩展功能建议

- [ ] 添加联系表单功能
- [ ] 实现留言板功能
- [ ] 集成邮件通知功能
- [ ] 添加搜索功能
- [ ] 实现暗黑模式切换
- [ ] 添加社交媒体链接
- [ ] 实现访客统计
- [ ] 优化SEO和元标签

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 许可证

MIT

## 作者

枫雪白露 (fengxuebailu)

Created with ❤️ using Next.js 15

---

**更新日志：**
- 2025-10-27: 初始部署，更新README文档，部署到Vercel
