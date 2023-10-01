import Loader from "@/components/Loader/Loader";
import CustomRadio from "@/components/core/custom-radio/custom-radio";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { hotelInformation } from "@/redux/features/register_slice";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const HotelInformation = () => {
  // router instance
  const router = useRouter();
  //* redux data
  const { hotelData } = useSelector((state) => state.registerData);
  const dispatch = useDispatch();

  const [spotName, setSpotName] = useState([]);
  const [selected, setSelected] = useState([]);
  const [primaryPlaceName, setPrimaryPlaceName] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [placeNameToggleIcon, setPlaceNameToggleIcon] = useState(false);

  const getDivisionValue = (e) => {
    setDivisionToggleIcon(false);
  };

  //? form state
  const [formData, setFormData] = useState(
    hotelData.hotelInformation
      ? hotelData.hotelInformation
      : {
          hotelName: "",
          hotelRating: "",
          propertyManagementEntity: "",
          managementEntityName: "",
          distanceToSpot: "",
          spotNames: selected,
        }
  );

  const { district, division, subDistrict } = hotelData.hotelAddress;

  //!useTanStack
  const { isLoading, data: allPlaces = [] } = useQuery(
    {
      queryKey: [`/allTouristSpot/hotelAddPlace`],
      queryFn: async () => {
        if (division && district && subDistrict) {
          const res = await fetch(
            `http://159.223.78.171:5000/allTouristSpot/hotelAddPlace`,
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
  const handlePlaceName = (item) => {
    setPrimaryPlaceName(item?.primary_place_name);
    //placename save into localhost
    setFormData({
      ...formData,
      placeName: item?.spot_name,
      primaryPlaceName: item?.primary_place_name,
    });
    setPlaceName(item?.spot_name);

    fetch("http://159.223.78.171:5000/allTouristSpot/hotelNearSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        place_name:
          item.primary_place_name ||
          hotelData.hotelInformation.primaryPlaceName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSpotName(data);
      })
      .catch((err) => console.log(err));
  };

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
    if (!data.distanceToSpot.trim()) {
      obj.distanceToSpot = "Distance to hotel is required!";
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

  useEffect(() => {
    setFormData({ ...formData, spotNames: selected });
  }, [selected]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="grid grid-cols-2 lg:gap-10 lg:my-14 my-5">
      <div>
        <h3 className="title">
          <span className="text-[#26DE81]">Hotel </span> information
        </h3>
        <h4 className="sub_title text-black mt-3">Tell us about your hotel</h4>
        <div className="grid grid-cols-1 gap-5 my-5">
          <div className="card">
            <div className="grid grid-cols-1 gap-8">
              <p className="sub_title text-black">{`Whats's the name of your hotel?`}</p>
              <div className="grid grid-cols-1 gap-2">
                <label>Property name</label>
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

              {/* //!spot name and primary place name */}
              <div>
                <label htmlFor="division">Place Name</label>
                <div
                  className="relative w-ful mt-3 rounded cursor-pointer"
                  onClick={() => setPlaceNameToggleIcon(!placeNameToggleIcon)}
                >
                  <input
                    type="text"
                    placeholder="Choose your place name"
                    value={placeName}
                    className="form-input w-full"
                  />
                  <InputError error={errors.subDistrict} />
                  <div className="absolute right-3 top-2">
                    {placeNameToggleIcon ? (
                      <>
                        <FiChevronUp className="text-gray-900 dark:text-white text-2xl cursor-pointer" />
                      </>
                    ) : (
                      <>
                        <FiChevronDown className="text-gray-900 dark:text-white text-2xl cursor-pointer" />
                      </>
                    )}
                  </div>
                  {placeNameToggleIcon && (
                    <ul className="dark:bg-slate-800 bg-[#f2f3f3] px-2 pt-2 pb-3 dark:text-white text-gray-900">
                      {allPlaces?.data?.map((item) => (
                        <li
                          key={item?._id}
                          // onClick={() =>
                          //   setPrimaryPlaceName(item?.primary_place_name)
                          // }
                          className="cursor-pointer text-base my-2"
                        >
                          <span onClick={() => handlePlaceName(item)}>
                            {item?.spot_name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* //spot name start here  */}
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <label>Near Spot Name</label>
                  <p className="text-gray-400 dark:text-gray-600">
                    Select all nearest spot name
                  </p>
                </div>
                <ul className="flex flex-wrap items-start justify-start gap-2">
                  {spotName?.data?.map((item) => {
                    return (
                      <li
                        key={item._id}
                        className={`relative px-2 py-1 rounded-md border text-xs   hover:border-gray-600 lg:cursor-pointer flex items-center justify-center gap-2 ${
                          selected.find((li) => li._id === item._id)
                            ? "border-red-400 hover:border-red-600"
                            : "dark:border-gray-800 dark:hover:border-gray-400"
                        }`}
                        onClick={() => {
                          if (selected.find((li) => li._id === item._id)) {
                            setSelected([
                              ...selected.filter((li) => li._id !== item._id),
                            ]);
                          } else {
                            setSelected([...selected, item]);
                          }
                        }}
                      >
                        {item.spot_name}
                        {selected.find((li) => li._id === item._id) ? (
                          <div className="border-l pl-1">
                            <IconWrapper>
                              <X className="text-red-400 hover:text-red-600" />
                            </IconWrapper>
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
                <InputError error={errors.breakfastsTypes} />
              </div>
              {/* //spot name end here  */}
              {/* //*distance to spot name */}
              <div className="grid grid-cols-1 gap-2 mt-2">
                <label>Spot Name to Distance</label>
                <input
                  className="form-input"
                  placeholder="e.g. 1 km distance"
                  name="distanceToSpot"
                  onChange={handleOnChange}
                  defaultValue={formData.distanceToSpot}
                />
                <InputError error={errors.distanceToSpot} />
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
            <div className="flex items-center justify-end gap-5 mt-4">
            <div>
              <Link href="/register/hotel/hotel-address" className="back_btn">
                Back
              </Link>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleOnSubmit}>Continue</Button>
            </div>
          </div>
          </div>         
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HotelInformation;
