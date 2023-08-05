import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { organizerName } from "@/redux/features/register_slice";
import { ThumbsUpIcon } from "lucide-react";
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
    <div className="section-d">
      <Backlink link="/register/service-category" text="Service category" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
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
        <div className="shadow-xl border flex items-start gap-3 p-4 rounded-md">
          <IconWrapper>
            <ThumbsUpIcon />
          </IconWrapper>
          <div className="grid grid-cols-1 gap-2">
            <h5 className="font-semibold">What type of names should I put in?</h5>
            <ul className="grid grid-cols-1 gap-1 list-disc">
              {[
                "Include the name which you want to known with",
                "Include the full company name do not",
                "Include the tour operator or guide names",
              ].map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
