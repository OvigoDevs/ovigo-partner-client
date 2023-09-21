import CustomRadio from "@/components/core/custom-radio/custom-radio";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { hotelInformation } from "@/redux/features/register_slice";
import { setCookie } from "@/lib/cookie";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import Backlink from "@/components/core/backlink/backlink";
import { useQuery } from "@tanstack/react-query";

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
          hotelName: "",
          hotelRating: "",
          propertyManagementEntity: "",
          managementEntityName: "",
        }
  );

  // const [primaryPlaceName, setPrimaryPlaceName] = useState(null);

  const { district, division, subDistrict } = hotelData.hotelAddress;

  //!useTanStack
  const { isLoading, data: allPlaces = [] } = useQuery(
    {
      queryKey: [`/allTouristSpot/hotelAddPlace`],
      queryFn: async () => {
        if (division && district && subDistrict) {
          const res = await fetch(
            `https://ovigo-backend-dhtei9k72-nazmulbhuyian.vercel.app/allTouristSpot/hotelAddPlace`,
            {
              method: "POST", // Use the GET method
              headers: {
                "Content-Type": "application/json",
              },
              // Send data in the request body
              body: JSON.stringify({
                division,
                district,
                sub_district: subDistrict,
              }),
            }
          );
          const data = await res.json();
          return data;
        }
        return {}; // Return an empty object when the values are not provided
      },
    },
    {
      enabled: division !== "" && district !== "" && subDistrict !== "",
    }
  );
  console.log(allPlaces);
  const seenPrimaryPlaceNames = {};

  // Use the filter method to keep only unique objects based on primary_place_name
  const uniqueArray = allPlaces?.data?.filter((item) => {
    const { primary_place_name } = item;

    if (!seenPrimaryPlaceNames[primary_place_name]) {
      seenPrimaryPlaceNames[primary_place_name] = true;
      return true;
    }

    return false;
  });

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

  //handlePrimaryPlaceName
  const handlePrimaryPlaceName = (e) => {
    setFormData({ ...formData, placeName: e.target.value });

    fetch(
      "https://ovigo-backend-dhtei9k72-nazmulbhuyian.vercel.app/allTouristSpot/hotelNearSpot",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ place_name: e.target.value }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log("spot name data", data))
      .catch((err) => console.log(err));
  };
  // console.log("primary-place-name: ", primaryPlaceName);

  //TODO: spot_name working, and input verify working and add cold loading animation tomorrow

  // on submit
  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };
  // validator
  const validator = (data) => {
    let obj = {};
    if (!data.hotelName.trim()) {
      obj.hotelName = "Property name is required!";
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
      router.push("/register/hotel/popular-facilities");
    }
  }, [errors]);
  useEffect(() => {
    setEdited(true);
  }, []);

  if (isLoading) {
    return (
      <h2 className="text-4xl text-red-600 text-center">Loading...........</h2>
    );
  }
  return (
    <div className="section-d max-w-[500px]">
      <Backlink link="/register/hotel/hotel-address" text="Hotel address" />
      <h3 className="font-bold">Hotel information</h3>
      <div className="grid grid-cols-1 gap-5 my-5">
        <h4>Tell us about your hotel</h4>

        <div className="grid grid-cols-1 gap-8">
          <p>{`Whats's the name of your hotel?`}</p>
          <div className="grid grid-cols-1 gap-2">
            <label>Hotel Name</label>
            <input
              className="form-input"
              name="hotelName"
              onChange={handleOnChange}
              defaultValue={formData.hotelName}
            />
            <InputError error={errors.hotelName} />
            <p className="text-gray-400 dark:text-gray-600 text-xs">
              Guest will see this name when they search place to stay
            </p>
          </div>

          <div className="mt-4">
            <label
              htmlFor="place"
              className="text-black dark:text-white font-semibold mb-2"
            >
              Choose your place
            </label>
            <select
              onChange={handlePrimaryPlaceName}
              className="form-input w-full text-black dark:text-white mt-3"
              id="place"
            >
              {uniqueArray.map((allPlace) => (
                <option key={allPlace._id} value={allPlace.primary_place_name}>
                  {allPlace.primary_place_name}
                </option>
              ))}
            </select>
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
                      className="form-input"
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
