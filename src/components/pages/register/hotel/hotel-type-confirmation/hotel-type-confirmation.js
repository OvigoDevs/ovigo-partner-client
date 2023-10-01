import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import icon from "../../../../../../public/images/icon/hotelIcon.png";

const HotelTypeConfirmation = () => {
  const { hotelData } = useSelector((state) => state.registerData);

  return (
    <div className="lg:my-20 my-5">
      <div className="card max-w-[500px] m-auto bg-white">
        <div className="grid grid-cols-1 gap-3 text-center">
          <h3 className="lg:mb-5 mb-3">You are listing</h3>
          <div>
            <Image
              width={50}
              height={50}
              src={icon}
              alt="Service Icon"
              className="mx-auto w-14 h-14 bg-white"
            />
          </div>
          <p className="font-bold mt-3">
            {hotelData.noOfHotels
              ? hotelData.noOfHotels.text
              : "One hotel where guests can book rooms"}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 text-center mt-5">
          <p className="border-b border-gray-200 lg:pb-5 pb-3">
            Does this sound like your property?
          </p>
          <Link href="/register/hotel/hotel-address" className="mt-5">
            <Button className="w-full">Confirm</Button>
          </Link>
          <Link href="/register/hotel/no-of-hotel">
            <Button variant="outline" className="w-full mt-5">
              No, I need to make a change
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelTypeConfirmation;
