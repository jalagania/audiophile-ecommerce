import styles from "./CartModal.module.css";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import { cartSlice } from "../store/cartSlice";

function CartModal() {
  const dispatch = useDispatch();
  const { setCartIsVisible } = cartSlice.actions;

  return (
    <div className={styles.container}>
      <div className={styles.modalWrapper}>
        <Cart page="modal" />
      </div>
      <div
        className={styles.modalBg}
        onClick={() => dispatch(setCartIsVisible(false))}
      ></div>
    </div>
  );
}

export default CartModal;
