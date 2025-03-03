import { ThemeProvider } from "@mui/material";
import Navbar from "./Customer/Components/Navbar/Navbar";
import customeTheme from "./Theme/CustomeTheme";
import Home from "./Customer/Pages/Home/Home";
import Product from "./Customer/Pages/Product/Product";
import ProductDetails from "./Customer/Pages/PageDetails/ProductDetails";
import Review from "./Customer/Pages/Review/Review";
import Cart from "./Customer/Pages/Cart/Cart";
import Checkout from "./Customer/Pages/Checkout/Checkout";
import Account from "./Customer/Pages/Account/Account";
import { Route, Routes } from "react-router-dom";
import BecomeSeller from "./Customer/Pages/Become Seller/BecomeSeller";
import SellerDashboard from "./Seller/Pages/SellerDashboard/SellerDashboard";
import AdminDashboard from "./Admin/Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Account /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="become-seller" element={<BecomeSeller />} />
          <Route path="seller/*" element={<SellerDashboard />} />
          <Route path="admin/*" element={<AdminDashboard />} />

        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;