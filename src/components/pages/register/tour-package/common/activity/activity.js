import { times } from "../../../hotel/house-rules/check-in-out";
import PopOverSelect from "./pop-over-select/pop-over-select";

const activities = [
  {
    id: 0,
    value: "abc",
    label: "abs",
  },
];

const places = [
  {
    id: 0,
    value: "abc",
    label: "abs",
  },
];

const Activity = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <PopOverSelect optionsToSelect={times} placeholder="time" />
        <PopOverSelect optionsToSelect={activities} placeholder="activity" />
        <PopOverSelect optionsToSelect={places} placeholder="place" />
      </div>
    </div>
  );
};

export default Activity;
