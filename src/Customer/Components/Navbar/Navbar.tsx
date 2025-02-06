import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AddShoppingCart, Storefront } from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: "Men", categoryId: "men" },
    { name: "Women", categoryId: "women" },
    { name: "Home & Furniture", categoryId: "home_furniture" },
    { name: "Electronics", categoryId: "electronics" },
  ];

  return (
    <>
      <Box sx={{ zIndex: 2 }} className="sticky top-0 left-0 right-0 bg-white">
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1 onClick={() => navigate("/")} className="logo cursor-pointer text-lg md:text-2xl text-primary-color">
                E-Commerce
              </h1>
            </div>
          </div>
          <ul className="flex items-center font-medium text-gray-800">
            {categories.map((item) => (
              <li
                key={item.categoryId}
                onMouseEnter={() => {
                  setShowCategorySheet(true);
                  setSelectedCategory(item.categoryId);
                }}
                className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {true ? (
              <Button onClick={() => navigate("/account/orders")} className="flex items-center gap-2">
                <Avatar sx={{ width: 29, height: 29 }} src="" />{" "}
                <h1 className="font-semibold hidden lg:block">Suhasi</h1>{" "}
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorderIcon sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")}>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && (
              <Button onClick={() => navigate("/become-seller")} startIcon={<Storefront />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>

        {showCategorySheet && (
          <div
            onMouseEnter={() => setShowCategorySheet(true)}
            onMouseLeave={() => setShowCategorySheet(false)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border bg-white"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </>
  );
}

export default Navbar;
