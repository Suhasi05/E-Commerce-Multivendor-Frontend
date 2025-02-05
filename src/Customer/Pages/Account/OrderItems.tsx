import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";

function OrderItems() {
  return (
    <div className="text-sm bg-white p-5 space-y-4 rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div className="">
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Fri, 14 Feb</p>
        </div>
        <div className="p-5 bg-teal-50 flex gap-3">
          <div>
            <img
              className="w-[70px] "
              src="https://i5.walmartimages.com/seo/Lenovo-IdeaPad-3i-15-Intel-Core-i7-1255U-16GB-RAM-512-GB-SSD-Arctic-Grey-Windows-11-Home-82RK017QUS_87d720bf-6d23-4c80-8164-b3753b6c031b.558f938e641cb172fbdf048e0023c953.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
              alt=""
            />
          </div>
          <div className="w-full space-y-2">
            <h1 className="font-bold">Zara</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              laudantium laborum eos.
            </p>
            <p>
              <strong>size : </strong>FREE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItems;
