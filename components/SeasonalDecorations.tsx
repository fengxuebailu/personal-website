'use client';

import styles from './SeasonalDecorations.module.css';

export default function SeasonalDecorations() {
  return (
    <div className={styles.decorContainer}>
      {/* 轻雾效果层 */}
      <div className={styles.mistLayer}></div>

      {/* 背景装饰 - 大型枫叶和雪花 */}
      <div className={styles.backgroundElements}>
        {/* 大型枫叶 - 柔和旋转 */}
        <div className={styles.largeMaple + ' ' + styles.lgMaple1}>🍂</div>
        <div className={styles.largeMaple + ' ' + styles.lgMaple2}>🍂</div>
        <div className={styles.largeMaple + ' ' + styles.lgMaple3}>🍂</div>

        {/* 大型雪花 - 缓慢晶莹 */}
        <div className={styles.largeSnow + ' ' + styles.lgSnow1}>❄️</div>
        <div className={styles.largeSnow + ' ' + styles.lgSnow2}>❄️</div>
        <div className={styles.largeSnow + ' ' + styles.lgSnow3}>❄️</div>
      </div>

      {/* 飘落的枫叶装饰 - 8片 */}
      <div className={styles.mapleleaves}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={`maple-${i}`} className={styles.maple + ' ' + styles[`maple${i}`]}>🍂</div>
        ))}
      </div>

      {/* 飘落的雪花装饰 - 10片 */}
      <div className={styles.snowflakes}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={`snow-${i}`} className={styles.snowflake + ' ' + styles[`snow${i}`]}>❄️</div>
        ))}
      </div>

      {/* 柔光分割线 */}
      <div className={styles.glowDivider}></div>

      {/* 角落装饰 - 诗意文字 */}
      <div className={styles.cornerDecor + ' ' + styles.topLeftCorner}>
        <div className={styles.cornerText}>枫叶秋声</div>
      </div>
      <div className={styles.cornerDecor + ' ' + styles.topRightCorner}>
        <div className={styles.cornerText}>白露清晨</div>
      </div>
    </div>
  );
}
