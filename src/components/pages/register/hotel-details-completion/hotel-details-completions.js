import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { Check } from "lucide-react";
import { PlusSquare } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

const HotelDetailsCompletion = () => {
  const { hotels } = useSelector((state) => state.registerData);
  const steps = [
    {
      id: 0,
      title: "Step 2: Rooms",
      description: "Tell us about your room",
      icon: (
        <IconWrapper>
          <PlusSquare />
        </IconWrapper>
      ),
      link: "/register/room-details",
      buttonText: "Add room",
    },
    {
      id: 1,
      title: "Step 3: Photos",
      description: "Add photos of your room",
      icon: (
        <IconWrapper>
          <PlusSquare />
        </IconWrapper>
      ),
      link: "/register/room-photos",
      buttonText: "Add photos",
    },
    {
      id: 2,
      title: "Step 4: Final",
      description: "Complete registration",
      icon: (
        <IconWrapper>
          <Check />
        </IconWrapper>
      ),
      link: "/register/guest-payment",
      buttonText: "Complete",
    },
  ];
  return (
    <div className="section-d max-w-[500px] min-h-[80vh]">
      <Backlink link="/register/house-rules" text="House rules" />
      <div className="rounded-md bg-green-400 text-white mb-10 p-2 text-center font-semibold">
        {`Step 1 is completed: All the details of your hotel are collected. Let's add some rooms`}
      </div>
      <div className="grid grid-cols-1 gap-[1rem]">
        {hotels.length ? (
          <div className="grid grid-cols-1 gap-[1rem]">
            <h3 className="font-semibold">Your hotels</h3>
            {hotels.map((hotel) => {
              return (
                <div
                  key={hotel.id}
                  className="flex items-center justify-between gap-5 p-[1rem] rounded-md border"
                >
                  <div className="grid grid-cols-1 gap-2">
                    <p className="font-semibold">
                      {hotel.hotelData?.hotelInformation?.propertyName}
                    </p>
                    <span className="text-xs lg:text-sm">
                      {hotel.hotelData?.hotelAddress?.city}|
                      {hotel.hotelData?.hotelAddress?.country}
                    </span>
                  </div>
                  <Button variant="outline">
                    <IconWrapper>
                      <Edit2Icon className="w-4 h-4 mr-1"/>
                    </IconWrapper>
                    Edit
                  </Button>
                </div>
              );
            })}
          </div>
        ) : null}
        {steps.map((step) => {
          const { id, title, description, icon, link, buttonText } = step;
          return (
            <div
              key={id}
              className="flex items-center justify-between gap-3 p-2 rounded-lg border dark:border-gray-800"
            >
              <div className="grid grid-cols-1">
                <h4 className="font-bold">{title}</h4>
                <p>{description}</p>
              </div>
              <Link href={link}>
                <Button variant="outline" className="flex items-center gap-1">
                  {" "}
                  {icon} {buttonText}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelDetailsCompletion;
