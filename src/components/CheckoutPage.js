import styles from "./CheckoutPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { useFormik } from "formik";
import * as yup from "yup";

function CheckoutPage() {
  const navigate = useNavigate();
  const [cashSelected, setCashSelected] = useState(false);

  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const formSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    phone: yup.string().matches(phoneRegex, { message: "Invalid number" }),
    address: yup.string().required("Required"),
    zip: yup.number().typeError("Wrong format").required("Required"),
    city: yup.string().required("Required"),
    country: yup.string().required("Required"),
    enumber: yup.number().typeError("Wrong format").required("Required"),
    pin: yup.number().typeError("Wrong format").required("Required"),
  });

  const { values, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      pin: "",
      enumber: "",
    },
    validationSchema: formSchema,
  });

  let formIsValid = false;
  if (cashSelected) {
    if (
      values.name !== "" &&
      Object.keys(errors).filter(
        (error) => error !== "pin" && error !== "enumber"
      ).length === 0
    ) {
      formIsValid = true;
    }
  } else {
    if (values.name !== "" && Object.keys(errors).length === 0) {
      formIsValid = true;
    }
  }

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
                    <div
                      className={`${styles.spanWrapper} ${
                        errors.name && touched.name && styles.error
                      }`}
                    >
                      <span>Name</span>
                      {errors.name && touched.name && (
                        <span>{errors.name}</span>
                      )}
                    </div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Alexei Ward"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.name && touched.name && styles.error}
                    />
                  </label>
                  <label>
                    <div
                      className={`${styles.spanWrapper} ${
                        errors.email && touched.email && styles.error
                      }`}
                    >
                      <span>Email Address</span>
                      {errors.email && touched.email && (
                        <span>{errors.email}</span>
                      )}
                    </div>
                    <input
                      name="email"
                      type="email"
                      placeholder="alexei@mail.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email && styles.error}
                    />
                  </label>
                  <label>
                    <div
                      className={`${styles.spanWrapper} ${
                        errors.phone && touched.phone && styles.error
                      }`}
                    >
                      <span>Phone Number</span>
                      {errors.phone && touched.phone && (
                        <span>{errors.phone}</span>
                      )}
                    </div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+1 202-555-0136"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.phone && touched.phone && styles.error}
                    />
                  </label>
                </div>
              </div>
              <div className={styles.shippingBox}>
                <h4>Shipping Info</h4>
                <div className={styles.shippingLabels}>
                  <label>
                    <div
                      className={`${styles.spanWrapper} ${
                        errors.address && touched.address && styles.error
                      }`}
                    >
                      <span>Address</span>
                      {errors.address && touched.address && (
                        <span>{errors.address}</span>
                      )}
                    </div>
                    <input
                      name="address"
                      type="text"
                      placeholder="1137 Williams Avenue"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.address && touched.address && styles.error
                      }
                    />
                  </label>
                  <label>
                    <div
                      className={`${styles.spanWrapper} ${
                        errors.zip && touched.zip && styles.error
                      }`}
                    >
                      <span>ZIP Code</span>
                      {errors.zip && touched.zip && <span>{errors.zip}</span>}
                    </div>
                    <input
                      name="zip"
                      type="text"
                      placeholder="10001"
                      value={values.zip}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.zip && touched.zip && styles.error}
                    />
                  </label>
                  <label>
                    <div
                      className={`${styles.spanWrapper} ${
                        errors.city && touched.city && styles.error
                      }`}
                    >
                      <span>City</span>
                      {errors.city && touched.city && (
                        <span>{errors.city}</span>
                      )}
                    </div>
                    <input
                      name="city"
                      type="text"
                      placeholder="New York"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.city && touched.city && styles.error}
                    />
                  </label>
                  <label>
                    <div
                      className={`${styles.spanWrapper} ${
                        errors.country && touched.country && styles.error
                      }`}
                    >
                      <span>Country</span>
                      {errors.country && touched.country && (
                        <span>{errors.country}</span>
                      )}
                    </div>
                    <input
                      name="country"
                      type="text"
                      placeholder="United States"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.country && touched.country && styles.error
                      }
                    />
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
                        <div
                          className={`${styles.spanWrapper} ${
                            errors.enumber && touched.enumber && styles.error
                          }`}
                        >
                          <span>e-Money Number</span>
                          {errors.enumber && touched.enumber && (
                            <span>{errors.enumber}</span>
                          )}
                        </div>
                        <input
                          name="enumber"
                          type="text"
                          placeholder="238521993"
                          value={values.enumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.enumber && touched.enumber && styles.error
                          }
                        />
                      </label>
                      <label>
                        <div
                          className={`${styles.spanWrapper} ${
                            errors.pin && touched.pin && styles.error
                          }`}
                        >
                          <span>e-Money PIN</span>
                          {errors.pin && touched.pin && (
                            <span>{errors.pin}</span>
                          )}
                        </div>
                        <input
                          name="pin"
                          type="text"
                          placeholder="6891"
                          value={values.pin}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.pin && touched.pin && styles.error}
                        />
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
          <Cart page="checkout" formIsValid={formIsValid} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
