'use client';

import styles from './ImageGallery.module.css';
import { useState } from 'react';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/images/frost-icicles.webp',
      alt: 'Frost and Icicles',
      title: '霜冻冰柱',
      description: '晶莹的冰柱在寒冷的光线下闪闪发光'
    },
    {
      src: '/images/snowflakes-frost.webp',
      alt: 'Snowflakes and Frost',
      title: '雪花与霜',
      description: '飘落的雪花与精致的霜花图案'
    },
    {
      src: '/images/frozen-forest.webp',
      alt: 'Frozen Forest',
      title: '冻结森林',
      description: '寒冷的冬日森林，枝条挂满冰霜'
    },
    {
      src: '/images/icicle-crystals.webp',
      alt: 'Icicle Crystals',
      title: '冰晶结构',
      description: '精致的冰晶微观世界，展现自然之美'
    }
  ];

  return (
    <div className={styles.gallery}>
      <div className={styles.header}>
        <h2 className={styles.title}>冬日冰冻美学</h2>
        <p className={styles.subtitle}>Winter Frozen Aesthetic Collection</p>
      </div>

      <div className={styles.grid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageCard}
            onClick={() => setSelectedImage(image.src)}
          >
            <div className={styles.imageContainer}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.overlayTitle}>{image.title}</h3>
                  <p className={styles.overlayDescription}>{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 图片预览模态框 */}
      {selectedImage && (
        <div
          className={styles.modal}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.modalContent}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className={styles.fullImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
