import styles from "./ConfirmationModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { confirmationSlice } from "../store/confirmationSlice";
import { useNavigate } from "react-router-dom";
import { cartSlice } from "../store/cartSlice";
import { useState } from "react";

function ConfirmationModal() {
  const dispatch = useDispatch();
  const { setConfirmationIsVisible } = confirmationSlice.actions;
  const { clearCart } = cartSlice.actions;
  const cartItems = useSelector((store) =>
    store.cart.cartItems.filter((item) => item.amount !== 0)
  );
  const navigate = useNavigate();

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );
  const grandTotal = totalCost + 50;

  const [modifiedItems, setModifiedItems] = useState([cartItems[0]]);
  const viewLesttText =
    modifiedItems.length === 1
      ? `and ${cartItems.length - 1} other item(s)`
      : "View Less";

  function handleViewLess() {
    if (modifiedItems.length === 1) {
      setModifiedItems(cartItems);
    } else {
      setModifiedItems([cartItems[0]]);
    }
  }

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
          <div className={styles.orderListWrapper}>
            <ul className={styles.orderList}>
              {modifiedItems.map((item) => (
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
            {cartItems.length > 1 && (
              <button className={styles.btnShowLess} onClick={handleViewLess}>
                {viewLesttText}
              </button>
            )}
          </div>
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
