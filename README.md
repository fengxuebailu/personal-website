# 登陆页面 - 个人作品集网站

基于Figma设计稿制作的Next.js 15登陆界面，采用现代化的视觉设计和交互体验。

## 功能特性

- ✨ **现代设计** - 仿照Figma设计稿的渐变背景和毛玻璃效果
- 🔐 **表单验证** - 完整的邮箱和密码验证
- 📱 **响应式设计** - 完美支持桌面、平板和移动设备
- ⚡ **优化性能** - 使用Next.js 15最新特性
- 🎨 **平滑动画** - 流畅的过渡和加载效果
- 🌙 **深色主题** - 专业的深色UI设计

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

### 登陆表单
- **邮箱验证** - 检查邮箱格式
- **密码验证** - 最少6个字符
- **记住我** - 可选的记住密码功能
- **加载状态** - 提交时显示加载动画
- **成功提示** - 登陆成功后显示确认信息

### 表单验证规则

| 字段 | 规则 |
|------|------|
| 邮箱 | 不能为空，必须是有效的邮箱格式 |
| 密码 | 不能为空，至少需要6个字符 |

## 设计灵感

该项目基于以下Figma设计稿：
- 文件: 个人网站/作品集/交互/portfolio/personal website
- 节点ID: 2-25
- 设计风格: 现代极简，深色主题，渐变背景

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

- [ ] 添加忘记密码功能
- [ ] 实现用户注册页面
- [ ] 集成实际的认证API
- [ ] 添加第三方登陆（GitHub、Google等）
- [ ] 实现记住密码功能
- [ ] 添加两步认证

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 许可证

MIT

## 作者

Created with ❤️ using Next.js 15
