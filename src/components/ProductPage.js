import styles from "./ProductPage.module.css";
import BestgearSection from "./BestgearSection";
import Product from "./Product";
import ThumbnailsSection from "./ThumbnailsSection";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ProductPage() {
  // const { selectedProduct } = useSelector((store) => store.data);
  const { data } = useSelector((store) => store.data);
  const { id: productID } = useParams();
  const [selectedProduct] = data.filter(
    (product) => product.slug === productID
  );

  let location = "desktop";
  if (window.innerWidth <= 768) {
    location = "tablet";
  }
  if (window.innerWidth <= 425) {
    location = "mobile";
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionsWrapper}>
        <button className={styles.btnGoBack}>Go Back</button>
        <Product page="product" product={selectedProduct} location={location} />
        <section className={styles.productInfoBox}>
          <div className={styles.features}>
            <h3>Features</h3>
            <p>{selectedProduct.features}</p>
          </div>
          <div className={styles.inBox}>
            <h3>In The Box</h3>
            <ul>
              {selectedProduct.includes.map((el, index) => (
                <li key={index}>
                  <span>{el.quantity}x</span>
                  <span>{el.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.productGallery}>
          <img
            src={selectedProduct.gallery.first[location]}
            alt={selectedProduct.category}
          />
          <img
            src={selectedProduct.gallery.second[location]}
            alt={selectedProduct.category}
          />
          <img
            src={selectedProduct.gallery.third[location]}
            alt={selectedProduct.category}
          />
        </section>
        <section className={styles.youMayLike}>
          <h3>You May Also Like</h3>
          <div className={styles.otherProducts}>
            {selectedProduct.others.map((item, index) => (
              <div key={index} className={styles.product}>
                <img
                  src={item.image[location]}
                  alt={selectedProduct.category}
                />
                <h4>{item.name}</h4>
                <Link to={`/${item.category}/${item.slug}`}>See Product</Link>
              </div>
            ))}
          </div>
        </section>
        <ThumbnailsSection />
        <BestgearSection />
      </div>
    </div>
  );
}

export default ProductPage;
