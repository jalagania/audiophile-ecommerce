import styles from "./Navigation.module.css";

function Navigation({ location }) {
  return (
    <nav>
      <img
        src={
          process.env.PUBLIC_URL + "/assets/shared/tablet/icon-hamburger.svg"
        }
        alt="menu"
        className={styles.menuIcon}
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/shared/desktop/logo.svg"}
        alt="logo"
        className={styles.logo}
      />
      <ul className={styles.navLinks}>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Headphones</button>
        </li>
        <li>
          <button>Speakers</button>
        </li>
        <li>
          <button>Earphones</button>
        </li>
      </ul>
      {location === "header" && (
        <button className={styles.cartIcon}>
          <img
            src={
              process.env.PUBLIC_URL + "/assets/shared/desktop/icon-cart.svg"
            }
            alt="cart"
          />
        </button>
      )}
    </nav>
  );
}

export default Navigation;
