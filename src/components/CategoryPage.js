import styles from "./CategoryPage.module.css";
import BestgearSection from "./BestgearSection";
import ThumbnailsSection from "./ThumbnailsSection";

function CategoryPage(props) {
  return (
    <div className={styles.categoryPage}>
      <div className={styles.pageBanner}>
        <h1>{props.name}</h1>
      </div>
      <main>
        <section className={styles.productsSection}>
          <p>here go products</p>
        </section>
        <ThumbnailsSection />
        <BestgearSection />
      </main>
    </div>
  );
}

export default CategoryPage;
