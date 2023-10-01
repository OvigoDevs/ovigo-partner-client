import CustomRadio from "@/components/core/custom-radio/custom-radio";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { parkingDetails } from "@/redux/features/register_slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ParkingDetails = () => {
  // router
  const router = useRouter();
  // hoteldata
  const { hotelData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // formstate
  const [formData, setFormData] = useState(
    hotelData.parkingDetails
      ? hotelData.parkingDetails
      : {
          available: "",
          reserve: "",
          located: "",
          type: "",
        }
  );
  // edited
  const [edited, setEdited] = useState(false);
  // errors
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
    if (!data.available.trim()) {
      obj.available = "Availability is required!";
    }

    if (data.available) {
      if (data.available !== "No") {
        if (!data.reserve.trim()) {
          obj.reserve = "Reservation is required!";
        }
        if (!data.located.trim()) {
          obj.located = "Location is required!";
        }
        if (!data.type.trim()) {
          obj.type = "Parking type is required!";
        }
      }
    }

    return obj;
  };
  // useEffect > dispatch > setcookie > router
  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // dispatch
      dispatch(
        parkingDetails({
          parkingDetails: formData,
        })
      );
      // setcookie
      setCookie("hotelData", { ...hotelData, parkingDetails: formData }, "1h");
      // routing
      router.push("/register/hotel/languages");
    }
  }, [errors]);

  // set edit status
  useEffect(() => {
    setEdited(true);
  }, []);
  return (
    <div className="grid grid-cols-2 lg:gap-10 gap-5 lg:my-14 my-5">
      <div className="card">
        {" "}
        <p className="sub_title text-black">
          Tell us about the parking situation at your hotel?
        </p>
        <div>
          <div>
            <div className="">
              <CustomRadio
                label="Is parking available To Guests?"
                name="available"
                handleOnChange={handleOnChange}
                options={["Yes, Free", "Yes, Paid", "No"]}
                defaultValue={formData.available}
              />
              <InputError error={errors.available} />
              <hr className="my-5" />
              {formData.available ? (
                <>
                  {formData.available !== "No" ? (
                    <>
                      <CustomRadio
                        label="Do guests need to reserve a parking spot?"
                        name="reserve"
                        handleOnChange={handleOnChange}
                        options={[
                          "Reservation Needed",
                          "No Reservation Needed",
                        ]}
                        defaultValue={formData.reserve}
                      />
                      <InputError error={errors.reserve} />
                      <hr className="my-5" />

                      <CustomRadio
                        label="Where is the parking located?"
                        name="located"
                        handleOnChange={handleOnChange}
                        options={["On site", "Off site"]}
                        defaultValue={formData.located}
                      />
                      <InputError error={errors.located} />
                      <hr className="my-5" />
                      <CustomRadio
                        label="What type of parking is it?"
                        name="type"
                        handleOnChange={handleOnChange}
                        options={["Private", "Public"]}
                        defaultValue={formData.type}
                      />
                      <InputError error={errors.type} />
                    </>
                  ) : null}
                </>
              ) : null}
            </div>
            <div className="flex items-center justify-end gap-5 mt-4">
              <div>
                <Link
                  href="/register/hotel/breakfast-details"
                  className="back_btn"
                >
                  Back
                </Link>
              </div>              
              <Button onClick={handleOnSubmit}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ParkingDetails;
