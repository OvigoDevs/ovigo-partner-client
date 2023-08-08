import Backlink from "@/components/core/backlink/backlink";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import Hints from "../common/hints/hints";
import { createArrayOfObjects } from "../tour-plan-day-to-day/tour-plan-day-to-day";
import MultiSelector from "../tour-plan-day-to-day/multi-selector/multi-selector";
import PopOverSelect from "../common/actions/pop-over-select/pop-over-select";

// default Values for multi-select
const initialPlans = [
  {
    id: 0,
    type: "type",
    item: "item",
  },
];
const typeBlocks = [
  {
    id: 0,
    value: "type",
    label: "Item type",
  },
];
const itemBlocks = [
  {
    id: 0,
    value: "item",
    label: "Select item",
  },
];
const columns = [
  { id: 0, name: "type", actionBlocks: typeBlocks },
  { id: 1, name: "item", actionBlocks: itemBlocks },
];

const fitnessRequirements = [
  {
    id: 0,
    value: "requirement",
    label: "Requirement",
  },
];

const TourHealthAndSafety = () => {
  const { tourPackageData } = useSelector((state) => state.registerData);
  console.log(tourPackageData);
  return (
    <div className="section-d">
      <Backlink link="/" text="Back" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="grid grid-cols-1 gap-2 mb-5">
            <h3 className="font-bold">Health & Safety</h3>
            <p>
              Any health or fitness requirements, as well as safety precautions,
              travelers should be aware of.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 mb-5">
            <label>Fitness Requirement</label>
            <PopOverSelect
              optionsToSelect={fitnessRequirements}
              placeholder=""
              defaultValue=""
            />
          </div>
          <div>
            <MultiSelector
              origin={createArrayOfObjects(1)[0]}
              initial={initialPlans}
              columns={columns}
              label="Safety Precautions"
            />
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
      <Button className="mt-5">Next</Button>
    </div>
  );
};

export default TourHealthAndSafety;
