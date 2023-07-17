import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PlusSquare } from "lucide-react";
import Link from "next/link";

const HotelDetailsCompletion = () => {
  const steps = [
    {
      id: 0,
      title: "Step 2: Rooms",
      description: "Tell us about your room",
      icon: (
        <IconWrapper>
          <PlusSquare/>
        </IconWrapper>
      ),
      link: "/register/room-details",
      buttonText: "Add room"
    },
    {
      id: 1,
      title: "Step 3: Photos",
      description: "Add photos of your room",
      icon: (
        <IconWrapper>
          <PlusSquare/>
        </IconWrapper>
      ),
      link: "/register/room-photos",
      buttonText: "Add photos"
    },
    {
      id: 2,
      title: "Step 4: Final",
      description: "Complete registration",
      icon: (
        <IconWrapper>
          <Check/>
        </IconWrapper>
      ),
      link: "/register/complete-registration",
      buttonText: "Complete"
    },
  ];
  return (
    <div className="section-d max-w-[500px]">
      <div className="rounded-md bg-green-400 text-white mb-10 p-2 text-center font-semibold">
        {`Step 1 is completed: All the details of your hotel are collected. Let's add some rooms`}
      </div>
      <div className="grid grid-cols-1 gap-[1rem]">
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
                <Button className="flex items-center gap-1"> {icon} {buttonText}</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelDetailsCompletion;
