import Backlink from "@/components/core/backlink/backlink";
import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { roomFeatures } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RoomFeatures = () => {
  // router
  const router = useRouter();
  // roomData
  const { roomData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // formData
  const [formData, setFormData] = useState(
    roomData.roomFeatures
      ? roomData.roomFeatures
      : {
          generalAmenities: [],
          outdoorsAndViews: [],
          foodAndDrink: [],
          mainView: "",
        }
  );
  // edited
  const [edited, setEdited] = useState(false);
  // errors
  const [errors, setErrors] = useState(edited ? formData : {});
  // handle inputs
  const handleOnChange = (e) => {
    // getter
    const { name, value } = e.target;
    // setter
    setFormData({ ...formData, [name]: value });
    // editor
    if (!edited) {
      setEdited(true);
    }
  };
  // handle submit
  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };
  // validator
  const validator = (data) => {
    // scaffolder
    let obj = {};
    // validation
    if (!data.generalAmenities.length) {
      obj.generalAmenities = "At least select one please!";
    }
    if (!data.outdoorsAndViews.length) {
      obj.outdoorsAndViews = "At least select one please!";
    }
    if (!data.foodAndDrink.length) {
      obj.foodAndDrink = "At least select one please!";
    }

    if (data.outdoorsAndViews.length) {
      if (formData.outdoorsAndViews.find((item) => item === "View")) {
        if (!data.mainView.trim()) {
          obj.mainView = "Main view is required!";
        }
      }
    }
    // errors
    return obj;
  };
  // useEffect > dispatch > setCookies > router
  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // dispatch
      dispatch(
        roomFeatures({
          roomFeatures: formData,
        })
      );
      // setCookies
      setCookie("roomData", { ...roomData, roomFeatures: formData }, "1h");
      // router
      router.push("/register/hotel/room-name");
    }
  }, [errors]);
  // edited true
  useEffect(() => {
    setEdited(true);
  }, []);
  return (
    <div className="section-d max-w-[500px]">
      <Backlink link="/register/hotel/bath-details" text="Bathroom details" />
      <h3 className="font-bold">What can guests use in this room?</h3>
      <div className="grid grid-cols-1 gap-5 my-10">
        <CustomCheckbox
          options={[
            "Clothes rack",
            "flat-screenTV",
            "Air conditioning",
            "Lines",
            "Desk",
            "Wake-up service",
            "Towels",
            "Wardrobe or closet",
            "Heating",
            "Fan",
            "Safe",
            "Towels/Sheets (extra free)",
            "Entire unit located on ground floor",
          ]}
          name="generalAmenities"
          label="General amenities"
          defaultValue={formData.generalAmenities}
          handleOnChange={handleOnChange}
        />
        <InputError error={errors.generalAmenities} />
        <hr />
        <div className="grid grid-cols-1 gap-3">
          <CustomCheckbox
            options={["Balcony", "Terrce", "View"]}
            name="outdoorsAndViews"
            label="Outdoors and views"
            defaultValue={formData.outdoorsAndViews}
            handleOnChange={handleOnChange}
          />
          <InputError error={errors.outdoorsAndViews} />
          {formData.outdoorsAndViews.length ? (
            <>
              {formData.outdoorsAndViews.find((item) => item === "View") ? (
                <div className="grid grid-cols-1 gap-2">
                  <label>{`What's the main view from this room`}</label>
                  <input
                    name="mainView"
                    onChange={handleOnChange}
                    defaultValue={formData.mainView}
                  />
                </div>
              ) : null}
            </>
          ) : null}
        </div>
        <hr />
        <CustomCheckbox
          options={[
            "Electric kettle",
            "Tea/Coffee maker",
            "Dining area",
            "Dining table",
            "Microwave",
          ]}
          name="foodAndDrink"
          label="Food and drink"
          defaultValue={formData.foodAndDrink}
          handleOnChange={handleOnChange}
        />
        <InputError error={errors.foodAndDrink} />
      </div>
      <Button onClick={handleOnSubmit}>Next</Button>
    </div>
  );
};

export default RoomFeatures;
