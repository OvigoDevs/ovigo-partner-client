import Image from "next/image";

import singleHotel from "../../../../images/service-category-icons/bus.png";
import multipleHotel from "../../../../images/service-category-icons/hotel.svg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2Icon } from "lucide-react";

const NoOfHotel = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      console.log("Selected Option:", selectedOption);
    }
  };
  return (
    <div className="py-5">
      <p>How many hotel are you listing?</p>

      {/* Container */}
      <div className="p-5 rounded-md border shadow-lg border-primary space-y-5 mt-5">
        <div
          className={`relative flex gap-4 border border-primary p-2 cursor-pointer rounded-md items-center`}
          onClick={() => handleOptionSelect("single")}
        >
          <CheckCircle2Icon
            className={`absolute top-2 right-2 ${
              selectedOption == "single" ? "text-primary block" : "hidden"
            }`}
          />
          <Image width={50} height={50} src={singleHotel} alt="Single Hotel" />
          <p>One hotel with one or multiple rooms that guests can book</p>
        </div>
        <div
          className={`relative flex gap-4 border border-primary p-2 cursor-pointer rounded-md items-center `}
          onClick={() => handleOptionSelect("multiple")}
        >
          <CheckCircle2Icon
            className={`absolute top-2 right-2 ${
              selectedOption == "multiple" ? "text-primary block" : "hidden"
            }`}
          />
          <Image
            width={50}
            height={50}
            src={multipleHotel}
            alt="Multiple Hotel"
          />
          <p>Multiple hotels with one or multiple rooms that guests can book</p>
        </div>
      </div>
      <hr className="my-5" />
      <Button
        className="w-full"
        onClick={handleContinue}
        disabled={!selectedOption}
      >
        Continue
      </Button>
    </div>
  );
};

export default NoOfHotel;
