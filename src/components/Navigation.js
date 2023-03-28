import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";

function Navigation({ location }) {
  const dispatch = useDispatch();
  const { setCartIsVisible } = cartSlice.actions;
  const { cartIsVisible } = useSelector((store) => store.cart);

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
      {location === "header" && (
        <button
          className={styles.cartIcon}
          onClick={() => dispatch(setCartIsVisible(!cartIsVisible))}
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
