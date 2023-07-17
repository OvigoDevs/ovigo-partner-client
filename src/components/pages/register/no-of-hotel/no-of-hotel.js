import Image from "next/image";

import singleHotel from "@/images/service-category-icons/bus.png";
import multipleHotel from "@/images/service-category-icons/hotel.svg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check } from "lucide-react";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Hotel } from "lucide-react";
import { Newspaper } from "lucide-react";

const NoOfHotel = () => {
  const options = [
    {
      id: 0,
      text: "One hotel with one or multiple rooms that guests can book",
      icon: (
        <IconWrapper>
          <Hotel />
        </IconWrapper>
      ),
    },
    {
      id: 1,
      text: "Multiple hotels with one or multiple rooms that guests can book",
      icon: (
        <IconWrapper>
          <Newspaper />
        </IconWrapper>
      ),
    },
  ];
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="section-d max-w-[500px]">
      <p>How many hotel are you listing?</p>

      <div className="rounded-md mt-5 grid grid-cols-1 gap-4">
        {options.map((item) => {
          const { id, text, icon } = item;
          return (
            <div
              key={id}
              className={`relative flex gap-4 border p-2 cursor-pointer rounded-md items-center ${
                id === selectedOption ? "border-primary hover:bg-gray-50 dark:hover:bg-[#ffffff20]" : "hover:border-gray-400"
              }`}
              onClick={() => setSelectedOption(id)}
            >
              {id === selectedOption ? (
                <div className={`absolute top-0 right-0 -m-[5px]`}>
                  <IconWrapper>
                    <Check className="bg-primary text-white dark:text-gray-600 rounded-full p-[3px]" />
                  </IconWrapper>
                </div>
              ) : null}
              <div className="flex items-center justify-start gap-2">
                {icon}
                {text}
              </div>
            </div>
          );
        })}
      </div>
      <hr className="my-5" />
      <Button className="w-full">Continue</Button>
    </div>
  );
};

export default NoOfHotel;
