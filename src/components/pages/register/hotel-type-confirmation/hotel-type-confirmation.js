import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const HotelTypeConfirmation = () => {
  return (
    <div className="section-d grid grid-cols-1 gap-16 max-w-[500px] mt-5">
      <div className="grid grid-cols-1 gap-3 text-center">
        <h3>You are listing</h3>
        <IconWrapper>
          <Home className="min-w-[30px] min-h-[30px] text-primary mx-auto" />
        </IconWrapper>
        <p className="font-bold">One hotel where guests can book rooms</p>
      </div>
      <div className="grid grid-cols-1 gap-3 text-center">
        <p>Does this sound like your property?</p>
        <Button>Confirm</Button>
        <Button variant="outline">No, I need to make a change</Button>
      </div>
    </div>
  );
};

export default HotelTypeConfirmation;
