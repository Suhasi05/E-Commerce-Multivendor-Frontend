import { ThemeProvider } from "@mui/material";
import Navbar from "./Customer/Components/Navbar/Navbar";
import customeTheme from "./Theme/CustomeTheme";
import Home from "./Customer/Pages/Home/Home";
import Product from "./Customer/Pages/Product/Product";

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <Navbar />
        {/* <Home /> */}
        <Product />
      </ThemeProvider>
    </>
  );
}

export default App;
