import { times } from "../../../hotel/house-rules/check-in-out";
import PopOverSelect from "./pop-over-select/pop-over-select";

const activities = [
  {
    id: 0,
    value: "abc",
    label: "abc",
  },
  {
    id: 1,
    value: "xyz",
    label: "xyz",
  },
];

const places = [
  {
    id: 0,
    value: "abc",
    label: "abc",
  },
  {
    id: 1,
    value: "xyz",
    label: "xyz",
  },
];

const Activity = ({ plan }) => {
  const { time, activity, place } = plan;
  return (
    <div>
      <div className="flex items-center gap-3">
        <PopOverSelect
          optionsToSelect={times}
          placeholder="time"
          defaultValue={time}
        />
        <PopOverSelect
          optionsToSelect={activities}
          placeholder="activity"
          defaultValue={activity}
        />
        <PopOverSelect
          optionsToSelect={places}
          placeholder="place"
          defaultValue={place}
        />
      </div>
    </div>
  );
};

export default Activity;
