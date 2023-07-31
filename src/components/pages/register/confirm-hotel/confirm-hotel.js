import Image from "next/image";
import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setCookie } from "@/lib/cookie";
import InputError from "@/components/core/input-error/input-error";
import {
  MaxID_generator,
  addNewHotel,
  confirmHotel,
} from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";

const ConfirmHotel = () => {
  // router
  const router = useRouter();
  // hotelData
  const { hotelData, roomData, hotels } = useSelector(
    (state) => state.registerData
  );
  // dispatch
  const dispatch = useDispatch();
  // confirmhotelState
  const [confirmhotel, setConfirmhotel] = useState(
    hotelData.confirmHotel ? hotelData.confirmHotel : []
  );
  const [errorMessage, setErrorMessage] = useState(null);
  // submit & validation
  const handleOnSubmit = () => {
    if (confirmhotel.length !== 2) {
      setErrorMessage("Select all agreements!");
    } else {
      // setCookie
      setCookie(
        "hotelData",
        { ...hotelData, confirmHotel: confirmhotel },
        "1h"
      );

      // dispatch
      console.log("--->", hotels);
      const MaxID = MaxID_generator(hotels);
      dispatch(
        confirmHotel({
          confirmHotel: confirmhotel,
          id: MaxID,
        })
      );

      setCookie(
        "hotels",
        [
          ...hotels,
          {
            id: MaxID,
            hotelData,
            roomData,
          },
        ],
        "1h"
      );

      setCookie("hotelData", {}, "1h");
      setCookie("roomData", {}, "1h");

      // router
      router.push("/register/hotel-details-completion");
    }
  };
  return (
    <div className="py-5 max-w-[500px]">
      <div className="grid grid-cols-1 gap-4">
        <div className="border rounded-md p-5 space-y-4">
          <h4 className="text-lg">
            That&apos;s it! You&apos;ve done everything you need to before your
            first guest stays.
          </h4>
          <p>After you finish your registration you&apos;ll be able to:</p>

          <div className="space-y-3">
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src="/images/phone.svg"
                alt="Phone Icon"
              />
              <p>Manage your property from your dashboard.</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src="/images/eye-and-money.svg"
                alt="Phone Icon"
              />
              <p>Get bookings and make money from guests browsing our site.</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src="/images/calander-icon.svg"
                alt="Phone Icon"
              />
              <p>
                Stay on top of bookings from all the sites you use by syncing
                your calander.
              </p>
            </div>
          </div>
          <hr />

          <CustomCheckbox
            options={[
              "I certify that this is a legitimate accomodation business with all necessary licenses and permits, which can be shown upon request. Ovigo reserves the right to verify and investigate any details provided in this registration.",
              "I have read, accepted, and agreed to the General Delivery Terms.",
            ]}
            name="confirmhotel"
            label="Please check all the agreement"
            defaultValue={confirmhotel}
            handleOnChange={(e) => setConfirmhotel(e.target.value)}
          />
          <InputError error={errorMessage} />
        </div>
      </div>
      <div className="pt-5">
        <Button className="w-full" onClick={handleOnSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ConfirmHotel;
