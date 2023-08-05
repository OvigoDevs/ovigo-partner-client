import Backlink from "@/components/core/backlink/backlink";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { organizerName } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Organizer = () => {
  // router
  const router = useRouter();
  // redux
  const { tourPackageData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // formState
  const [organizer, setOrganizer] = useState("");
  const [errors, setErrors] = useState(null);
  // input handler
  const handleOnChange = (e) => {
    setOrganizer(e.target.value);
  };
  // submit handler and error validation
  const handleOnSubmit = () => {
    if (!organizer.trim()) {
      setErrors("Organizer name is required!");
    } else {
      setErrors(null);
      // dispatch
      dispatch(organizerName({ organizerName: organizer }));
      // setCookie
      setCookie(
        "tourPackageData",
        { ...tourPackageData, organizerName: organizer },
        "1h"
      );
      // router
      router.push("/register/tour-package/company-structure");
    }
  };
  return (
    <div className="section-d max-w-[500px]">
      <Backlink link="/register/service-category" text="Service category" />
      <div className="grid grid-cols-1 gap-2 pb-5">
        <label>Tour Organizer Company Name</label>
        <input
          defaultValue={organizer}
          onChange={handleOnChange}
          placeholder="e.g. Ovigo Tourism"
        />
        <InputError error={errors} />
      </div>
      <Button onClick={handleOnSubmit}>Next</Button>
    </div>
  );
};

export default Organizer;
