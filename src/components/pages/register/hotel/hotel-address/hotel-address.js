"use client";

import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { hotelAddress } from "@/redux/features/register_slice";
import { Lightbulb } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HotelAddress = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { hotelData } = useSelector((state) => state.registerData);
  const [address, setAddress] = useState({
    country: "Bangladesh",
    streetAddress: "",
    zipCode: "",
    city: "",
  });
  const [edited, setEdited] = useState(false);
  const [errors, setErrors] = useState(edited ? address : {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    if (!edited) {
      setEdited(true);
    }
  };

  const handleSubmit = () => {
    setErrors(validator(address));
  };
  const validator = (data) => {
    let obj = {};
    if (!data.streetAddress.trim()) {
      obj.streetAddress = "Street address is required!";
    }
    if (!data.zipCode.trim()) {
      obj.zipCode = "Street address is required!";
    }
    if (!data.city.trim()) {
      obj.city = "Street address is required!";
    }

    return obj;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // submit form
      dispatch(
        hotelAddress({
          hotelAddress: address,
        })
      );
      setCookie("hotelData", { ...hotelData, hotelAddress: address }, "1h");
      router.push("/register/hotel/hotel-information");
    }
  }, [errors]);
  useEffect(() => {
    setEdited(true);
    if (hotelData.hotelAddress) {
      setAddress(hotelData.hotelAddress);
    }
  }, []);
  return (
    <div className="py-5">
      <Backlink
        link="/register/hotel/hotel-type-confirmation"
        text="Hotel type confirmation"
      />
      <p>Where is the property that you are listing?</p>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="mt-5 space-y-3">
            <div className="grid grid-cols-1 gap-2">
              <label>Country/Region</label>
              <input
                className="form-input"
                name="country"
                readOnly
                defaultValue={address.country}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>Street Name and House Number</label>
              <input
                className="form-input"
                name="streetAddress"
                type="text"
                value={address.streetAddress}
                onChange={handleInputChange}
                placeholder="Enter Hotel Address"
              />
              <InputError error={errors.streetAddress} />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>ZIP Code</label>
              <input
                className="form-input"
                name="zipCode"
                type="number"
                value={address.zipCode}
                onChange={handleInputChange}
                placeholder="ZIP Code of the location"
              />
              <InputError error={errors.zipCode} />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>City</label>
              <input
                className="form-input"
                name="city"
                type="text"
                value={address.city}
                onChange={handleInputChange}
                placeholder="Enter Hotel City"
              />
              <InputError error={errors.city} />
            </div>
          </div>
          <hr className="my-5" />
          <Button className="max-w-[150px]" onClick={handleSubmit}>
            Next
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 py-5 pl-5">
          <div className="flex gap-3 p-2 border rounded-md">
            <IconWrapper>
              <ThumbsUp className="mt-[4px]" />
            </IconWrapper>
            <div className="space-y-3">
              <h3 className="font-semibold">
                What needs to be included in my address?
              </h3>
              <ul className="list-disc space-y-1">
                <li>
                  include both your street name and number for the entire
                  property
                </li>
                <li>the floor number in address line 2 if relevant</li>
                <li>individual apartment or floor can be shared later</li>
                <li>provide the zip code</li>
                <li>spell the street name correctly</li>
                <li>
                  use the physical address of the property, not your office or
                  home address
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3 p-2 border rounded-md">
            <IconWrapper>
              <Lightbulb className="mt-[4px]" />
            </IconWrapper>
            <div className="space-y-3">
              <h3 className="font-semibold">
                Why do i need to add my address?
              </h3>
              <p>
                Once a guest book your property, this is the address will be
                shared with them. It&apos;s important that it&apos;s correct so
                guest can easily find your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAddress;
