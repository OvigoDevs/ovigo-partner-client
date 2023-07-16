import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Check } from "lucide-react";

const RoomDetails = () => {
  return (
    <div className="section-d max-w-[500px]">
      <p className="px-3 py-2 rounded-md bg-green-400 text-white flex items-center justify-center gap-2">
        <IconWrapper>
          <Check />
        </IconWrapper>
        <span>Your property details information all are collected!</span>
      </p>
      <h3 className="font-bold my-5">Room details</h3>
    </div>
  );
};

export default RoomDetails;
