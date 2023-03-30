import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSlice } from "../store/cartSlice";
import { confirmationSlice } from "../store/confirmationSlice";
import styles from "./Cart.module.css";

function Cart(props) {
  const dispatch = useDispatch();
  const {
    setCartIsVisible,
    clearCart,
    decreaseItemAmount,
    increaseItemAmount,
  } = cartSlice.actions;
  const { setConfirmationIsVisible } = confirmationSlice.actions;
  const { cartItems } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const modal = props.page === "modal";
  const title = modal ? "Cart" : "Summary";
  const buttonName = modal ? "Check Out" : "Continue & Pay";
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );
  const vatCost = (totalCost * 20) / 100;
  const grandTotal = totalCost + 50;

  function handleCartButton() {
    if (modal) {
      navigate("checkout");
      dispatch(setCartIsVisible(false));
    } else {
      dispatch(setConfirmationIsVisible(true));
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <p className={styles.cartTitle}>
          {title} {modal && `(${cartItems.length})`}
        </p>
        <div className={styles.cartEmpty}>
          <p>Cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <p className={styles.cartTitle}>
          {title} {modal && `(${cartItems.length})`}
        </p>
        {modal && (
          <button
            className={styles.btnRemove}
            onClick={() => dispatch(clearCart())}
          >
            Remove All
          </button>
        )}
      </div>
      <div className={`${styles.cartBody} ${modal && styles.modal}`}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.itemBox}>
            <img src={item.image} alt={item.name} />
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemPrice}>
                $ {item.price.toLocaleString()}
              </p>
            </div>
            {modal && (
              <div className={styles.amountButtons}>
                <button
                  onClick={() => {
                    dispatch(decreaseItemAmount(item.id));
                  }}
                >
                  -
                </button>
                <p>{item.amount}</p>
                <button
                  onClick={() => {
                    dispatch(increaseItemAmount(item.id));
                  }}
                >
                  +
                </button>
              </div>
            )}
            {!modal && <p className={styles.itemAmount}>x{item.amount}</p>}
          </div>
        ))}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.totalBox}>
          <p className={styles.totalText}>Total</p>
          <p className={styles.totalPrice}>$ {totalCost.toLocaleString()}</p>
        </div>
        {!modal && (
          <div className={styles.sumamryBox}>
            <div className={styles.shippingBox}>
              <p className={styles.shippingText}>Shipping</p>
              <p className={styles.shippingPrice}>$50</p>
            </div>
            <div className={styles.vatBox}>
              <p className={styles.vatText}>Vat(Included)</p>
              <p className={styles.vatPrice}>
                $ {Math.trunc(vatCost).toLocaleString()}
              </p>
            </div>
            <div className={styles.grandTotalBox}>
              <p className={styles.grandTotalText}>Grand Total</p>
              <p className={styles.grandTotalPrice}>
                $ {grandTotal.toLocaleString()}
              </p>
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
