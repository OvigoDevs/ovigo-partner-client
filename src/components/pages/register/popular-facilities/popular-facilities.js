import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { useState } from "react";

const PopularFacilities = () => {
  const options = ["Restaurant", "Room Service", "Bar", "24 hour front desk" , "Sauna", "Fitness Center", "Garden", "Terrace", "Non-smoking Rooms", "Airport Shuttle", "Family Rooms", "Spa", "Hot Tub/Jacuzzi", "Free WiFi", "Air Conditioning", "Water park", "Swimming Pool", "Beach"];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        name,
      ]);
    } else {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      console.log("Selected Options:", selectedOptions);
    } else {
      console.log("Error: Please select at least one option.");
    }
  };

  const isFormValid = () => {
    return selectedOptions.length > 0;
  };
  return (
    <div className="py-5">
      <h3>What guest can use at your hotel?</h3>
      {/* Container */}
      <div className="grid md:grid-cols-2 gap-4 pt-5">
        {/* Options Container */}
        <div>
          <div className="p-5 border border-primary rounded-md space-y-1">
            {options.map((option) => (
              <div key={option}>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name={option}
                    checked={selectedOptions.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <hr className="my-5" />
          <Button onClick={handleSubmit} className="w-full">
            Submit
          </Button>
        </div>
        {/* Suggestion Box */}
        <div>
          <div className="flex gap-3 p-2 border border-black rounded-md">
            <Lightbulb className="w-10 h-10"/>
            <div>
              <h3 className="text-lg font-semibold">
                What if I don&apos;t see a facility I offer?
              </h3>
              <p>
                The facilities are the ones guest search for most. After you
                complete your registration, you can add more facilities from a
                larger list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularFacilities;
