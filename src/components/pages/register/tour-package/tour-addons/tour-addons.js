import { Button } from "@/components/ui/button";
import MultiSelector from "../tour-plan-day-to-day/multi-selector/multi-selector";
import { createArrayOfObjects } from "../tour-plan-day-to-day/tour-plan-day-to-day";
import Hints from "../common/hints/hints";
import Backlink from "@/components/core/backlink/backlink";
import { useRouter } from "next/navigation";

const initialPlans = [
  {
    id: 0,
    type: "pool",
    cost: "30",
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
  { id: 1, name: "cost", actionBlocks: {} },
];

const TourAddons = () => {
  const router = useRouter()
  return (
    <div className="section-d">
      <Backlink link="/register/tour-package/tour-exclusions" text="Exclusions" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="grid grid-cols-1 gap-3 mb-5">
            <h3 className="font-bold">Add ons</h3>
            <p>
              List the items which a tourist can use or avail by pay extra
              amount. Do not include anything which you can not provide as it
              will affect your overall rating.
            </p>
          </div>

          <div>
            <MultiSelector
              origin={createArrayOfObjects(1)[0]}
              initial={initialPlans}
              columns={columns}
              label="Add on"
              callToAction="Add another item"
            />
          </div>

          <Button
            className="mt-5"
            onClick={() =>
              router.push("/register/tour-package/host-name-and-profile")
            }
          >
            Next
          </Button>
        </div>
        <div>
          <Hints />
        </div>
      </div>
    </div>
  );
};

export default TourAddons;
