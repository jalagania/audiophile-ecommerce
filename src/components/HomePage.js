import styles from "./HomePage.module.css";
import ThumbnailsSection from "./ThumbnailsSection";
import BestgearSection from "./BestgearSection";
import { Link } from "react-router-dom";

function HomePage() {
  let location = "desktop";
  if (window.innerWidth <= 768) {
    location = "tablet";
  }
  if (window.innerWidth <= 425) {
    location = "mobile";
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.heroSection}>
        <div className={styles.heroSectionWrapper}>
          <div className={styles.heroText}>
            <h4>New product</h4>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="headphones/xx99-mark-two-headphones">See product</Link>
          </div>
        </div>
      </div>
      <main className={styles.container}>
        <div className={styles.mainWrapper}>
          <ThumbnailsSection />
          <section className={styles.productsSection}>
            <div className={styles.speakerOrange}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `./assets/home/${location}/image-speaker-zx9.png`
                }
                alt="speaker"
              />
              <div className={styles.textBox}>
                <h2>ZX9 speaker</h2>
                <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link to="speakers/zx9-speaker">See product</Link>
              </div>
            </div>
            <div className={styles.speakerGray}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `./assets/home/${location}/image-speaker-zx7.jpg`
                }
                alt="speaker"
              />
              <div className={styles.textBox}>
                <h3>ZX7 speaker</h3>
                <Link to="speakers/zx7-speaker">See product</Link>
              </div>
            </div>
            <div className={styles.earphoneImg}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `./assets/home/${location}/image-earphones-yx1.jpg`
                }
                alt="earphones"
              />
            </div>
            <div className={styles.earphoneText}>
              <h3>YX1 earphones</h3>
              <Link to="earphones/yx1-earphones">See product</Link>
            </div>
          </section>
          <BestgearSection />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
