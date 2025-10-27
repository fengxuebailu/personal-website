import styles from './page.module.css';
import SeasonalDecorations from '@/components/SeasonalDecorations';

interface Portfolio {
  id: number;
  title: string;
  description: string;
  year: string;
  image: string;
  tags?: string[];
}

const portfolios: Portfolio[] = [
  {
    id: 1,
    title: '"枫雪"移动端 5.0 - 极致设计体验',
    description: '产品设计与交互优化',
    year: '2024',
    image: '/images/portfolio-1.jpg',
    tags: ['UI/UX', '移动端', '产品设计']
  },
  {
    id: 2,
    title: '白露的个人作品集',
    description: '设计思维与创意表达',
    year: '2023',
    image: '/images/portfolio-2.jpg',
    tags: ['品牌', '视觉设计', '创意']
  },
  {
    id: 3,
    title: '枫叶季节品牌视觉设计',
    description: '季节性品牌海报与宣传物料',
    year: '2023',
    image: '/images/portfolio-3.jpg',
    tags: ['平面设计', '品牌', '海报']
  },
  {
    id: 4,
    title: '雪景冬日网站设计',
    description: '清爽简洁的电商平台设计',
    year: '2022',
    image: '/images/portfolio-4.jpg',
    tags: ['网站设计', '电商', 'Web']
  },
  {
    id: 5,
    title: '枫白交互设计系统',
    description: '完整的设计系统与组件库',
    year: '2022',
    image: '/images/portfolio-5.jpg',
    tags: ['设计系统', '组件库', 'UI']
  },
  {
    id: 6,
    title: '雪花元素创意包装',
    description: '产品包装设计与视觉延伸',
    year: '2021',
    image: '/images/portfolio-6.jpg',
    tags: ['包装设计', '创意', '品牌']
  }
];

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <SeasonalDecorations />
      {/* 导航栏 */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/" className={styles.navItem}>露台</a>
          <span className={styles.separator}>·</span>
          <a href="/portfolio" className={`${styles.navItem} ${styles.active}`}>枫语</a>
          <span className={styles.separator}>·</span>
          <a href="/blog" className={styles.navItem}>雪迹</a>
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

      {/* 主内容 */}
      <main className={styles.main}>
        {/* 分类导航 */}
        <div className={styles.categoriesSection}>
          <div className={styles.category + ' ' + styles.active}>系统性的作品集</div>
          <div className={styles.category}>日常的小练习</div>
        </div>

        {/* 作品网格 */}
        <section className={styles.portfolioGrid}>
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className={styles.portfolioCard}>
              {/* 作品图片 */}
              <div className={styles.portfolioImage}>
                <div className={styles.imagePlaceholder} style={{
                  background: `linear-gradient(135deg, hsl(${portfolio.id * 60}, 70%, 50%), hsl(${portfolio.id * 60 + 30}, 70%, 55%))`
                }}>
                  <div className={styles.imageOverlay}>
                    <span className={styles.viewBtn}>查看作品 →</span>
                  </div>
                </div>
              </div>

              {/* 作品信息 */}
              <div className={styles.portfolioInfo}>
                <h3 className={styles.portfolioTitle}>{portfolio.title}</h3>

                {/* 标签 */}
                {portfolio.tags && (
                  <div className={styles.tags}>
                    {portfolio.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}

                {/* 年份 */}
                <div className={styles.year}>{portfolio.year}</div>
              </div>
            </div>
          ))}
        </section>

        {/* 更多作品提示 */}
        <div className={styles.loadMoreSection}>
          <button className={styles.loadMoreBtn}>
            ✨ 加载更多作品 ✨
          </button>
          <p className={styles.loadMoreText}>
            🍂 枫叶与白雪见证了每一个创意的诞生 🌨️
          </p>
        </div>
      </main>

      {/* 页脚 */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 枫雪白露 · 个人作品集</p>
          <p>用设计点亮生活中的每一个时刻</p>
        </div>
      </footer>
    </div>
  );
}
