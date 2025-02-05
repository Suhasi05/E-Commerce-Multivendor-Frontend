import { Divider } from "@mui/material";

function PricingCart() {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>₹899</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>₹699</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>₹69</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Plateform</span>
          <span>Free</span>
        </div>
        <Divider />
      </div>
      <div className="flex justify-between items-center p-5">
        <span>Total</span>
        <span>₹299</span>
      </div>
    </>
  );
}

export default PricingCart;
