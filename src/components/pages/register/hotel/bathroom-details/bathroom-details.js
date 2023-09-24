import Backlink from "@/components/core/backlink/backlink";
import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import CustomRadio from "@/components/core/custom-radio/custom-radio";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { bathroomDetails } from "@/redux/features/register_slice";
import { Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BathroomDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { roomData } = useSelector((state) => state.registerData);
console.log("ay ",roomData)
  const [formData, setFormData] = useState(
    roomData.bathroomDetails
      ? roomData.bathroomDetails
      : {
          privateBathroom: "",
          bathroomItems: [],
        }
  );
  // is edited
  const [edited, setEdited] = useState(false);
  // error state
  const [errors, setErrors] = useState(edited ? formData : {});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!edited) {
      setEdited(true);
    }
  };

  // on submit
  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };

  const validator = (data) => {
    let obj = {};
    if (!data.privateBathroom.trim()) {
      obj.privateBathroom = "Bathroom type is required!";
    }
    if (data.bathroomItems.length === 0) {
      obj.bathroomItems = "At least select one!";
    }

    return obj;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // dispatch
      dispatch(
        bathroomDetails({
          bathroomDetails: formData,
        })
      );
      // setcookie
      setCookie("roomData", { ...roomData, bathroomDetails: formData }, "1h");
      // navigate
      router.push("/register/hotel/room-features");
    }
  }, [errors]);

  useEffect(() => {
    setEdited(true);
  }, []);

  return (
    <div className="section-d flex items-start justify-start gap-[1rem]">
      <div className="max-w-[500px] w-[500px]">
        <Backlink link="/register/hotel/room-details" text="Room details" />
        <h3 className="font-bold">Bathroom details</h3>
        <div className="grid grid-cols-1 gap-5 py-5">
          <CustomRadio
            defaultValue={formData.privateBathroom}
            options={["Yes", "No"]}
            name="privateBathroom"
            label="Is bathroom private?"
            handleOnChange={handleOnChange}
          />
          <InputError error={errors.privateBathroom} />
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
            name="bathroomItems"
            defaultValue={formData.bathroomItems}
          />
          <InputError error={errors.bathroomItems} />
        </div>
        <Button className="mt-10 w-[100px]" onClick={handleOnSubmit}>
          Next
        </Button>
      </div>
      <div className="flex items-start justify-start gap-3 p-2 rounded-md border dark:border-gray-800 max-w-[250px]">
        <IconWrapper>
          <Lightbulb className="mt-[3px]" />
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
