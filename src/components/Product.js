import { useDispatch } from "react-redux";
import { dataSlice } from "../store/dataSlice";
import styles from "./Product.module.css";

function Product({ page, product, location }) {
  const dispatch = useDispatch();
  const { setSelectedProduct } = dataSlice.actions;

  const imageType = page === "product" ? "image" : "categoryImage";

  function handleSeeProduct() {
    dispatch(setSelectedProduct(product));
  }

  return (
    <section className={styles.product}>
      <img
        src={product[imageType][location]}
        alt={product.category}
        className={styles.productImg}
      />
      <div className={styles.productText}>
        {product.new && <h4>New product</h4>}
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {page === "category" && (
          <button onClick={handleSeeProduct}>See product</button>
        )}
        {page === "product" && (
          <div className={styles.cartElements}>
            <p className={styles.productPrice}>
              $ {product.price.toLocaleString()}
            </p>
            <div className={styles.cartButtons}>
              <div className={styles.itemAmount}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button className={styles.addCart}>Add To Cart</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Product;
