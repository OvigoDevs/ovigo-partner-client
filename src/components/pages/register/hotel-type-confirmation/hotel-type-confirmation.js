import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

const HotelTypeConfirmation = () => {
  const { hotelData } = useSelector((state) => state.registerData);

  return (
    <div className="section-d grid grid-cols-1 gap-16 max-w-[500px]">
      <div className="grid grid-cols-1 gap-3 text-center">
        <Backlink link="/register/no-of-hotel" text="Number of hotels" />
        <h3>You are listing</h3>
        <IconWrapper>
          <Home className="min-w-[30px] min-h-[30px] text-primary mx-auto" />
        </IconWrapper>

        <p className="font-bold">
          {hotelData.noOfHotels
            ? hotelData.noOfHotels.text
            : "One hotel where guests can book rooms"}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 text-center">
        <p>Does this sound like your property?</p>
        <Link href="/register/hotel-address">
          <Button className="w-full">Confirm</Button>
        </Link>
        <Link href="/register/no-of-hotel">
          <Button variant="outline">No, I need to make a change</Button>
        </Link>
      </div>
    </div>
  );
};

export default HotelTypeConfirmation;
