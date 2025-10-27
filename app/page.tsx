import styles from './page.module.css';
import SeasonalDecorations from '@/components/SeasonalDecorations';

export default function Home() {
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

      {/* 主内容区域 */}
      <main className={styles.main}>
        <div className={styles.container}>
          {/* 左侧：文本内容 */}
          <section className={styles.leftSection}>
            <div className={styles.nameElements}>
              <span className={styles.nameChar}>枫</span>
              <span className={styles.nameChar}>雪</span>
              <span className={styles.nameChar}>白</span>
              <span className={styles.nameChar}>露</span>
            </div>

            <h1 className={styles.mainTitle}>
              你好👋，
              <br />
              我是枫雪白露
            </h1>

            <p className={styles.tagline}>
              A brave climber in the boundless field of intelligence
            </p>

            <p className={styles.description}>
              怀揣无边的好奇与纯粹的探索力，徜徉于人工智能与设计的交汇处，用算法勾勒思维的形状，用创造回应未知的世界。
              <br />
              ——这句话来自 晨光Lumiere
            </p>
          </section>

          {/* 右侧：大标题背景 */}
          <section className={styles.rightSection}>
            <h2 className={styles.bgTitle}>枫雪白露</h2>
            <div className={styles.imageArea}>
              <img src="/1.png" alt="Hero - Male Portrait" className={styles.heroImage} />
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}
