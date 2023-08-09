import Backlink from "@/components/core/backlink/backlink";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import Hints from "../common/hints/hints";
import MultiSelector from "./multi-selector/multi-selector";
import { times } from "../../hotel/house-rules/check-in-out";
import { useRouter } from "next/navigation";

// default Values for multi-select
const initialPlans = [
  {
    id: 0,
    time: "12:00 am",
    activity: "study",
    place: "dhaka",
  },
];
const timeBlocks = [
  // {
  //   id: 1,
  //   value: "12:00 am",
  //   label: "12:00 AM",
  // },
  ...times
];
const activityBlocks = [
  {
    id: 1,
    value: "study",
    label: "Study",
  },
  {
    id: 2,
    value: "sleep",
    label: "Sleep",
  },
];
const placeBlocks = [
  {
    id: 1,
    value: "dhaka",
    label: "Dhaka",
  },
  {
    id: 2,
    value: "coxsbazar",
    label: "Coxsbazar",
  },
  {
    id: 3,
    value: "sylhet",
    label: "Sylhet",
  },
];
const columns = [
  { id: 0, name: "time", actionBlocks: timeBlocks },
  { id: 1, name: "activity", actionBlocks: activityBlocks },
  { id: 2, name: "place", actionBlocks: placeBlocks },
];

export const createArrayOfObjects = (number) => {
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
  const router = useRouter()
  const { tourPackageData } = useSelector((state) => state.registerData);
  return (
    <div className="section-d">
      <Backlink link="/register/tour-package/package-price" text="Package price" />
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
                <MultiSelector
                  key={day.id}
                  origin={day}
                  initial={initialPlans}
                  columns={columns}
                  label="Day"
                />
              );
            })}
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
      <Button className="mt-5" onClick={() => router.push("/register/tour-package/tour-accomodation")}>Next</Button>
    </div>
  );
};

export default TourPlanDayToDay;
