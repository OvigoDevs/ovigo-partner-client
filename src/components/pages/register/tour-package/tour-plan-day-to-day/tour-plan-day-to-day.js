import Backlink from "@/components/core/backlink/backlink";
import Activity from "../common/activity/activity";
import { Button } from "@/components/ui/button";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { PlusCircle } from "lucide-react";
import { useSelector } from "react-redux";
import Hints from "../common/hints/hints";
import OneDayPlans from "./one-day-plans/one-day-plans";

const createArrayOfObjects = (number) => {
  if (!number) {
    return [];
  }
  // Create an empty array.
  const array = Array(number).fill(undefined);
  for (let i = 0; i < number; i++) {
    array[i] = { id: i };
  }
  return array;
};

const TourPlanDayToDay = () => {
  const { tourPackageData } = useSelector((state) => state.registerData);
  return (
    <div className="section-d">
      <Backlink link="/" text="Back" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="grid grid-cols-1 gap-2 mb-5">
            <h3 className="font-bold">Day to day tour plan</h3>
            <p>
              Include when, where team visits and what they will do there.
              Remember, the more details you give, the more tourists you will
              attract.
            </p>
          </div>
          <div>
            {createArrayOfObjects(
              tourPackageData.tourDateAndTime.startAndEndDate.totalDays
            ).map((day) => {
              return (
                <OneDayPlans key={day.id} day={day} />
              );
            })}
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
    </div>
  );
};

export default TourPlanDayToDay;
