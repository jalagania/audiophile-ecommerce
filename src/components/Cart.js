import styles from "./Cart.module.css";

function Cart(props) {
  // props.location
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <p className={styles.cartTitle}>Cart</p>
        <button className={styles.btnRemove}>Remove All</button>
      </div>
      <div className={styles.cartBody}>
        <img src="" alt="" />
        <div className={styles.itemInfo}>
          <p className={styles.itemName}>Name</p>
          <p className={styles.itemPrice}>$900</p>
        </div>
        <div className={styles.amountButtons}>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
      <div className={styles.cartFooter}>
        <p className={styles.totalText}>Total</p>
        <p className={styles.totalPrice}>$900</p>
      </div>
      <button className={styles.btnCheckout}>Check Out</button>
    </div>
  );
}

export default Cart;
