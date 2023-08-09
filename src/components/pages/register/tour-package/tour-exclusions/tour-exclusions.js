import { Button } from "@/components/ui/button";
import MultiSelector from "../tour-plan-day-to-day/multi-selector/multi-selector";
import { createArrayOfObjects } from "../tour-plan-day-to-day/tour-plan-day-to-day";
import Hints from "../common/hints/hints";
import { useRouter } from "next/navigation";
import Backlink from "@/components/core/backlink/backlink";

const initialPlans = [
  {
    id: 0,
    type: "pool",
    details: "Ddddd",
  },
];

const typeBlock = [
  {
    id: 1,
    value: "pool",
    label: "Pool",
  },
];

const columns = [
  { id: 0, name: "type", actionBlocks: typeBlock },
  { id: 1, name: "details", actionBlocks: {} },
];

const TourExclusions = () => {
  const router = useRouter()
  return (
    <div className="section-d">
      <Backlink link="/register/tour-package/tour-meals" text="Meals" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <div className="grid grid-cols-1 gap-3 mb-5">
          <h3 className="font-bold">Exclusions</h3>
          <p>
            Any items or services not included in the package, such as visa
            fees, personal expenses, optional activities, etc.
          </p>
        </div>

        <div>
          <MultiSelector
            origin={createArrayOfObjects(1)[0]}
            initial={initialPlans}
            columns={columns}
            label="Excluded Item"
            callToAction="Add another item"
          />
        </div>

        <Button className="mt-5" onClick={() => router.push("/register/tour-package/host-name-and-profile")}>Next</Button>
      </div>
      <div>
        <Hints />
      </div>
    </div>
    </div>
  );
};

export default TourExclusions;
