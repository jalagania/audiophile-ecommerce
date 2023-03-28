import styles from "./ConfirmationModal.module.css";
import { useDispatch } from "react-redux";
import { confirmationSlice } from "../store/confirmationSlice";
import { useNavigate } from "react-router-dom";

function ConfirmationModal() {
  const dispatch = useDispatch();
  const { setConfirmationIsVisible } = confirmationSlice.actions;
  const navigate = useNavigate();

  function handleGoBackHome() {
    dispatch(setConfirmationIsVisible(false));
    navigate("/");
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
          <div className={styles.orderList}>
            <img src="" alt="" />
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Name</p>
              <p className={styles.itemPrice}>$900</p>
            </div>
            <p className={styles.itemAmount}>x{}</p>
          </div>
          <div className={styles.totalCostBox}>
            <p className={styles.totalText}>Grand Total</p>
            <p className={styles.totalAmount}>$5000</p>
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
