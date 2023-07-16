import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Lightbulb } from "lucide-react";

const PopularFacilities = () => {
  const options = [
    "Restaurant",
    "Room Service",
    "Bar",
    "24 hour front desk",
    "Sauna",
    "Fitness Center",
    "Garden",
    "Terrace",
    "Non-smoking Rooms",
    "Airport Shuttle",
    "Family Rooms",
    "Spa",
    "Hot Tub/Jacuzzi",
    "Free WiFi",
    "Air Conditioning",
    "Water park",
    "Swimming Pool",
    "Beach",
  ];

  const handleOnChange = (e) => {
    console.log(e);
  };

  return (
    <div className="py-5">
      <h3>What guest can use at your hotel?</h3>
      <div className="grid md:grid-cols-2 gap-4 pt-5">
        <CustomCheckbox
          options={options}
          handleOnChange={handleOnChange}
          name="popular-facilites"
          defaultValue={[]}
        />
        <div className="flex gap-2 p-2 border rounded-md mb-auto">
          <IconWrapper>
            <Lightbulb className="mt-[4px]" />
          </IconWrapper>
          <div>
            <h3 className="font-semibold">
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
  );
};

export default PopularFacilities;
