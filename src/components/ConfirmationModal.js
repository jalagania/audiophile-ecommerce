import styles from "./ConfirmationModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { confirmationSlice } from "../store/confirmationSlice";
import { useNavigate } from "react-router-dom";
import { cartSlice } from "../store/cartSlice";

function ConfirmationModal() {
  const dispatch = useDispatch();
  const { setConfirmationIsVisible } = confirmationSlice.actions;
  const { clearCart } = cartSlice.actions;
  const { cartItems } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );
  const grandTotal = totalCost + 50;

  function handleGoBackHome() {
    dispatch(setConfirmationIsVisible(false));
    navigate("/");
    dispatch(clearCart());
  }

  return (
    <div className={styles.container}>
      <div className={styles.confirmationBox}>
        <img
          src={
            process.env.PUBLIC_URL +
            "./assets/checkout/icon-order-confirmation.svg"
          }
          alt="check"
        />
        <h1>Thank You For Your Order</h1>
        <p className={styles.message}>
          You will receive an email confirmation shortly.
        </p>
        <div className={styles.ordersBox}>
          <ul className={styles.orderList}>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
                <p className={styles.itemAmount}>x{item.amount}</p>
              </li>
            ))}
          </ul>
          <div className={styles.totalCostBox}>
            <p className={styles.totalText}>Grand Total</p>
            <p className={styles.totalAmount}>
              $ {grandTotal.toLocaleString()}
            </p>
          </div>
        </div>
        <button className={styles.btnBackHome} onClick={handleGoBackHome}>
          Back To Home
        </button>
      </div>
      <div className={styles.modalBg}></div>
    </div>
  );
}

export default ConfirmationModal;
