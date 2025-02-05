import { Box, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payment } from "@mui/icons-material";

function OrderDetails() {
  const navigate = useNavigate();
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src="https://i5.walmartimages.com/seo/Lenovo-IdeaPad-3i-15-Intel-Core-i7-1255U-16GB-RAM-512-GB-SSD-Arctic-Grey-Windows-11-Home-82RK017QUS_87d720bf-6d23-4c80-8164-b3753b6c031b.558f938e641cb172fbdf048e0023c953.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">saree</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            <strong>Size: </strong>M
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/123/create`)}>
            Write Review
          </Button>
        </div>
      </section>
      <section className="border p-5">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>
      <div className="border p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>Suhasi</p>
            <Divider />
            <p>789541236</p>
          </div>
          <p>123 main, surat gujarat</p>
        </div>
      </div>
      <div className="border space-y-4 p-5">
        <div className="space-y-1">
          <p className="font-bold">Total Item Price</p>
          <p>
            You saved{" "}
            <span className="text-green-500 font-medium text-xs">₹12.00</span>on
            this item
          </p>
        </div>
        <p className="font-medium">₹ 123.00</p>

        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payment />
            <p>Pay On Delivery</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pt-5">
          <p className="text-xs">
            <strong>Sold by : </strong>Zara
          </p>
        </div>
        <div className="p-5">
          <Button
            disabled={true}
            //   onClick={handleCancleOrder}
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
            {true ? "Order canceled" : "Cancel Order"}
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default OrderDetails;
