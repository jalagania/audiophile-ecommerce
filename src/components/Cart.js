import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSlice } from "../store/cartSlice";
import styles from "./Cart.module.css";

function Cart(props) {
  const dispatch = useDispatch();
  const { setCartIsVisible } = cartSlice.actions;
  const navigate = useNavigate();
  const modal = props.page === "modal";
  const title = modal ? "Cart" : "Summary";
  const buttonName = modal ? "Check Out" : "Continue & Pay";

  function handleCartButton() {
    if (modal) {
      navigate("checkout");
      dispatch(setCartIsVisible(false));
    }
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <p className={styles.cartTitle}>{title}</p>
        {modal && <button className={styles.btnRemove}>Remove All</button>}
      </div>
      <div className={styles.cartBody}>
        <img src="" alt="" />
        <div className={styles.itemInfo}>
          <p className={styles.itemName}>Name</p>
          <p className={styles.itemPrice}>$900</p>
        </div>
        {modal && (
          <div className={styles.amountButtons}>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        )}
        {!modal && <p className={styles.itemAmount}>x{}</p>}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.totalBox}>
          <p className={styles.totalText}>Total</p>
          <p className={styles.totalPrice}>$900</p>
        </div>
        {!modal && (
          <div className={styles.sumamryBox}>
            <div className={styles.shippingBox}>
              <p className={styles.shippingText}>Shipping</p>
              <p className={styles.shippingPrice}>$900</p>
            </div>
            <div className={styles.vatBox}>
              <p className={styles.vatText}>Vat(Included)</p>
              <p className={styles.vatPrice}>$900</p>
            </div>
            <div className={styles.grandTotalBox}>
              <p className={styles.grandTotalText}>Grand Total</p>
              <p className={styles.grandTotalPrice}>$900</p>
            </div>
          </div>
        )}
        <button className={styles.btnCheckout} onClick={handleCartButton}>
          {buttonName}
        </button>
      </div>
    </div>
  );
}

export default Cart;
