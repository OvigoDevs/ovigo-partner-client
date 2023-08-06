import Backlink from "@/components/core/backlink/backlink";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import CheckInOut from "../../hotel/house-rules/check-in-out";
import Hints from "../common/hints/hints";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { tourDateAndTime } from "@/redux/features/register_slice";
import { setCookie } from "@/lib/cookie";

const TourDateAndTime = () => {
  // router
  const router = useRouter();
  // redux
  const { tourPackageData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // form state
  const [formData, setFormData] = useState(
    tourPackageData.tourDateAndTime
      ? tourPackageData.tourDateAndTime
      : {
          startAndEndDate: "",
          checkoutfrom: "",
          checkoutuntil: "",
        }
  );
  const [edited, setEdited] = useState(false);
  const [errors, setErrors] = useState(edited ? formData : {});
  // handle input
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!edited) {
      setEdited(true);
    }
  };
  // handle submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const invalidations = validator(formData);
    if (Object.keys(invalidations).length === 0) {
      // dispatch
      dispatch(
        tourDateAndTime({
          tourDateAndTime: formData,
        })
      );
      // cookie
      setCookie("tourPackageData", {
        ...tourPackageData,
        tourDateAndTime: formData,
      });
      // router
      // router.push("/register/tour-package/")
    } else {
      setErrors(invalidations);
    }
  };

  const validator = (data) => {
    let obj = {};

    if (!data.checkoutfrom.trim()) {
      obj.checkoutfrom = "Start time is required!";
    }
    if (!data.checkoutuntil.trim()) {
      obj.checkoutuntil = "End time is required!";
    }
    return obj;
  };

  return (
    <div className="section-d">
      <Backlink link="/register/tour-package/tour-date-and-time" text="Back" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <h3 className="font-semibold">Tour Date And Time</h3>
          <div className="grid grid-cols-1 gap-2">
            <label>Start and End Date</label>
            <DatePickerWithRange
              name="startAndEndDate"
              handleOnChange={handleOnChange}
              defaultValues={formData.startAndEndDate}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Start and End Time</label>
            <CheckInOut
              handleOnChange={handleOnChange}
              defaultValue={formData}
              type="out"
              errors={errors}
              from="tour-package"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Total Days</label>
            <input
              value={
                formData.startAndEndDate
                  ? formData.startAndEndDate?.totalDays
                  : 0
              }
              readOnly
            />
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
      <Button onClick={handleOnSubmit} className="mt-5">
        Next
      </Button>
    </div>
  );
};

export default TourDateAndTime;
