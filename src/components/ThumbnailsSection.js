import styles from "./ThumbnailsSection.module.css";

function ThumbnailsSection() {
  return (
    <section className={styles.thumbnailsSection}>
      <div className={styles.thumbnailBox}>
        <img
          src={
            process.env.PUBLIC_URL +
            "./assets/shared/desktop/image-category-thumbnail-headphones.png"
          }
          alt="product thumbnail"
        />
        <p className={styles.thumbnailText}>Headphones</p>
        <button className={styles.btnThumbnailShop}>
          <span>Shop</span>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={styles.thumbnailBox}>
        <img
          src={
            process.env.PUBLIC_URL +
            "./assets/shared/desktop/image-category-thumbnail-speakers.png"
          }
          alt="product thumbnail"
        />
        <p className={styles.thumbnailText}>Speakers</p>
        <button className={styles.btnThumbnailShop}>
          <span>Shop</span>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={styles.thumbnailBox}>
        <img
          src={
            process.env.PUBLIC_URL +
            "./assets/shared/desktop/image-category-thumbnail-earphones.png"
          }
          alt="product thumbnail"
        />
        <p className={styles.thumbnailText}>Earphones</p>
        <button className={styles.btnThumbnailShop}>
          <span>Shop</span>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ThumbnailsSection;
