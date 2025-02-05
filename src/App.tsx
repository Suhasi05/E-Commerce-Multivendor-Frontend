import { ThemeProvider } from "@mui/material";
import Navbar from "./Customer/Components/Navbar/Navbar";
import customeTheme from "./Theme/CustomeTheme";
import Home from "./Customer/Pages/Home/Home";
import Product from "./Customer/Pages/Product/Product";
import ProductDetails from "./Customer/Pages/PageDetails/ProductDetails";
import Review from "./Customer/Pages/Review/Review";
import Cart from "./Customer/Pages/Cart/Cart";
import Checkout from "./Customer/Pages/Checkout/Checkout";

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
        <Checkout />
      </ThemeProvider>
    </>
  );
}

export default App;