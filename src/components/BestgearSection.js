import styles from "./BestgearSection.module.css";

function BestgearSection() {
  let location = "desktop";
  if (window.innerWidth <= 768) {
    location = "tablet";
  }
  if (window.innerWidth <= 425) {
    location = "mobile";
  }

  return (
    <section className={styles.bestgearSection}>
      <div className={styles.bestgearText}>
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={
          process.env.PUBLIC_URL +
          `/assets/shared/${location}/image-best-gear.jpg`
        }
        alt="man with headphones"
      />
    </section>
  );
}

export default BestgearSection;
