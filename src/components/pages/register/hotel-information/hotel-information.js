import CustomRadio from "@/components/core/custom-radio/custom-radio";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { hotelInformation } from "@/redux/features/register_slice";
import { setCookie } from "@/lib/cookie";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import Backlink from "@/components/core/backlink/backlink";

const HotelInformation = () => {
  // router instance
  const router = useRouter();
  // redux data
  const { hotelData } = useSelector((state) => state.registerData);
  const dispatch = useDispatch();
  // form state
  const [formData, setFormData] = useState(
    hotelData.hotelInformation
      ? hotelData.hotelInformation
      : {
          propertyName: "",
          hotelRating: "",
          propertyManagementEntity: "",
          managementEntityName: "",
        }
  );
  // is edited
  const [edited, setEdited] = useState(false);
  // error state
  const [errors, setErrors] = useState(edited ? formData : {});
  // input handler
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
  // validator
  const validator = (data) => {
    let obj = {};
    if (!data.propertyName.trim()) {
      obj.propertyName = "Property name is required!";
    }
    if (!data.hotelRating.trim()) {
      obj.hotelRating = "Hotel rating is required!";
    }
    if (!data.propertyManagementEntity.trim()) {
      obj.propertyManagementEntity = "Property management entity is required!";
    }
    if (data.propertyManagementEntity.trim()) {
      if (data.propertyManagementEntity === "Yes") {
        if (!data.managementEntityName.trim()) {
          obj.managementEntityName = "Management entity name is required!";
        }
      }
    }

    return obj;
  };
  // useEffect > dispatch > setCookie > navigate with router
  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // dispatch
      dispatch(
        hotelInformation({
          hotelInformation: formData,
        })
      );
      // setcookie
      setCookie(
        "hotelData",
        { ...hotelData, hotelInformation: formData },
        "1h"
      );
      // navigate
      router.push("/register/popular-facilities");
    }
  }, [errors]);
  useEffect(() => {
    setEdited(true);
  }, []);
  return (
    <div className="section-d max-w-[500px]">
      <Backlink link="/register/hotel-address" text="Hotel address" />
      <h3 className="font-bold">Hotel information</h3>
      <div className="grid grid-cols-1 gap-5 my-5">
        <h4>Tell us about your hotel</h4>

        <div className="grid grid-cols-1 gap-8">
          <p>{`Whats's the name of your hotel?`}</p>
          <div className="grid grid-cols-1 gap-2">
            <label>Property name</label>
            <input
              name="propertyName"
              onChange={handleOnChange}
              defaultValue={formData.propertyName}
            />
            <InputError error={errors.propertyName} />
            <p className="text-gray-400 dark:text-gray-600 text-xs">
              Guest will see this name when they search place to stay
            </p>
          </div>
          <hr />
          <div className="grid grid-cols-1 gap-2">
            <CustomRadio
              options={[
                "N/A",
                "1 star",
                "2 stars",
                "3 stars",
                "4 stars",
                "5 stars",
              ]}
              defaultValue={formData?.hotelRating}
              handleOnChange={handleOnChange}
              name="hotelRating"
              label="What is the rating of your hotel?"
            />
            <InputError error={errors.hotelRating} />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <CustomRadio
              options={["Yes", "No"]}
              defaultValue={formData?.propertyManagementEntity}
              handleOnChange={handleOnChange}
              name="propertyManagementEntity"
              label="Are you a property management company or a part of a group or chain?"
            />
            <InputError error={errors.propertyManagementEntity} />
            {formData.propertyManagementEntity ? (
              <>
                {formData.propertyManagementEntity === "Yes" ? (
                  <div className="grid grid-cols-1 gap-2">
                    <label>Name of your company, group, or chain</label>
                    <input
                      name="managementEntityName"
                      onChange={handleOnChange}
                      defaultValue={formData.managementEntityName}
                    />
                    <InputError error={errors.managementEntityName} />
                  </div>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </div>
      <Button onClick={handleOnSubmit}>Next</Button>
    </div>
  );
};

export default HotelInformation;
