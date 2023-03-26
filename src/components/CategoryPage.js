import styles from "./CategoryPage.module.css";
import BestgearSection from "./BestgearSection";
import ThumbnailsSection from "./ThumbnailsSection";
import { useSelector } from "react-redux";
import Product from "./Product";

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
            <Product
              key={product.id}
              page="category"
              product={product}
              location={location}
            />
          ))}
        </section>
        <ThumbnailsSection />
        <BestgearSection />
      </main>
    </div>
  );
}

export default CategoryPage;
