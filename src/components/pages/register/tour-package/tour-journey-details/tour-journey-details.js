import Backlink from "@/components/core/backlink/backlink";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import Hints from "../common/hints/hints";
import { createArrayOfObjects } from "../tour-plan-day-to-day/tour-plan-day-to-day";
import MultiSelector from "../tour-plan-day-to-day/multi-selector/multi-selector";
import { useRouter } from "next/navigation";

// default Values for multi-select
const initialPlans = [
  {
    id: 0,
    transportation: "transportation",
    from: "from",
    to: "to",
  },
];
const transportationBlocks = [
  {
    id: 0,
    value: "transportation",
    label: "Transportation",
  },
  {
    id: 1,
    value: "bus",
    label: "Bus",
  },
];
const fromBlocks = [
  {
    id: 0,
    value: "from",
    label: "From",
  },
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
const inBlocks = [
  {
    id: 1,
    value: "to",
    label: "To",
  },
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
  { id: 0, name: "transportation", actionBlocks: transportationBlocks },
  { id: 1, name: "from", actionBlocks: fromBlocks },
  { id: 2, name: "to", actionBlocks: inBlocks },
];

const TourJourneyDetails = () => {
  const { tourPackageData } = useSelector((state) => state.registerData);
  console.log(tourPackageData);
  const router = useRouter();
  return (
    <div className="section-d">
      <Backlink
        link="/register/tour-package/host-name-and-profile"
        text="Host name and profile"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="grid grid-cols-1 gap-2 mb-5">
            <h3 className="font-bold">Journey details</h3>
            <p>
              Include all the journey for this tour whether you will travel
              through bus, train or flights etc.
            </p>
          </div>
          <div>
            <MultiSelector
              origin={createArrayOfObjects(1)[0]}
              initial={initialPlans}
              columns={columns}
              label="Journey"
            />
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
      <Button className="mt-5" onClick={() => router.push("/register/tour-package/tour-health-and-safety")}>Next</Button>
    </div>
  );
};

export default TourJourneyDetails;
