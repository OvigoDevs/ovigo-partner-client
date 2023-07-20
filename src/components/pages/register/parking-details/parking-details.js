import CustomRadio from "@/components/core/custom-radio/custom-radio";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ParkingDetails = () => {
  // router
  const router = useRouter()
  // hoteldata
  const {hotelData} = useSelector(state => state.registerData)
  // dispatch
  const dispatch = useDispatch()
  // formstate
  const [formData, setFormData] = useState({
    available: "",
    reserve: "",
    located: "",
    type: ""
  })
  // edited
  const [edited, setEdited] = useState
  // errors
  // input handler
  const handleOnChange = (e) => {
    console.log(e);
  };
  // submit handler
  // validator
  // useEffect > dispatch > setcookie > router
  // update default value
  return (
    <div className="py-5">
      <p className="font-bold">
        Tell us about the parking situation at your hotel?
      </p>

      <div className="my-5 grid md:grid-cols-2 gap-4">
        <div>
          <div className="">
            <CustomRadio
              label="Is parking available To Guests?"
              name="parking"
              handleOnChange={handleOnChange}
              options={["Yes, Free", "Yes, Paid", "No"]}
            />
            <hr className="my-5" />
            <CustomRadio
              label="Do guests need to reserve a parking spot?"
              name="parking-reserve"
              handleOnChange={handleOnChange}
              options={["Reservation Needed", "No Reservation Needed"]}
            />
            <hr className="my-5" />

            <CustomRadio
              label="Where is the parking located?"
              name="parking-location"
              handleOnChange={handleOnChange}
              options={["On site", "Off site"]}
            />
            <hr className="my-5" />
            <CustomRadio
              label="What type of parking is it?"
              name="parking-type"
              handleOnChange={handleOnChange}
              options={["Private", "Public"]}
            />
          </div>
          <Button className="w-full mt-5">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ParkingDetails;
