import styles from "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThumbnailsSection from "./components/ThumbnailsSection";
import BestgearSection from "./components/BestgearSection";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <ThumbnailsSection />
        <BestgearSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
