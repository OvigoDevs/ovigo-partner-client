import { Button } from "@/components/ui/button";
import MultiSelector from "../tour-plan-day-to-day/multi-selector/multi-selector";
import { createArrayOfObjects } from "../tour-plan-day-to-day/tour-plan-day-to-day";
import Hints from "../common/hints/hints";
import { useRouter } from "next/navigation";
import Backlink from "@/components/core/backlink/backlink";

const initialPlans = [
  {
    id: 0,
    type: "resort",
    days: "1",
    name: "Redison Blue",
  },
];

const typeBlock = [
  {
    id: 1,
    value: "resort",
    label: "Resort",
  },
];

const daysTypeBlock = [
  {
    id: 1,
    value: "1",
    label: "1",
  },
];

const columns = [
  { id: 0, name: "type", actionBlocks: typeBlock },
  { id: 1, name: "days", actionBlocks: daysTypeBlock },
  { id: 2, name: "name", actionBlocks: {} },
];

const TourAccomodation = () => {
  const router = useRouter();
  return (
    <div className="section-d">
      <Backlink
        link="/register/tour-package/tour-plan-day-to-day"
        text="Day to day plan"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="grid grid-cols-1 gap-3 mb-5">
            <h3 className="font-bold">Tour Accomodation</h3>
            <p>
              Include the information about the type and quality of
              accommodation provided during the tour. (e.g. hotels, tents,
              houseboats etc)
            </p>
          </div>

          <div>
            <MultiSelector
              origin={createArrayOfObjects(1)[0]}
              initial={initialPlans}
              columns={columns}
              label="Stays"
              callToAction="Add another stays"
            />
          </div>

          <Button
            className="mt-5"
            onClick={() => router.push("/register/tour-package/tour-meals")}
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

export default TourAccomodation;
