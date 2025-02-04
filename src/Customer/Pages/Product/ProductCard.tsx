import { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://imgs.search.brave.com/IvctssCQNTVKRnHuCCmbPVyTWDQrlTAUzxxsOWmmE9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFTNW9xRENrZkwu/anBn",
  "https://imgs.search.brave.com/ueWYnMFL374fKVC1TWuCyPvlxd9mnojLbH3fyjrChPg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFrdjlXTUxubFMu/anBn",
];

function ProductCard() {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => (
            <img
              className="card-media object-top"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImg) * 100}%)`,
              }}
            />
          ))}

          { isHovered && 
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button variant="contained" color="secondary">
                  {" "}
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button variant="contained" color="secondary">
                  {" "}
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          }
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
            <div className="name">
                <h1>Zara</h1>
                <p>Pink Dress</p>
            </div>
            <div className="price flex items-center gap-3">
                <span className="font-sans text-gray-800">₹ 400</span>
                <span className="thin-line-through text-gray-400">₹ 999</span>
                <span className="text-primary-color font-semibold">60%</span>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
