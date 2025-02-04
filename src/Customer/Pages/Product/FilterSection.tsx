import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { colors } from "../../../Data/Filter/Color";
import { useState } from "react";
import { discounts } from "../../../Data/Filter/Discount";
import { priceRanges } from "../../../Data/Filter/Price";
import { useSearchParams } from "react-router-dom";

function FilterSection() {
  const [expandColor, setExpandColor] = useState(false);
  const [expandPrice, setExpandPrice] = useState(false);
  const [expandDiscount, setExpandDiscount] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set(name, value);
    } else {
      newParams.delete(name);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilters}
          size="small"
          className="text-teal-600 cursor-pointer font-semibold"
        >
          Clear all
        </Button>
      </div>
      <Divider />

      <div className="px-9 space-y-6">
        {/* Color Filter */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[500],
                pt: "14px",
              }}
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              name="color"
              value={searchParams.get("color") || ""}
              onChange={updateFilterParams}
            >
              {colors.slice(0, expandColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  key={item.hex}
                  value={item.hex}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className="h-5 w-5 rounded-full"
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <button
            onClick={() => setExpandColor(!expandColor)}
            className="text-primary-color cursor-pointer hover:text-teal-800 flex items-center"
          >
            {expandColor ? "Hide" : `+${colors.length - 5} more`}
          </button>
        </section>

        <Divider />

        {/* Price Filter */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[500],
                pt: "14px",
              }}
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              name="price"
              value={searchParams.get("price") || ""}
              onChange={updateFilterParams}
            >
              {priceRanges
                .slice(0, expandPrice ? priceRanges.length : 5)
                .map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value.toString()}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
            </RadioGroup>
          </FormControl>
          <button
            onClick={() => setExpandPrice(!expandPrice)}
            className="text-primary-color cursor-pointer hover:text-teal-800 flex items-center"
          >
            {expandPrice ? "Hide" : `+${priceRanges.length - 5} more`}
          </button>
        </section>

        <Divider />

        {/* Discount Filter */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[500],
                pt: "14px",
              }}
              id="discount"
            >
              Discount
            </FormLabel>
            <RadioGroup
              name="discount"
              value={searchParams.get("discount") || ""}
              onChange={updateFilterParams}
            >
              {discounts
                .slice(0, expandDiscount ? discounts.length : 5)
                .map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value.toString()}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
            </RadioGroup>
          </FormControl>
          <button
            onClick={() => setExpandDiscount(!expandDiscount)}
            className="text-primary-color cursor-pointer hover:text-teal-800 flex items-center"
          >
            {expandDiscount ? "Hide" : `+${discounts.length - 5} more`}
          </button>
        </section>

        <Divider />
      </div>
    </div>
  );
}

export default FilterSection;
