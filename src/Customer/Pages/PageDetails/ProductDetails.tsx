import StarIcon from "@mui/icons-material/Star";
import { Button, Divider } from "@mui/material";
import { teal } from "@mui/material/colors";
import "../Product/ProductCard.css";
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import { useState } from "react";
function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://media.istockphoto.com/id/1266818891/photo/beautiful-indian-woman-in-sari.jpg?s=2048x2048&w=is&k=20&c=Ekriz0lQ1iKhQA6wXdd3CPQTWtce-c1J3AmXnwxBWn0="
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://media.istockphoto.com/id/1266817653/photo/beautiful-indian-woman-in-sari.jpg?s=612x612&w=0&k=20&c=w3X6XNKlm-8ll7FHehCK6qQjycwvWP49hS6z2itz3bw="
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">Zara</h1>
          <p className="text-gray-500 font-semibold">Women saree</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>234 Ratings</span>
          </div>
          <div className="price flex items-center gap-3 mt-5 text-2xl">
            <span className="font-sans text-gray-800">₹ 400</span>
            <span className="thin-line-through text-gray-400">₹ 999</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
          <p className="text-sm">
            Inclusive of all taxes. Free Shipping above ₹1500.{" "}
          </p>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span> {quantity} </span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add To Bag
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Wishlist
            </Button>
          </div>
          <div className="mt-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur odit obcaecati placeat eaque, porro eius!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetails;
