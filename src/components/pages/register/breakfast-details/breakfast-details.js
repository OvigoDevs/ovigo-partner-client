import Backlink from "@/components/core/backlink/backlink";
import CustomRadio from "@/components/core/custom-radio/custom-radio";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { breakfastDetails } from "@/redux/features/register_slice";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BreakfastDetails = () => {
  const breakfasts = [
    {
      id: 0,
      text: "A la carte",
    },
    {
      id: 1,
      text: "American",
    },
    {
      id: 2,
      text: "Asian",
    },
    {
      id: 3,
      text: "Breakfast to go",
    },
    {
      id: 4,
      text: "Buffet",
    },
    {
      id: 5,
      text: "Continental",
    },
    {
      id: 6,
      text: "Full English/Irish",
    },
    {
      id: 7,
      text: "Gluten free",
    },
    {
      id: 8,
      text: "Halal",
    },
    {
      id: 9,
      text: "Italian",
    },
    {
      id: 10,
      text: "Koshar",
    },
    {
      id: 11,
      text: "Vegan",
    },
    {
      id: 12,
      text: "Vegetarian",
    },
  ];

  const [selected, setSelected] = useState([]);

  // router
  const router = useRouter();
  // redux
  const { hotelData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // formdata
  const [formData, setFormData] = useState(
    hotelData.breakfastDetails
      ? hotelData.breakfastDetails
      : {
          serveToGuest: "",
          priceIncluded: "",
          pricePerPersonAndDay: "",
          breakfastsTypes: selected,
        }
  );
  // setFormData(hotelData.breakfastDetails);
  // edited
  const [edited, setEdited] = useState(false);
  // errors
  const [errors, setErrors] = useState(edited ? formData : {});
  // onchange
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!edited) {
      setEdited(true);
    }
  };
  // onsubmit
  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };
  // validation
  const validator = (data) => {
    let obj = {};

    if (!data.serveToGuest.trim()) {
      obj.serveToGuest = "This input is required!";
    }
    if (data.serveToGuest) {
      if (data.serveToGuest === "Yes") {
        if (!data.priceIncluded.trim()) {
          obj.priceIncluded = "This input is required!";
        }
        if (!data.pricePerPersonAndDay.trim()) {
          obj.pricePerPersonAndDay = "This input is required!";
        }
        if (!data.breakfastsTypes.length) {
          obj.breakfastsTypes = "Select at least one!!";
        }
      }
    }
    return obj;
  };
  // useEffect > dispatch > setCookie > router
  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // formData

      dispatch(
        breakfastDetails({
          breakfastDetails: formData,
        })
      );

      setCookie(
        "hotelData",
        { ...hotelData, breakfastDetails: formData },
        "1h"
      );

      router.push("/register/parking-details");
    }
  }, [errors]);

  useEffect(() => {
    setFormData({ ...formData, breakfastsTypes: selected });
  }, [selected]);

  // set default values
  useEffect(() => {
    if (hotelData.breakfastDetails) {
      setSelected(hotelData.breakfastDetails.breakfastsTypes);
    }
  }, [hotelData]);
  useEffect(() => {
    setEdited(true);
  }, []);
  return (
    <div className="grid grid-cols-1 gap-2 section-d max-w-[500px]">
      <Backlink link="/register/popular-facilities" text="Popular facilities" />
      <h2 className="font-bold">Breakfast details</h2>
      <div className="grid grid-cols-1 gap-5">
        <CustomRadio
          label="Do you serve guests breakfast"
          name="serveToGuest"
          handleOnChange={handleOnChange}
          options={["Yes", "No"]}
          defaultValue={formData?.serveToGuest}
        />
        <InputError error={errors.serveToGuest} />
        {formData.serveToGuest ? (
          <>
            {formData.serveToGuest === "Yes" ? (
              <>
                <CustomRadio
                  label="Is breakfast included in the price guests pay?"
                  name="priceIncluded"
                  handleOnChange={handleOnChange}
                  options={["Yes, it's included", "No, it costs extra"]}
                  defaultValue={formData?.priceIncluded}
                />
                <InputError error={errors.priceIncluded} />
                <div className="grid grid-cols-1 gap-2">
                  <label>Breakfast price per person, per day</label>
                  <input
                    name="pricePerPersonAndDay"
                    placeholder="e.g. 500"
                    onChange={handleOnChange}
                    defaultValue={formData.pricePerPersonAndDay}
                  />
                  <InputError error={errors.pricePerPersonAndDay} />
                  <p className="text-gray-400 dark:text-gray-800">
                    Including all taxes and fees
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <label>What type of breakfast do you offer?</label>
                    <p className="text-gray-400 dark:text-gray-600">
                      Select all that apply
                    </p>
                  </div>
                  <ul className="flex flex-wrap items-start justify-start gap-2">
                    {breakfasts.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className={`relative px-2 py-1 rounded-md border text-xs   hover:border-gray-600 lg:cursor-pointer flex items-center justify-center gap-2 ${
                            selected.find((li) => li.id === item.id)
                              ? "border-red-400 hover:border-red-600"
                              : "dark:border-gray-800 dark:hover:border-gray-400"
                          }`}
                          onClick={() => {
                            if (selected.find((li) => li.id === item.id)) {
                              setSelected([
                                ...selected.filter((li) => li.id !== item.id),
                              ]);
                            } else {
                              setSelected([...selected, item]);
                            }
                          }}
                        >
                          {item.text}
                          {selected.find((li) => li.id === item.id) ? (
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
                </div>
              </>
            ) : null}
          </>
        ) : null}
      </div>
      <Button onClick={handleOnSubmit} className="max-w-[150px] mt-5">Next</Button>
    </div>
  );
};

export default BreakfastDetails;
