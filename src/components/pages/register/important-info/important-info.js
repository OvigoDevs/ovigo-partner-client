import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { BadgeCheck } from "lucide-react";

const ImportantInfo = () => {
  const info = [
    {
      id: 0,
      title: "Are booking confirmed right away?",
      description:
        "Yes, They are confirmed as soon as a guest makes a booking.",
      icon: (
        <IconWrapper>
          <BadgeCheck />
        </IconWrapper>
      ),
    },
    {
      id: 1,
      title: "Can I choose who can say at py place?",
      description:
        "No, if a date is open in your calendar, any guest using our site can book it",
      icon: (
        <IconWrapper>
          <BadgeCheck />
        </IconWrapper>
      ),
    },
    {
      id: 2,
      title: "Can I decide when I get bookings?",
      description:
        "Yes, the best way to do so it by keeping your calendar up to date. Close any dates you don't want bookings. If you have bookings on other site, close those dates too.",
      icon: (
        <IconWrapper>
          <BadgeCheck className="mt-[3px]"/>
        </IconWrapper>
      ),
    },
  ];
  return (
    <div className="section-d max-w-[500px] grid grid-cols-1 gap-5">
      <h3>Some important info before you list your hotel on Ovigo</h3>
      <div className="grid grid-cols-1 gap-3">
        {info.map((item) => {
          return (
            <div
              key={item.id}
              className="p-[1rem] rounded-md border flex items-start gap-3"
            >
              {item.icon}
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImportantInfo;
