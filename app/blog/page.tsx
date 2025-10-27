import styles from './page.module.css';
import SeasonalDecorations from '@/components/SeasonalDecorations';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '枫叶设计系统：打造一致的品牌视觉',
    excerpt: '在设计过程中，保持视觉一致性至关重要。本文探讨如何建立一个完整的设计系统，确保每个设计元素都能完美协作。',
    date: '2024-10-20',
    category: '设计系统',
    readTime: '5 min',
    tags: ['设计', '系统', '品牌']
  },
  {
    id: 2,
    title: '白露时节的交互设计思考',
    excerpt: '季节交替时，自然界给了我们许多设计灵感。让我们一起探索如何将自然元素融入数字产品设计。',
    date: '2024-10-15',
    category: '交互设计',
    readTime: '8 min',
    tags: ['交互', '用户体验', '自然灵感']
  },
  {
    id: 3,
    title: '雪花元素在UI中的应用',
    excerpt: '从几何美学到用户体验，雪花元素如何成为现代设计中的经典象征。',
    date: '2024-10-10',
    category: 'UI设计',
    readTime: '6 min',
    tags: ['UI', '视觉设计', '元素应用']
  },
  {
    id: 4,
    title: '如何进行有效的设计评审',
    excerpt: '好的设计评审能够推动团队进步。分享我的设计评审经验和最佳实践。',
    date: '2024-10-05',
    category: '工作流程',
    readTime: '7 min',
    tags: ['评审', '团队协作', '反馈']
  },
  {
    id: 5,
    title: '色彩心理学在产品设计中的运用',
    excerpt: '不同的颜色能够引发不同的情感反应。深入探讨如何科学地选择色彩方案。',
    date: '2024-09-28',
    category: '设计原理',
    readTime: '9 min',
    tags: ['色彩', '心理学', '产品设计']
  },
  {
    id: 6,
    title: '响应式设计：从概念到实现',
    excerpt: '在移动端优先的时代，响应式设计已经成为必须掌握的技能。',
    date: '2024-09-20',
    category: '网页设计',
    readTime: '10 min',
    tags: ['响应式', '网页', '移动端']
  }
];

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <SeasonalDecorations />
      {/* 导航栏 */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/" className={styles.navItem}>露台</a>
          <span className={styles.separator}>·</span>
          <a href="/portfolio" className={styles.navItem}>枫语</a>
          <span className={styles.separator}>·</span>
          <a href="/blog" className={`${styles.navItem} ${styles.active}`}>雪迹</a>
          <span className={styles.separator}>·</span>
          <a href="#" className={styles.navItem}>风来信</a>
        </nav>
        <a href="#" className={styles.downloadBtn}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2V20M16 20L10 14M16 20L22 14M4 26H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          下载简历与作品集
        </a>
      </header>

      {/* 页面标题 */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>设计思考</h1>
        <p className={styles.pageSubtitle}>记录设计的每一个灵感时刻</p>
      </div>

      {/* 主内容 */}
      <main className={styles.main}>
        {/* 分类筛选 */}
        <div className={styles.filterSection}>
          <button className={styles.filterBtn + ' ' + styles.active}>全部</button>
          <button className={styles.filterBtn}>设计系统</button>
          <button className={styles.filterBtn}>交互设计</button>
          <button className={styles.filterBtn}>UI设计</button>
          <button className={styles.filterBtn}>设计原理</button>
        </div>

        {/* 博客列表 */}
        <section className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              {/* 类别标签 */}
              <div className={styles.categoryBadge}>{post.category}</div>

              {/* 标题 */}
              <h2 className={styles.blogTitle}>{post.title}</h2>

              {/* 摘要 */}
              <p className={styles.blogExcerpt}>{post.excerpt}</p>

              {/* 标签 */}
              <div className={styles.tagsContainer}>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>{tag}</span>
                ))}
              </div>

              {/* 元数据 */}
              <div className={styles.blogMeta}>
                <time className={styles.date}>
                  📅 {new Date(post.date).toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  })}
                </time>
                <span className={styles.readTime}>⏱️ {post.readTime}</span>
                <a href="#" className={styles.readMore}>阅读全文 →</a>
              </div>
            </article>
          ))}
        </section>

        {/* 加载更多 */}
        <div className={styles.loadMoreSection}>
          <button className={styles.loadMoreBtn}>📖 加载更多文章 📖</button>
        </div>
      </main>

      {/* 页脚 */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 枫雪白露 · 设计与思考</p>
          <p>每一篇文章都是一个设计的故事</p>
        </div>
      </footer>
    </div>
  );
}
