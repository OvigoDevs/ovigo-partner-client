import CustomRadio from "@/components/core/custom-radio/custom-radio";
import { Button } from "@/components/ui/button";
import CheckInOut from "./check-in-out";
import { useEffect, useState } from "react";
import InputError from "@/components/core/input-error/input-error";

const HouseRules = () => {
  const [formData, setFormData] = useState({
    checkinfrom: "",
    checkinuntil: "",
    checkoutfrom: "",
    checkoutuntil: "",
    allowChildren: "",
    allowPet: "",
    petFee: ""
  });
  const [errors, setErrors] = useState(formData);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
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
    if (!data.allowChildren.trim()) {
      obj.allowChildren = "Selection is required!";
    }
    if (!data.allowPet.trim()) {
      obj.allowPet = "Selection is required!";
    }

    if (data.allowPet) {
      if (!data.petFee.trim()) {
        obj.petFee = "Pet fee is required!";
      }
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
            name="allowChildren"
            handleOnChange={handleOnChange}
            options={["Yes", "No"]}
          />
          <InputError error={errors.allowChildren} />

          <CustomRadio
            label="Do you allow pets?"
            name="allowPet"
            handleOnChange={handleOnChange}
            options={[
              "Yes, pets can stay for free",
              "Yes, pets can stay for paid",
              "No",
            ]}
          />
          <InputError error={errors.allowPet} />

          {formData.allowPet === "Yes, pets can stay for paid" ? (
            <input
              type="number"
              name="petFee"
              placeholder="Price in BDT per night (If applicable)"
              className="mx-2"
              onChange={handleOnChange}
            />
          ) : null}

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
