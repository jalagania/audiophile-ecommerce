import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";
import { useEffect, useState } from "react";
import ThumbnailsSection from "./ThumbnailsSection";

function Navigation({ location }) {
  const dispatch = useDispatch();
  const { setCartIsVisible } = cartSlice.actions;
  const { cartIsVisible } = useSelector((store) => store.cart);

  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
    dispatch(setCartIsVisible(false));
  }

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "unset";
  }, [showMenu]);

  return (
    <nav>
      <button onClick={handleMenu}>
        <img
          src={
            process.env.PUBLIC_URL + "/assets/shared/tablet/icon-hamburger.svg"
          }
          alt="menu"
          className={styles.menuIcon}
        />
      </button>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/assets/shared/desktop/logo.svg"}
          alt="logo"
          className={styles.logo}
        />
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="headphones">Headphones</NavLink>
        </li>
        <li>
          <NavLink to="/speakers">Speakers</NavLink>
        </li>
        <li>
          <NavLink to="earphones">Earphones</NavLink>
        </li>
      </ul>
      {showMenu && (
        <div className={styles.menuModal}>
          <div className={styles.menuWrapper}>
            <ThumbnailsSection />
          </div>
          <div
            className={styles.modalBg}
            onClick={() => setShowMenu(false)}
          ></div>
        </div>
      )}
      {location === "header" && (
        <button
          className={styles.cartIcon}
          onClick={() => {
            dispatch(setCartIsVisible(!cartIsVisible));
            setShowMenu(false);
          }}
        >
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
