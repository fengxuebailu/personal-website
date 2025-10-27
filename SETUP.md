# 快速开始指南

## 一、环境准备

### 系统要求
- **Node.js**: 18.17 或更高版本
- **npm**: 9.6.7 或更高版本（或 yarn、pnpm）
- **操作系统**: Windows / macOS / Linux

### 验证环境

```bash
# 检查Node.js版本
node --version

# 检查npm版本
npm --version
```

## 二、项目安装

### 1. 安装依赖

```bash
cd D:\Shortcut\new_file\claude
npm install
```

或使用 yarn：
```bash
yarn install
```

### 2. 环境配置

复制环境示例文件并创建本地环境配置：

```bash
cp .env.example .env.local
```

## 三、开发运行

### 启动开发服务器

```bash
npm run dev
```

或：
```bash
yarn dev
```

### 访问应用

打开浏览器访问：[http://localhost:3000](http://localhost:3000)

## 四、功能演示

### 登陆表单
1. **邮箱输入框**
   - 输入有效的邮箱地址
   - 示例：`user@example.com`

2. **密码输入框**
   - 输入至少6个字符的密码
   - 示例：`password123`

3. **记住我**
   - 勾选此选项将保存邮箱地址

4. **登陆按钮**
   - 点击提交表单
   - 显示加载动画
   - 验证成功后显示成功提示

### 表单验证

表单会自动验证以下规则：

| 字段 | 验证规则 | 错误提示 |
|------|---------|---------|
| 邮箱 | 必填，格式正确 | "请输入邮箱地址" / "请输入有效的邮箱地址" |
| 密码 | 必填，至少6个字符 | "请输入密码" / "密码至少需要6个字符" |

## 五、项目结构详解

```
├── app/
│   ├── api/                          # API路由
│   │   └── auth/                     # 认证相关API
│   │       ├── login/route.ts        # 登陆API
│   │       └── register/route.ts     # 注册API
│   ├── layout.tsx                    # 根布局组件
│   ├── page.tsx                      # 登陆主页
│   ├── page.module.css              # 页面样式
│   └── globals.css                  # 全局样式
├── components/
│   ├── LoginForm.tsx                # 登陆表单组件
│   └── LoginForm.module.css         # 表单样式
├── hooks/
│   └── useAuth.ts                   # 认证Hook
├── utils/
│   └── validation.ts                # 验证工具函数
├── public/
│   └── images/                      # 静态资源
├── package.json                     # 项目依赖
├── tsconfig.json                    # TypeScript配置
├── next.config.js                   # Next.js配置
└── README.md                        # 项目说明
```

## 六、关键文件说明

### `app/page.tsx` - 主页面
- 包含页面布局和问候信息
- 集成LoginForm组件
- 使用CSS Modules进行样式管理

### `components/LoginForm.tsx` - 登陆表单
- 表单输入和验证逻辑
- 加载状态管理
- 成功提示显示
- 表单错误提示

### `utils/validation.ts` - 验证工具
- `validateEmail()` - 邮箱验证
- `validatePassword()` - 密码验证
- `validateUsername()` - 用户名验证
- `validatePhone()` - 电话验证
- `checkPasswordStrength()` - 密码强度检查

### `hooks/useAuth.ts` - 认证Hook
- `login()` - 登陆逻辑
- `logout()` - 登出逻辑
- `register()` - 注册逻辑
- `getRememberedEmail()` - 获取保存的邮箱

## 七、构建和部署

### 本地构建

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

### 部署到Vercel

```bash
# 安装Vercel CLI
npm install -g vercel

# 部署
vercel
```

或直接连接GitHub仓库到Vercel进行自动部署。

## 八、自定义配置

### 修改颜色主题

编辑 `app/globals.css`：

```css
/* 更改主色 */
color: #FF6262; /* 改为其他颜色 */

/* 更改背景渐变 */
background: linear-gradient(180deg, rgba(31, 37, 81, 1) 0%, rgba(18, 11, 79, 1) 100%);
```

### 修改字体

在 `app/globals.css` 中修改Google Fonts import：

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

### 修改API端点

编辑 `.env.local`：

```
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

## 九、故障排除

### 端口被占用

如果3000端口被占用，可以指定其他端口：

```bash
npm run dev -- -p 3001
```

### 样式不显示

清除Next.js缓存：

```bash
rm -rf .next
npm run dev
```

### TypeScript错误

检查TypeScript编译：

```bash
npx tsc --noEmit
```

## 十、性能优化建议

1. **图片优化** - 使用Next.js Image组件
2. **代码分割** - 使用动态导入（dynamic import）
3. **缓存策略** - 配置HTTP缓存头
4. **CDN部署** - 使用Vercel或Cloudflare CDN
5. **监控** - 集成Web Analytics

## 十一、安全建议

1. **不要提交敏感信息** - 使用`.env.local`
2. **验证所有输入** - 服务端和客户端都要验证
3. **使用HTTPS** - 生产环境必须使用HTTPS
4. **设置CORS** - 配置合适的CORS策略
5. **密码加密** - 使用bcrypt等算法加密密码

## 十二、常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm start` | 启动生产服务器 |
| `npm run lint` | 运行代码检查 |

## 需要帮助？

- 查看 [Next.js 文档](https://nextjs.org/docs)
- 查看 [React 文档](https://react.dev)
- 查看 [TypeScript 文档](https://www.typescriptlang.org/docs/)

---

祝你开发愉快！🚀
