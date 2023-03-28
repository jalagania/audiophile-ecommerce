import CategoryPage from "./components/CategoryPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import ProductPage from "./components/ProductPage";
import CartModal from "./components/CartModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const { cartIsVisible } = useSelector((store) => store.cart);
  const { confirmationIsVisible } = useSelector((store) => store.confirmation);

  useEffect(() => {
    document.body.style.overflow =
      cartIsVisible || confirmationIsVisible ? "hidden" : "unset";
  }, [cartIsVisible, confirmationIsVisible]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="headphones"
            element={<CategoryPage name="headphones" />}
          />
          <Route path="speakers" element={<CategoryPage name="speakers" />} />
          <Route path="earphones" element={<CategoryPage name="earphones" />} />
          <Route path="bla" element={<ProductPage />} />
        </Route>
      </Routes>
      {cartIsVisible && <CartModal />}
      {confirmationIsVisible && <ConfirmationModal />}
    </BrowserRouter>
  );
}

export default App;
