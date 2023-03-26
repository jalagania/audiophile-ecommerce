import Product from "./Product";
import styles from "./ProductPage.module.css";

function ProductPage() {
  let location = "desktop";
  if (window.innerWidth <= 768) {
    location = "tablet";
  }
  if (window.innerWidth <= 425) {
    location = "mobile";
  }

  return (
    <div>
      <Product page="product" location={location} />
    </div>
  );
}

export default ProductPage;
