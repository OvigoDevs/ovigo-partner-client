import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { BadgeCheckIcon } from "lucide-react";
import { Check } from "lucide-react";
import { PlusSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DefaultSteps = [
  {
    id: 1,
    title: "Step 2: Rooms",
    description: "Tell us about your room",
    icon: (
      <IconWrapper>
        <PlusSquare />
      </IconWrapper>
    ),
    link: "/register/hotel/room-details",
    buttonText: "Add room",
  },
  // {
  //   id: 2,
  //   title: "Step 3: Photos",
  //   description: "Add photos of your room",
  //   icon: (
  //     <IconWrapper>
  //       <PlusSquare />
  //     </IconWrapper>
  //   ),
  //   link: "/register/hotel/room-photos",
  //   buttonText: "Add photos",
  // },
  {
    id: 3,
    title: "Step 4: Final",
    description: "Complete registration",
    icon: (
      <IconWrapper>
        <Check />
      </IconWrapper>
    ),
    link: "/register/hotel/guest-payment",
    buttonText: "Complete listing",
  },
];
const HotelDetailsCompletion = () => {
  const { hotelData, rooms } = useSelector((state) => state.registerData);
  const [steps, setSteps] = useState([DefaultSteps[0]]);
  useEffect(() => {
    rooms.length && setSteps(DefaultSteps);
  }, [rooms]);
  return (
    <div className="section-d max-w-[500px] min-h-[80vh]">
      <Backlink link="/register/hotel/house-rules" text="House rules" />
      <div className="rounded-md bg-green-50 text-green-600 mb-10 p-[1rem] font-semibold flex items-center gap-[1rem]">
        <IconWrapper>
          <BadgeCheckIcon />
        </IconWrapper>
        {`Step 1 is completed: All the details of your hotel are collected. Let's add some rooms`}
      </div>
      {rooms.length ? (
        <div className="rounded-md bg-green-50 text-green-600 mb-10 p-[1rem] font-semibold flex items-center gap-[1rem]">
          <IconWrapper>
            <BadgeCheckIcon />
          </IconWrapper>
          {`Step 2 is completed: All the details of your Rooms are collected. You may add some rooms again!`}
        </div>
      ) : null}
      <div className="grid grid-cols-1 gap-[1rem]">
        <div className="grid grid-cols-1 gap-[1rem]">
          <h3 className="font-semibold">Your Service</h3>
          <div className="flex items-center justify-between gap-5 p-[1rem] rounded-md border">
            <div className="grid grid-cols-1 gap-2">
              <p className="font-semibold">
                {hotelData?.hotelInformation?.propertyName}
              </p>
              <span className="text-xs lg:text-sm">
                {hotelData?.hotelAddress?.city}|
                {hotelData?.hotelAddress?.country}
              </span>
            </div>
            <Button variant="outline">
              <IconWrapper>
                <Edit2Icon className="w-4 h-4 mr-1" />
              </IconWrapper>
              Edit
            </Button>
          </div>
          {rooms.length ? (
            <div className="border-t py-[1rem] grid grid-cols-1 gap-[1rem]">
              <h4 className="font-semibold">Rooms</h4>
              {rooms.map((room) => {
                const { roomName, addPhotos, roomDetails } = room.roomData;
                const { unitType, roomSize, roomSizeUnit } = roomDetails;
                console.log(roomDetails);
                return (
                  <div
                    key={room.id}
                    className="border rounded-md flex items-center"
                  >
                    <div>
                      <Image
                        src={addPhotos.mainImage[0]}
                        alt=""
                        height={100}
                        width={100}
                        className="max-h-[60px] w-auto"
                      />
                    </div>
                    <div className="p-[0.5rem] grid grid-cols-1 gap-[0.1rem]">
                      <h4 className="font-semibold">{`${roomName} - ${unitType}`}</h4>
                      <p>{`${roomSize} ${roomSizeUnit}`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <hr />
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
