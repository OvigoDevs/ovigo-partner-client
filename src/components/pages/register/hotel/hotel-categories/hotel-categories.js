import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { hotelCategories } from "@/redux/features/register_slice";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HotelCategories = () => {
  const hotels = [
    {
      id: -1,
      title: "Hotel",
      description:
        "Accomodation for travellers often with restaurants, meeting rooms, and other guest services",
    },
    {
      id: 1,
      title: "Guesthouse",
      description:
        "Private home with separate living facilities for host and guest",
    },
    {
      id: 2,
      title: "Homestay",
      description:
        "A shared home where the guest has a private room and the host lives and is on site. Some facilites are shared between hosts and guests",
    },
    {
      id: 3,
      title: "Hostel",
      description:
        "Budget accommodations with mostly dorm-style beds and social atmosphere",
    },
    {
      id: 4,
      title: "Capsule Hotel",
      description:
        "Extemely small units or capsules ofereing cheap and basic overnight accommodations",
    },
    {
      id: 5,
      title: "Inn",
      description: "Small property with basic accommodations and a rustic feel",
    },
    {
      id: 6,
      title: "Resort",
      description:
        "A place for relaxation with on-site restaurants, acitvities and often a luxury feel",
    },
    {
      id: 7,
      title: "Lodge",
      description: "Private home with accommodations",
    },
    {
      id: 8,
      title: "Country house",
      description: "Private home in the countyside with simple accommodations",
    },
    {
      id: 9,
      title: "Riad",
      description:
        "Traditional Moroccan accommodations with a courtyard and luxury feel",
    },
    {
      id: 10,
      title: "Bed and breakfast",
      description: "Private home offering overnight stays and breakfast",
    },
    {
      id: 11,
      title: "Condo hotel",
      description:
        "Independent apartments with some hotel facilities like a front desk",
    },
    {
      id: 12,
      title: "Farm Stay",
      description: "Private farm with simple accommodations",
    },
    {
      id: 13,
      title: "Motel",
      description:
        "Roadside hotel usually for motorists, with direct access to parking and fewer amenities",
    },
    {
      id: 14,
      title: "Ryokan",
      description:
        "Traditional Japanese-style accommodations with meal options",
    },
  ];
  const router = useRouter();
  const { hotelData } = useSelector((state) => state.registerData);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();
  const handleOnNext = () => {
    setErrors(null);
    const data = hotels.filter((item) => item.id === selectedHotel)[0];
    dispatch(
      hotelCategories({
        hotelCategories: data,
      })
    );
    setCookie("hotelData", { ...hotelData, hotelCategories: data }, "1h");
    router.push("/register/hotel/no-of-hotel");
  };

  useEffect(() => {
    if (hotelData.hotelCategories) {
      setSelectedHotel(hotelData.hotelCategories.id);
    }
  }, []);
  return (
    <div className="section-d">
      <div className="grid grid-cols-1 gap-2">
        <Backlink link="/register/hotel/service-category" text="Service category" />
        <h3 className="font-bold">Hotel categories</h3>
        <p>
          From the list below, which property category is the best fit for your
          place?
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10">
        {hotels.map((item) => {
          const { id, title, description } = item;
          return (
            <div
              key={id}
              className={`relative p-4 rounded-md border ${
                id === selectedHotel
                  ? "border-primary hover:bg-gray-50 dark:hover:bg-[#ffffff20]"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-200"
              } pb-auto justify-start lg:cursor-pointer`}
              onClick={() => setSelectedHotel(id)}
            >
              {id === selectedHotel ? (
                <div className="absolute top-0 right-0 -m-[5px]">
                  <IconWrapper>
                    <Check className="bg-primary rounded-full p-[2px] text-white dark:text-gray-800 max-w-[13px] max-h-[13px] min-w-[13px] min-h-[13px] w-[13px] h-[13px]" />
                  </IconWrapper>
                </div>
              ) : null}
              <div className="grid grid-cols-1 gap-1 mb-auto">
                <h4 className="text-sm font-semibold">{title}</h4>
                <p className="text-xs">{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <InputError error={errors} />
      <Button
        onClick={() => {
          selectedHotel ? handleOnNext() : setErrors("Select at least one!");
        }}
        className="mt-5"
      >
        Next
      </Button>
    </div>
  );
};

export default HotelCategories;
