import CategoryPage from "./components/CategoryPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";

function App() {
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
