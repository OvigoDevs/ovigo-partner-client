import { Button } from "@/components/ui/button";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { XCircle } from "lucide-react";
import { MaxID_generator } from "@/redux/features/register_slice";
import Actions from "../../common/actions/actions";
import { times } from "../../../hotel/house-rules/check-in-out";
import { Trash } from "lucide-react";

const MultiSelector = ({
  origin,
  initial,
  label = "Day",
  callToAction = "Add activity",
  columns = [
    { id: 0, name: "time", actionBlocks: times },
    { id: 1, name: "time", actionBlocks: times },
    { id: 2, name: "time", actionBlocks: times },
  ],
}) => {
  const [actions, setActions] = useState(initial);
  const handleAddNewPlan = () => {
    setActions([
      ...actions,
      {
        ...initial[0],
        id: MaxID_generator(actions),
      },
    ]);
  };
  const handleRemovePlan = (id) => {
    setActions([...actions.filter((action) => action.id !== id)]);
  };

  return (
    <div className="border p-2 rounded-md mb-2">
      <h4 className="font-bold">
          {label} {origin.id + 1}
        </h4>
      <div className="grid grid-cols-1 gap-3 pb-5 pt-2">
        <div className="grid grid-cols-1 gap-2">
          {actions.map((action) => {
            return (
              <div key={action.id} className="relative flex flex-wrap gap-2">
                <Actions action={action} columns={columns} handleRemovePlan={handleRemovePlan}/>
              </div>
            );
          })}
        </div>
      </div>
      <Button
        variant="outline"
        className="flex items-center justify-center gap-2 w-auto ml-auto"
        onClick={handleAddNewPlan}
      >
        <span>{callToAction}</span>
        <IconWrapper>
          <PlusCircle className="stroke-gray-600" />
        </IconWrapper>
      </Button>
    </div>
  );
};

export default MultiSelector;
