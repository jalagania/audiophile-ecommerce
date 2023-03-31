import styles from "./CheckoutPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

function CheckoutPage() {
  const navigate = useNavigate();
  const [cashSelected, setCashSelected] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.pageWrapper}>
        <button className={styles.btnBack} onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className={styles.wrapper}>
          <div className={styles.checkoutBox}>
            <h1>Checkout</h1>
            <form className={styles.checkoutForm}>
              <div className={styles.billingBox}>
                <h4>Billing</h4>
                <div className={styles.billingLabels}>
                  <label>
                    <span>Name</span>
                    <input type="text" placeholder="Alexei Ward" />
                  </label>
                  <label>
                    <span>Email Address</span>
                    <input type="email" placeholder="alexei@mail.com" />
                  </label>
                  <label>
                    <span>Phone Number</span>
                    <input type="tel" placeholder="+1 202-555-0136" />
                  </label>
                </div>
              </div>
              <div className={styles.shippingBox}>
                <h4>Shipping Info</h4>
                <div className={styles.shippingLabels}>
                  <label>
                    <span>Address</span>
                    <input type="text" placeholder="1137 Williams Avenue" />
                  </label>
                  <label>
                    <span>ZIP Code</span>
                    <input type="text" placeholder="10001" />
                  </label>
                  <label>
                    <span>City</span>
                    <input type="text" placeholder="New York" />
                  </label>
                  <label>
                    <span>Country</span>
                    <input type="text" placeholder="United States" />
                  </label>
                </div>
              </div>
              <div className={styles.paymentBox}>
                <h4>Payment Details</h4>
                <div className={styles.paymentLabels}>
                  <div className={styles.methodBox}>
                    <p>Payment Method</p>
                    <div
                      className={styles.emoneySelect}
                      onClick={() => setCashSelected(false)}
                    >
                      <div className={styles.circle}>
                        {!cashSelected && <div className={styles.dot}></div>}
                      </div>
                      <p>e-Money</p>
                    </div>
                    <div
                      className={styles.cashSelect}
                      onClick={() => setCashSelected(true)}
                    >
                      <div className={styles.circle}>
                        {cashSelected && <div className={styles.dot}></div>}
                      </div>
                      <p>Cash on Delivery</p>
                    </div>
                  </div>
                  {!cashSelected && (
                    <div className={styles.moneyBox}>
                      <label>
                        <span>e-Money Number</span>
                        <input type="text" placeholder="238521993" />
                      </label>
                      <label>
                        <span>e-Money PIN</span>
                        <input type="text" placeholder="6891" />
                      </label>
                    </div>
                  )}
                  {cashSelected && (
                    <div className={styles.cashBox}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "./assets/checkout/icon-cash-on-delivery.svg"
                        }
                        alt="cash"
                      />
                      <p>
                        The 'Cash on Delivery' option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          <Cart page="checkout" />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
