import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartSlice } from "../store/cartSlice";
import styles from "./Product.module.css";

function Product({ page, product, location }) {
  const dispatch = useDispatch();
  const { setCartItems } = cartSlice.actions;

  const imageType = page === "product" ? "image" : "categoryImage";
  const [itemAmount, setItemAmount] = useState(1);

  function handleDeductItem() {
    if (itemAmount > 1) {
      setItemAmount(itemAmount - 1);
    }
  }

  function handleAddItem() {
    if (itemAmount < 5) {
      setItemAmount(itemAmount + 1);
    }
  }

  function handleAddToCart() {
    const item = {
      id: product.id,
      name: product.nameCart,
      amount: itemAmount,
      price: product.price,
      image: `/assets/cart/image-${product.slug}.jpg`,
    };
    dispatch(setCartItems(item));
    setItemAmount(1);
  }

  return (
    <article className={styles.product}>
      <img
        src={product[imageType][location]}
        alt={product.category}
        className={styles.productImg}
      />
      <div className={styles.productText}>
        {product.new && <h4>New product</h4>}
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {page === "category" && <Link to={`${product.slug}`}>See product</Link>}
        {page === "product" && (
          <div className={styles.cartElements}>
            <p className={styles.productPrice}>
              $ {product.price.toLocaleString()}
            </p>
            <div className={styles.cartButtons}>
              <div className={styles.itemAmount}>
                <button onClick={handleDeductItem}>-</button>
                <p>{itemAmount}</p>
                <button onClick={handleAddItem}>+</button>
              </div>
              <button className={styles.addCart} onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default Product;
