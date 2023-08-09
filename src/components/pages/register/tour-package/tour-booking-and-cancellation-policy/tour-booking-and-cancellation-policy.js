import Backlink from "@/components/core/backlink/backlink";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import Hints from "../common/hints/hints";
import { createArrayOfObjects } from "../tour-plan-day-to-day/tour-plan-day-to-day";
import MultiSelector from "../tour-plan-day-to-day/multi-selector/multi-selector";
import PopOverSelect from "../common/actions/pop-over-select/pop-over-select";
import { useRouter } from "next/navigation";

// default Values for multi-select
const initialPlans = [
  {
    id: 0,
    period: "7",
    policy: "terms",
  },
];
const periodBlocks = [
  {
    id: 0,
    value: "7",
    label: "7 days",
  },
];
const policyBlocks = [
  {
    id: 0,
    value: "terms",
    label: "Terms and condition",
  },
];
const columns = [
  { id: 0, name: "period", actionBlocks: periodBlocks },
  { id: 1, name: "policy", actionBlocks: policyBlocks },
  { id: 2, name: "cost", actionBlocks: {} },
];

const fitnessRequirements = [
  {
    id: 0,
    value: "bkash",
    label: "Bkash",
  },
  {
    id: 0,
    value: "nagad",
    label: "Nagad",
  },
  {
    id: 0,
    value: "visa",
    label: "Visa",
  },
];

const BookingAndCancellationPolicy = () => {
  const { tourPackageData } = useSelector((state) => state.registerData);
  console.log(tourPackageData);
  const router = useRouter();
  return (
    <div className="section-d">
      <Backlink link="/register/tour-package/tour-health-and-safety" text="Health and safety" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="grid grid-cols-1 gap-2 mb-5">
            <h3 className="font-bold">Booking and Cancellation Policy</h3>
            <p>
              Details about the booking process, payment methods, and
              cancellation terms.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 mb-5">
            <label>Payment Methods</label>
            <PopOverSelect
              optionsToSelect={fitnessRequirements}
              placeholder=""
              defaultValue="bkash"
            />
          </div>
          <div>
            <MultiSelector
              origin={createArrayOfObjects(1)[0]}
              initial={initialPlans}
              columns={columns}
              label="Safety Precautions"
              callToAction="Add more terms"
            />
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
      <Button className="mt-5" onClick={() => router.push("/register/tour-package/tour-add-photos")}>Next</Button>
    </div>
  );
};

export default BookingAndCancellationPolicy;
