import { Box } from "@mui/material";
import { electronicsLevelThree } from "../../../Data/Category/LevelThree/electronicsLevelThree";
import { furnitureLevelThree } from "../../../Data/Category/LevelThree/furnitureLevelThree";
import { menLevelThree } from "../../../Data/Category/LevelThree/menLevelThree";
import { womenLevelThree } from "../../../Data/Category/LevelThree/womenLevelThree";
import { electronicsLevelTwo } from "../../../Data/Category/LevelTwo/electronicsLevelTwo";
import { furnitureLevelTwo } from "../../../Data/Category/LevelTwo/furnitureLevelTwo";
import { menLevelTwo } from "../../../Data/Category/LevelTwo/menLevelTwo";
import { womenLevelTwo } from "../../../Data/Category/LevelTwo/womenLevelTwo";

const categoryTwo: {[key: string]: any[]} = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furniture: furnitureLevelTwo,
};
const categoryThree: {[key: string]: any[]} = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree,
};
function CategorySheet({selectedCategory, setShowSheet}: any) {
  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId === parentCategoryId
    );
  };
  return (
    <Box
      sx={{ zIndex: 1 }}
      className="bg-white shadow-lg lg:h-[200px] overflow-y-auto"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item: any, index) => (
          <div
            className={`p-8 lg:w-[20%] ${
              index % 2 === 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            <p className="text-primary-color mb-5 font-semibold">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(categoryThree[selectedCategory], item.categoryId).map(
                (item: any) => (
                  <div>
                    <li className="hover:text-primary-color cursor-pointer">
                      {item.name}
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default CategorySheet;
