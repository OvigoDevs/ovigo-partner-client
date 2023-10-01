import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { popularFacilities } from "@/redux/features/register_slice";
import { Lightbulb } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  // router
  const router = useRouter();
  // hoteldata
  const { hotelData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // formdata
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  // errors
  const [errors, setErrors] = useState(null);
  // input value handler
  const handleOnChange = (e) => {
    setSelectedFacilities(e.target.value);
  };
  //on submit
  const handleOnSubmit = () => {
    if (selectedFacilities.length) {
      errors && setErrors(null);
      dispatch(
        popularFacilities({
          popularFacilities: selectedFacilities,
        })
      );
      setCookie(
        "hotelData",
        { ...hotelData, popularFacilities: selectedFacilities },
        "1h"
      );
      router.push("/register/hotel/breakfast-details")
    } else {
      setErrors("At least select one!");
    }
  };

  useEffect(() => {
    if (hotelData.popularFacilities) {
      setSelectedFacilities(hotelData.popularFacilities);
    }
  }, [hotelData]);
  return (
    <div className="py-5">      
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5 pt-5">
        <div className="space-y-5 card">
          <CustomCheckbox
            options={options}
            handleOnChange={handleOnChange}
            name="popular-facilites"
            defaultValue={selectedFacilities}
            label="What guest can use at your hotel?"
          />
          <InputError error={errors} />
          <div className="flex items-center justify-end gap-5 mt-4">
            <div>
              <Link href="/register/hotel/hotel-information" className="back_btn">
                Back
              </Link>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleOnSubmit}>Continue</Button>
            </div>
          </div>
        </div>
        <div className="flex gap-2 py-7 px-5 border rounded-md mb-auto">
          <IconWrapper>
            <Lightbulb className="mt-[4px] text-[#26DE81]" />
          </IconWrapper>
          <div>
            <h3 className="font-semibold">
              {`What if I don't see a facility I offer?`}
            </h3>
            <p className="mt-3">
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
