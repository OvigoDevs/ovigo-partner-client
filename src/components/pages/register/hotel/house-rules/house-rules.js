import Backlink from "@/components/core/backlink/backlink";
import CustomRadio from "@/components/core/custom-radio/custom-radio";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { houseRules } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckInOut from "./check-in-out";

const HouseRules = () => {
  // router
  const router = useRouter();
  // redux
  const { hotelData } = useSelector((state) => state.registerData);

  // dispatch
  const dispatch = useDispatch();
  // formdata
  const [formData, setFormData] = useState(
    hotelData.houseRules
      ? hotelData.houseRules
      : {
          checkinfrom: "",
          checkinuntil: "",
          checkoutfrom: "",
          checkoutuntil: "",
          allowChildren: "",
          allowPet: "",
          petFee: "",
        }
  );
  //edited
  const [edited, setEdited] = useState(false);
  //errors
  const [errors, setErrors] = useState(edited ? formData : {});
  // input handler
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!edited) {
      setEdited(true);
    }
  };
  // submit handler
  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };
  // validator
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

    // if (data.allowPet) {
    //   if (data.allowPet !== "No") {
    //     if (!data.petFee.trim()) {
    //       obj.petFee = "Pet fee is required!";
    //     }
    //   }
    // }

    return obj;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // dispatch
      dispatch(
        houseRules({
          houseRules: formData,
        })
      );
      // setcookie
      setCookie("hotelData", { ...hotelData, houseRules: formData }, "1h");
      // routing
      router.push("/register/hotel/hotel-details-completion");
    }
  }, [errors]);

  // useEffect > edited
  useEffect(() => {
    setEdited(true);
  }, []);
  return (
    <div className="py-5">
      <Backlink link="/register/hotel/languages" text="Languages" />
      <h4 className="font-bold">House Rules</h4>
      <div className="grid lg:grid-cols-2 gap-4 my-5">
        <div className="grid grid-cols-1 gap-5">
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
            defaultValue={formData.allowChildren}
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
            defaultValue={formData.allowPet}
          />
          <InputError error={errors.allowPet} />

          {formData?.allowPet === "Yes, pets can stay for paid" ? (
            <>
              <input
                className="form-input mx-2"
                type="number"
                name="petFee"
                placeholder="Price in BDT per night (If applicable)"
                onChange={handleOnChange}
                defaultValue={formData.petFee}
              />
              <InputError error={errors.petFee} />
            </>
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
