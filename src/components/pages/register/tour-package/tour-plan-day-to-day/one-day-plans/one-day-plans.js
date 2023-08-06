import { Button } from "@/components/ui/button";
import Activity from "../../common/activity/activity";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { XCircle } from "lucide-react";
import { MaxID_generator } from "@/redux/features/register_slice";
const initialPlans = [
  {
    id: 0,
    time: "12:00 am",
    activity: "abc",
    place: "xyz",
  },
];
const OneDayPlans = ({ day }) => {
  const [plans, setPlans] = useState(initialPlans);
  const handleAddNewPlan = () => {
    setPlans([
      ...plans,
      {
        id: MaxID_generator(plans),
        time: "12:00 am",
        activity: "abc",
        place: "xyz",
      },
    ]);
  };
  const handleRemovePlan = (id) => {
    setPlans([...plans.filter((plan) => plan.id !== id)]);
  };
  console.log(plans);
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 py-5">
        <h4 className="font-bold">Day {day.id + 1}</h4>
        <div className="grid grid-cols-1 gap-2">
          {plans.map((plan) => {
            return (
              <div key={plan.id} className="relative">
                <Activity plan={plan} />
                <div
                  className="absolute top-0 right-0 -mr-5 cursor-pointer"
                  onClick={() => handleRemovePlan(plan.id)}
                >
                  <IconWrapper>
                    <XCircle className="stroke-gray-400 hover:stroke-red-400" />
                  </IconWrapper>
                </div>
              </div>
            );
          })}
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 w-[150px]"
            onClick={handleAddNewPlan}
          >
            <span>Add activity</span>
            <IconWrapper>
              <PlusCircle className="stroke-gray-600" />
            </IconWrapper>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OneDayPlans;
