import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Hotel } from "lucide-react";
import { Newspaper } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { noOfHotels } from "@/redux/features/register_slice";
import { setCookie } from "@/lib/cookie";
import Backlink from "@/components/core/backlink/backlink";
import InputError from "@/components/core/input-error/input-error";

const NoOfHotel = () => {
  const options = [
    {
      id: 1,
      text: "One hotel with one or multiple rooms that guests can book",
      icon: (
        <IconWrapper>
          <Hotel />
        </IconWrapper>
      ),
    },
    {
      id: 2,
      text: "Multiple hotels with one or multiple rooms that guests can book",
      icon: (
        <IconWrapper>
          <Newspaper />
        </IconWrapper>
      ),
    },
  ];
  const router = useRouter();
  const { hotelData } = useSelector((state) => state.registerData);
  const [selectedOption, setSelectedOption] = useState(null);
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();
  const handleOnNext = () => {
    const data = options.filter((item) => item.id === selectedOption)[0];
    const toSet = { id: data.id, text: data.text };
    console.log(data);
    dispatch(
      noOfHotels({
        noOfHotels: toSet,
      })
    );
    setCookie("hotelData", { ...hotelData, noOfHotels: toSet }, "1h");
    router.push("/register/hotel/hotel-type-confirmation");
  };

  useEffect(() => {
    if (hotelData.noOfHotels) {
      setSelectedOption(hotelData.noOfHotels.id);
    }
  }, []);
  return (
    <div className="section-d max-w-[500px]">
      <Backlink link="/register/hotel/hotel-categories" text="Hotel categories" />
      <p>How many hotel are you listing?</p>

      <div className="rounded-md mt-5 grid grid-cols-1 gap-4">
        {options.map((item) => {
          const { id, text, icon } = item;
          return (
            <div
              key={id}
              className={`relative flex gap-4 border p-2 cursor-pointer rounded-md items-center ${
                id === selectedOption
                  ? "border-primary hover:bg-gray-50 dark:hover:bg-[#ffffff20]"
                  : "hover:border-gray-400"
              }`}
              onClick={() => setSelectedOption(id)}
            >
              {id === selectedOption ? (
                <div className={`absolute top-0 right-0 -m-[5px]`}>
                  <IconWrapper>
                    <Check className="bg-primary text-white dark:text-gray-600 rounded-full p-[3px]" />
                  </IconWrapper>
                </div>
              ) : null}
              <div className="flex items-center justify-start gap-2">
                {icon}
                {text}
              </div>
            </div>
          );
        })}
      </div>
      {errors ? <hr className="my-5" /> : null}
      <InputError error={errors} />
      <hr className="my-5" />
      <Button
        className="max-w-[150px]"
        onClick={() => {
          selectedOption ? handleOnNext() : setErrors("Select at least one!");
        }}
      >
        Continue
      </Button>
    </div>
  );
};

export default NoOfHotel;
