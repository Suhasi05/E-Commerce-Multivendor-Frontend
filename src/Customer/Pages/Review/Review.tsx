import { Divider } from "@mui/material";
import ReviewCard from "./ReviewCard";

function Review() {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://media.istockphoto.com/id/1266818891/photo/beautiful-indian-woman-in-sari.jpg?s=2048x2048&w=is&k=20&c=Ekriz0lQ1iKhQA6wXdd3CPQTWtce-c1J3AmXnwxBWn0="
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">Zara</p>
            <p className="text-lg text-gray-600">Women's Saree</p>
          </div>
          <div className="price flex items-center gap-3 mt-5 text-2xl">
            <span className="font-sans text-gray-800">₹ 400</span>
            <span className="thin-line-through text-gray-400">₹ 999</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </section>

      <section className="space-y-5 w-full">
        {[1, 1, 1, 1, 1].map(() => (
          <div className="space-y-3">
            <ReviewCard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Review;
