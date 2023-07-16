import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const RoomPrice = () => {
  return (
    <div className="py-5">
      <h4 className="font-bold">Set the price per night for this room</h4>

      <div className="grid grid-cols-2 gap-4 pt-5">
        <div className="border rounded-md p-5 space-y-3">
          <h4 className="font-bold">
            How much do you want to charge per night?
          </h4>
          <div className="space-y-1">
            <p>Price guests pay</p>
            <Input className="w-full" placeholder="Enter amount in BDT" />
            <p>including taxes, commision and fees</p>
          </div>

          <p className="text-lg font-semibold">12.00% Ovigo commision</p>
          <ul>
            <li className="flex items-start gap-2">
              <IconWrapper>
                <Check className="text-green-600 mt-[4px]" />
              </IconWrapper>{" "}
              24/7 help in your language
            </li>
            <li className="flex items-start gap-2">
              {" "}
              <IconWrapper>
                <Check className="text-green-600 mt-[4px]" />
              </IconWrapper>{" "}
              Save time with automatically confirmed bookings
            </li>
            <li className="flex items-start gap-2">
              {" "}
              <IconWrapper>
                <Check className="text-green-600 mt-[4px]" />
              </IconWrapper>{" "}
              We promote your place on google
            </li>
          </ul>

          <hr />
          <p>
            BDT <span>44.00</span> Your Earnings (including taxes)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-5">
        <Button className='w-full'>Submit</Button>
      </div>
    </div>
  );
};

export default RoomPrice;
