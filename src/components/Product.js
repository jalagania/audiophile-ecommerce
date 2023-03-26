import styles from "./Product.module.css";

function Product({ page, product, location }) {
  return (
    <article className={styles.product}>
      <img
        src={product.categoryImage[location]}
        alt={product.category}
        className={styles.productImg}
      />
      <div className={styles.productText}>
        {product.new && <h4>New product</h4>}
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {page === "category" && <button>See product</button>}
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
    </article>
  );
}

export default Product;
