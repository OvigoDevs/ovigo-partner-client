import { Button } from "@/components/ui/button";
import MultiSelector from "../tour-plan-day-to-day/multi-selector/multi-selector";
import { createArrayOfObjects } from "../tour-plan-day-to-day/tour-plan-day-to-day";
import Hints from "../common/hints/hints";
import { useRouter } from "next/navigation";
import Backlink from "@/components/core/backlink/backlink";

const initialPlans = [
  {
    id: 0,
    type: "dinner",
    options: "1",
    item: "Rice",
  },
];

const typeBlock = [
  {
    id: 1,
    value: "dinner",
    label: "Dinner",
  },
];

const optionsBlock = [
  {
    id: 1,
    value: "1",
    label: "1",
  },
];

const columns = [
  { id: 0, name: "type", actionBlocks: typeBlock },
  { id: 1, name: "options", actionBlocks: optionsBlock },
  { id: 2, name: "item", actionBlocks: {} },
];

const TourMeals = () => {
  const router = useRouter()
  return (
    <div className="section-d">
      <Backlink link="/register/tour-package/tour-accomodation" text="Accomodation" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <div className="grid grid-cols-1 gap-3 mb-5">
          <h3 className="font-bold">Meals</h3>
          <p>
            Include all meals that you will provide inside this package. Do not
            include what tourist can add as an extra. Details matters.
          </p>
        </div>

        <div>
          <MultiSelector
            origin={createArrayOfObjects(1)[0]}
            initial={initialPlans}
            columns={columns}
            label="Meal"
            callToAction="Add another meal"
          />
        </div>

        <Button className="mt-5" onClick={() => router.push("/register/tour-package/tour-exclusions")}>Next</Button>
      </div>
      <div>
        <Hints />
      </div>
    </div>
    </div>
  );
};

export default TourMeals;
