import styles from "./HomePage.module.css";
import ThumbnailsSection from "./ThumbnailsSection";
import BestgearSection from "./BestgearSection";

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
            <button>See product</button>
          </div>
        </div>
      </div>
      <main className={styles.container}>
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
              <button>See product</button>
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
              <button>See product</button>
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
            <button>See product</button>
          </div>
        </section>
        <BestgearSection />
      </main>
    </div>
  );
}

export default HomePage;
