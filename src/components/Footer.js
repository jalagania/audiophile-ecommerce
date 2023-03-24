import styles from "./Footer.module.css";
import Navigation from "./Navigation";

function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.line}></div>

        <Navigation location={"footer"} />
        <div className={styles.textWrapper}>
          <div className={styles.descriptionBox}>
            <p className={styles.description}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <ul className={styles.socialIcons}>
              <li>
                <button>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/shared/desktop/icon-facebook.svg"
                    }
                    alt="facebook"
                  />
                </button>
              </li>
              <li>
                <button>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/shared/desktop/icon-twitter.svg"
                    }
                    alt="twitter"
                  />
                </button>
              </li>
              <li>
                <button>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/shared/desktop/icon-instagram.svg"
                    }
                    alt="instagram"
                  />
                </button>
              </li>
            </ul>
          </div>
          <p className={styles.copyright}>
            Copyright 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
