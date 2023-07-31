import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setCookie } from "@/lib/cookie";
import { roomPrice } from "@/redux/features/register_slice";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RoomPrice = () => {
  // router
  const router = useRouter();
  // roomData
  const { roomData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // roomPriceState
  const [roomprice, setRoomprice] = useState(
    roomData.roomPrice ? roomData.roomPrice : null
  );
  const [errorMessage, setErrorMessage] = useState(null);
  // submit & validation
  const handleOnSubmit = () => {
    if (!roomprice) {
      setErrorMessage("Room price is required!");
    } else {
      // dispatch
      dispatch(
        roomPrice({
          roomPrice: roomprice,
        })
      );

      // setCookie
      setCookie("roomData", { ...roomData, roomPrice: roomprice }, "1h");

      // router
      router.push("/register/rate-plan");
    }
  };
  return (
    <div className="section-d max-w-[400px]">
      <Backlink link="/register/room-name" text="Room name" />
      <h4 className="">Set the price per night for this room</h4>

      <div className="grid grid-cols-1 gap-4 pt-5">
        <div className="space-y-3">
          <h4 className="">
            How much do you want to charge per night?
          </h4>
          <div className="space-y-1">
            <p>Price guests pay</p>
            <input className="w-full" type="number" placeholder="Enter amount in BDT" defaultValue={roomprice} onChange={(e) => {
              setRoomprice(e.target.value);
              if(errorMessage){
                setErrorMessage(null)
              }
            }}/>
            <p>including taxes, commision and fees</p>
            <InputError error={errorMessage} />
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

      <div className="pt-5">
        <Button className='w-full' onClick={handleOnSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default RoomPrice;
