import CustomRadio from "@/components/core/custom-radio/custom-radio";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { guestPayment } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GuestPayment = () => {
  // router
  const router = useRouter();

  // roomData
  const { roomData } = useSelector((state) => state.registerData);

  // dispatch
  const dispatch = useDispatch();

  // payment state
  const [payment, setPayment] = useState(
    roomData.guestPayment ? roomData.guestPayment : null
  );
  const [errorMessage, setErrorMessage] = useState(null);

  // submit & validation
  const handleOnSubmit = () => {
    if (!payment) {
      console.log(payment)
      setErrorMessage("Payment is required!");
    } else {
      // dispatch
      dispatch(
        guestPayment({
          guestPayment: payment,
        })
      );

      // setCookie
      setCookie("roomData", { ...roomData, guestPayment: payment }, "1h");

      // router
      router.push("/register/invoice-info");
    }
  };
  return (
    <div className="section-d max-w-[500px] grid grid-cols-1 gap-5">
      <h3 className="font-bold">Guest payment options</h3>
      <div>
        <CustomRadio
          name="charge-credit"
          label="Would you like to charge credit cards at your property?"
          handleOnChange={(e) => {
            setPayment(e.target.value);
            if (errorMessage) {
              setErrorMessage(null);
            }
          }}
          options={["Yes", "No"]}
          defaultValue={payment}
        />
        <InputError error={errorMessage} />
      </div>
      <div className="p-[1rem] rounded-md border dark:border-gray-800">
        <h3 className="font-bold">How does payments by Ovigo works?</h3>
        <p>{`Guest books > Ovigo facilates payment gatway > You get paid`}</p>
      </div>
      <Button onClick={handleOnSubmit}>Next</Button>
    </div>
  );
};

export default GuestPayment;
