import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import CustomRadio from "@/components/core/custom-radio/custom-radio";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Lightbulb } from "lucide-react";

const BathroomDetails = () => {
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <div className="section-d flex items-start justify-start gap-[1rem]">
      <div className="max-w-[500px] w-[500px]">
        <h3 className="font-bold">Bathroom details</h3>
        <div className="grid grid-cols-1 gap-5 py-5">
          <CustomRadio
            options={["Yes", "No"]}
            name="bathroom_is_private"
            label="Is bathroom private?"
            handleOnChange={handleOnChange}
          />
          <CustomCheckbox
            label="Bathroom items are available in this room?"
            options={[
              "Toilet paper",
              "Shower",
              "Toilet",
              "Hairdryer",
              "Bathtub",
              "Free toiletries",
              "Bidet",
              "Slippers",
              "Bathrobe",
              "Spa tub",
            ]}
            handleOnChange={handleOnChange}
            name="languages"
            defaultValue={[]}
          />
        </div>
      </div>
      <div className="flex items-start justify-start gap-3 p-2 rounded-md border dark:border-gray-800 max-w-[250px]">
        <IconWrapper>
          <Lightbulb className="mt-[3px]"/>
        </IconWrapper>
        <div>
          <h5 className="pb-1 font-semibold">Still deciding?</h5>
          <p>{`Don't worry. You can update the bathroom amenities available at your place later`}</p>
        </div>
      </div>
    </div>
  );
};

export default BathroomDetails;
