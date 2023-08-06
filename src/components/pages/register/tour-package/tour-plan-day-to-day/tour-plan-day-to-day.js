import Backlink from "@/components/core/backlink/backlink";
import Activity from "../common/activity/activity";
import { Button } from "@/components/ui/button";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { PlusCircle } from "lucide-react";

const TourPlanDayToDay = () => {
  return (
    <div className="section-d">
      <Backlink link="/" text="Back" />
      <div>
        <h3>Day to day tour plan</h3>
        <p>
          Include when, where team visits and what they will do there. Remember,
          the more details you give, the more tourists you will attract.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <Activity />
        <Button variant="outline" className="flex items-center justify-center gap-2 w-[200px]">
          <span>Add activity</span>
          <IconWrapper>
            <PlusCircle className="stroke-gray-600"/>
          </IconWrapper>
        </Button>
      </div>
    </div>
  );
};

export default TourPlanDayToDay;
