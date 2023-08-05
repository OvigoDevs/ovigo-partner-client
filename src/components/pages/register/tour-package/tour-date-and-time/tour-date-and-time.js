import Backlink from "@/components/core/backlink/backlink";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import CheckInOut from "../../hotel/house-rules/check-in-out";
import Hints from "../hints/hints";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TourDateAndTime = () => {
  const [formData, setFormData] = useState({
    startAndEndDate: "",
    checkoutfrom: "",
    checkoutuntil: "",
    totalDays: 0,
  });
  const [errors, setErrors] = useState(formData);
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrors(validator(formData));
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

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  }, [errors]);
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
            <input value={formData.totalDays} readOnly />
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
      <Button onClick={handleOnSubmit} className="mt-5">Submit</Button>
    </div>
  );
};

export default TourDateAndTime;
