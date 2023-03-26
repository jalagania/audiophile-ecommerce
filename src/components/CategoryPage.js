import styles from "./CategoryPage.module.css";
import BestgearSection from "./BestgearSection";
import ThumbnailsSection from "./ThumbnailsSection";
import { useSelector } from "react-redux";

function CategoryPage(props) {
  const { data } = useSelector((store) => store.data);
  const products = data
    .filter((product) => product.category === props.name)
    .reverse();

  let location = "desktop";
  if (window.innerWidth <= 768) {
    location = "tablet";
  }
  if (window.innerWidth <= 425) {
    location = "mobile";
  }

  return (
    <div className={styles.categoryPage}>
      <div className={styles.pageBanner}>
        <h1>{props.name}</h1>
      </div>
      <main>
        <section className={styles.productsSection}>
          {products.map((product) => (
            <article key={product.id} className={styles.product}>
              <img
                src={product.categoryImage[location]}
                alt={props.name}
                className={styles.productImg}
              />
              <div className={styles.productText}>
                {product.new && <h4>New product</h4>}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button>See product</button>
              </div>
            </article>
          ))}
        </section>
        <ThumbnailsSection />
        <BestgearSection />
      </main>
    </div>
  );
}

export default CategoryPage;
