import CategoryPage from "./components/CategoryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      <CategoryPage name="headphones" />
      {/* <CategoryPage name="speakers" /> */}
      {/* <CategoryPage name="earphones" /> */}
      <Footer />
    </div>
  );
}

export default App;
