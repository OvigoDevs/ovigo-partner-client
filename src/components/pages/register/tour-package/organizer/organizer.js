import Backlink from "@/components/core/backlink/backlink";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { tourOrganizer } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hints from "../common/hints/hints";

const Organizer = () => {
  // router
  const router = useRouter();
  // redux
  // const { tourPackageData } = useSelector((state) => state.registerData);
  // dispatch
  // const dispatch = useDispatch();

  // formState
  const [organizer, setOrganizer] = useState(
    ""
    // tourPackageData.tourOrganizer ? tourPackageData.tourOrganizer : ""
  );

  const [oldTourPackageData, setOldTourPackageData] = useState(null);

  // get data from local storage
  useEffect(() => {
    const tourPackageData = JSON.parse(localStorage.getItem("tourPackageData"));
    setOldTourPackageData(tourPackageData);
    if (tourPackageData?.tourOrganizerName) {
      setOrganizer(tourPackageData.tourOrganizerName);
    }
  }, []);

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

      const tourPackageData = {
        ...oldTourPackageData,
        tourOrganizerName: organizer,
      };

      localStorage.setItem("tourPackageData", JSON.stringify(tourPackageData));
      console.log(oldTourPackageData);

      // dispatch
      /* dispatch(tourOrganizer({ tourOrganizer: organizer }));
      // setCookie
      setCookie(
        "tourPackageData",
        { ...tourPackageData, tourOrganizer: organizer },
        "1h"
      ); */
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
        <div>
          <Hints />
        </div>
      </div>
    </div>
  );
};

export default Organizer;
