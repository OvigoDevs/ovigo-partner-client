import CustomRadio from "@/components/core/custom-radio/custom-radio";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { X } from "lucide-react";
import { useState } from "react";

const BreakfastDetails = () => {
  const handleOnChange = (e) => {
    console.log(e);
  };
  const breakfasts = [
    {
      id: 0,
      text: "A la carte",
    },
    {
      id: 1,
      text: "American",
    },
    {
      id: 2,
      text: "Asian",
    },
    {
      id: 3,
      text: "Breakfast to go",
    },
    {
      id: 4,
      text: "Buffet",
    },
    {
      id: 5,
      text: "Continental",
    },
    {
      id: 6,
      text: "Full English/Irish",
    },
    {
      id: 7,
      text: "Gluten free",
    },
    {
      id: 8,
      text: "Halal",
    },
    {
      id: 9,
      text: "Italian",
    },
    {
      id: 10,
      text: "Koshar",
    },
    {
      id: 11,
      text: "Vegan",
    },
    {
      id: 12,
      text: "Vegetarian",
    },
  ];

  const [selected, setSelected] = useState([]);

  console.log(selected);
  return (
    <div className="grid grid-cols-1 gap-2 section-d max-w-[500px]">
      <h2 className="font-bold">Breakfast details</h2>
      <div className="grid grid-cols-1 gap-5">
        <CustomRadio
          label="Do you serve guests breakfast"
          name="breakfast"
          handleOnChange={handleOnChange}
          options={["Yes", "No"]}
        />
        <CustomRadio
          label="Is breakfast included in the price guests pay?"
          name="breakfast"
          handleOnChange={handleOnChange}
          options={["Yes, it's included", "No, it costs extra"]}
        />
        <div className="grid grid-cols-1 gap-2">
          <label>Breakfast price per person, per day</label>
          <input />
          <p className="text-gray-400 dark:text-gray-800">
            Including all taxes and fees
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <label>What type of breakfast do you offer?</label>
            <p className="text-gray-400 dark:text-gray-600">
              Select all that apply
            </p>
          </div>
          <ul className="flex flex-wrap items-start justify-start gap-2">
            {breakfasts.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`relative px-2 py-1 rounded-md border text-xs   hover:border-gray-600 lg:cursor-pointer flex items-center justify-center gap-2 ${
                    selected.find((li) => li.id === item.id)
                      ? "border-red-400 hover:border-red-600"
                      : "dark:border-gray-800 dark:hover:border-gray-400"
                  }`}
                  onClick={() => {
                    if (selected.find((li) => li.id === item.id)) {
                      setSelected([
                        ...selected.filter((li) => li.id !== item.id),
                      ]);
                    } else {
                      setSelected([...selected, item]);
                    }
                  }}
                >
                  {item.text}
                  {selected.find((li) => li.id === item.id) ? (
                    <div className="border-l pl-1">
                      <IconWrapper>
                        <X className="text-red-400 hover:text-red-600" />
                      </IconWrapper>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreakfastDetails;
