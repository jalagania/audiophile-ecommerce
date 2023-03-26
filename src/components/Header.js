import styles from "./Header.module.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className={styles.header}>
      <Navigation location={"header"} />
    </header>
  );
}

export default Header;
