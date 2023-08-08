import { Button } from "@/components/ui/button";
import PopOverSelect from "./pop-over-select/pop-over-select";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Trash } from "lucide-react";

const Actions = ({ action, columns, handleRemovePlan }) => {
  return (
    <div>
      <div className="flex items-center flex-wrap gap-3">
        {columns.map((column) => {
          console.log(action)
          return (
            <div key={column.id}>
              {Array.isArray(column.actionBlocks) ? (
                <PopOverSelect
                  key={column.id}
                  optionsToSelect={column.actionBlocks}
                  placeholder={column.name}
                  defaultValue={action[column.name]}
                />
              ) : (
                <input placeholder={column.name} defaultValue={action[column.name]} />
              )}
            </div>
          );
        })}
        <Button
          variant="outline"
          className="inline-block cursor-pointer flex items-center justify-center gap-2 border-none"
          onClick={() => handleRemovePlan(action.id)}
        >
          <IconWrapper>
            <Trash className="stroke-red-600" />
          </IconWrapper>
        </Button>
      </div>
    </div>
  );
};

export default Actions;
