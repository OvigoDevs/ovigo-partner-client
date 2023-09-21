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
import { districts } from "../allPlacesData/districts";
import { subDistricts } from "../allPlacesData/sub-district";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { divisions } from "../allPlacesData/divisions";
import { useQuery } from "@tanstack/react-query";

const HotelAddress = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { hotelData } = useSelector((state) => state.registerData);
  const [address, setAddress] = useState({
    country: "Bangladesh",
    streetAddress: "",
    zipCode: "",
  });
  const [edited, setEdited] = useState(false);
  const [errors, setErrors] = useState(edited ? address : {});

  //division, district, and sub-district toggle icon
  const [divisionToggleIcon, setDivisionToggleIcon] = useState(false);
  const [districtToggleIcon, setDistrictToggleIcon] = useState(false);
  const [subDistrictToggleIcon, setSubDistrictToggleIcon] = useState(false);

  //division, district, and sub-district state
  const [allDistricts, setAllDistricts] = useState([]);
  const [allSubDistrict, setAllSubDistrict] = useState([]);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [sub_district, setSubDistrict] = useState("");

  console.log("division:", division, "dist:", district, "sub:", sub_district);
  // get Division, district and sub-district Value
  const getDivisionValue = (e) => {
    setDivision(e.target.textContent);
    setAddress({ ...address, division: e.target.textContent });
    setDivisionToggleIcon(false);
  };

  const getDistrictValue = (e) => {
    setDistrict(e.target.textContent);
    setAddress({ ...address, district: e.target.textContent });
    setSubDistrictToggleIcon(false);
  };

  const getSubDistrictValue = (e) => {
    setSubDistrict(e.target.textContent);
    setAddress({ ...address, subDistrict: e.target.textContent });
    setDistrictToggleIcon(false);
  };

  //get to district from division
  const getDistrictFromDivision = (division) => {
    const getDistrict = districts.filter(
      (district) => district.division_id === division.id
    );
    console.log(getDistrict);
    setAllDistricts(getDistrict);
  };

  // get subDistrict from districts
  const getSubDistrictFromDivision = (district) => {
    const getUpazilla = subDistricts.filter(
      (upazilla) => upazilla.district_id === district.id
    );
    setAllSubDistrict(getUpazilla);
  };

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
    // if (!data.city.trim()) {
    //   obj.city = "Street address is required!";
    // }

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
            {/* //division */}
            <div>
              <label
                htmlFor="division"
                className="text-black dark:text-white text-base font-semibold mb-3"
              >
                Division
              </label>
              <div
                className="relative w-ful mt-3 rounded cursor-pointer"
                onClick={() => setDivisionToggleIcon(!divisionToggleIcon)}
              >
                <input
                  type="text"
                  placeholder="Select Division"
                  value={division}
                  className="form-input w-full"
                />
                <InputError error={errors.division} />
                <div className="absolute right-3 top-2">
                  {divisionToggleIcon ? (
                    <>
                      <FiChevronUp className="text-gray-900 dark:text-white text-2xl cursor-pointer" />
                    </>
                  ) : (
                    <>
                      <FiChevronDown className="text-gray-900 dark:text-white text-2xl cursor-pointer" />
                    </>
                  )}
                </div>
                {divisionToggleIcon && (
                  <ul className="dark:bg-slate-800 bg-[#f2f3f3] px-2 pt-2 pb-3 dark:text-white text-gray-900">
                    {divisions.map((division) => (
                      <li
                        key={division.id}
                        onClick={() => getDistrictFromDivision(division)}
                        className="cursor-pointer text-base my-2"
                      >
                        <span onClick={(e) => getDivisionValue(e)}>
                          {division.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* //District */}
            <div>
              <label
                htmlFor="division"
                className="text-black dark:text-white text-base font-semibold mb-3"
              >
                District
              </label>
              <div
                className="relative w-ful mt-3 rounded cursor-pointer"
                onClick={() => setDistrictToggleIcon(!districtToggleIcon)}
              >
                <input
                  type="text"
                  placeholder="Select District"
                  value={district}
                  className="form-input w-full"
                />
                <InputError error={errors.district} />
                <div className="absolute right-3 top-2">
                  {districtToggleIcon ? (
                    <>
                      <FiChevronUp className="text-gray-900 dark:text-white text-2xl cursor-pointer" />
                    </>
                  ) : (
                    <>
                      <FiChevronDown className="text-gray-900 dark:text-white text-2xl cursor-pointer" />
                    </>
                  )}
                </div>
                {districtToggleIcon && (
                  <ul className="dark:bg-slate-800 bg-[#f2f3f3] px-2 pt-2 pb-3 dark:text-white text-gray-900">
                    {allDistricts?.map((district) => (
                      <li
                        key={district.id}
                        onClick={() => getSubDistrictFromDivision(district)}
                        className="cursor-pointer text-base my-2"
                      >
                        <span onClick={(e) => getDistrictValue(e)}>
                          {district.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {/* //Sub District */}
            <div>
              <label
                htmlFor="division"
                className="text-black dark:text-white text-base font-semibold mb-3"
              >
                Sub District
              </label>
              <div
                className="relative w-ful mt-3 rounded cursor-pointer"
                onClick={() => setSubDistrictToggleIcon(!subDistrictToggleIcon)}
              >
                <input
                  type="text"
                  placeholder="Select Sub District"
                  value={sub_district}
                  className="form-input w-full"
                />
                <InputError error={errors.subDistrict} />
                <div className="absolute right-3 top-2">
                  {subDistrictToggleIcon ? (
                    <>
                      <FiChevronUp className="text-gray-900 dark:text-white text-2xl cursor-pointer" />
                    </>
                  ) : (
                    <>
                      <FiChevronDown className="text-gray-900 dark:text-white text-2xl cursor-pointer" />
                    </>
                  )}
                </div>
                {subDistrictToggleIcon && (
                  <ul className="dark:bg-slate-800 bg-[#f2f3f3] px-2 pt-2 pb-3 dark:text-white text-gray-900">
                    {allSubDistrict?.map((district) => (
                      <li
                        key={district.id}
                        // onClick={() => getSubDistrictFromDivision(district)}
                        className="cursor-pointer text-base my-2"
                      >
                        <span onClick={(e) => getSubDistrictValue(e)}>
                          {district.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
