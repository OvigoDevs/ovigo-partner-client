import CustomRadio from "@/components/core/custom-radio/custom-radio";
import { Button } from "@/components/ui/button";
import CheckInOut from "./check-in-out";
import { useEffect, useState } from "react";

const HouseRules = () => {
  const [formData, setFormData] = useState({
    checkinfrom: "",
    checkinuntil: "",
    checkoutfrom: "",
    checkoutuntil: "",
  });
  const [errors, setErrors] = useState(formData);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log({name, value})
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };
  const validator = (data) => {
    let obj = {};
    if (!data.checkinfrom.trim()) {
      obj.checkinfrom = "Check in from time is required!";
    }
    if (!data.checkinuntil.trim()) {
      obj.checkinuntil = "Check in until time is required!";
    }
    if (!data.checkoutfrom.trim()) {
      obj.checkoutfrom = "Check out from time is required!";
    }
    if (!data.checkoutuntil.trim()) {
      obj.checkoutuntil = "Check out until time is required!";
    }
    return obj;
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  }, [errors]);
  return (
    <div className="py-5">
      <h4 className="font-bold">House Rules</h4>
      <div className="grid md:grid-cols-2 gap-4 my-5">
        <div className="p-5 rounded-md border grid grid-cols-1 gap-5">
          <h4 className="font-bold">
            What are your check-in and check-out times?
          </h4>
          <CheckInOut
            handleOnChange={handleOnChange}
            defaultValue={formData}
            type="in"
            errors={errors}
          />
          <CheckInOut
            handleOnChange={handleOnChange}
            defaultValue={formData}
            type="out"
            errors={errors}
          />
          <hr className="py-2" />

          <CustomRadio
            label="Do you allow children?"
            name="parking-type"
            handleOnChange={handleOnChange}
            options={["Yes", "No"]}
          />

          <CustomRadio
            label="Do you allow pets?"
            name="parking-type"
            handleOnChange={handleOnChange}
            options={["Yes", "Upon request", "No"]}
          />
          <CustomRadio
            label="Do you allow pets for free?"
            name="parking-type"
            handleOnChange={handleOnChange}
            options={["Yes, pets can stay for free", "No"]}
          />
          <input
            type="number"
            placeholder="Price in BDT per night (If applicable)"
            className="mx-2"
          />

          <hr className="py-2" />

          <Button className="w-full" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;
