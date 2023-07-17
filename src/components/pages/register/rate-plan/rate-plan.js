import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { User2Icon } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { FileWarning } from "lucide-react";

const RatePlan = () => {
  const groupSizePrice = {
    id: 0,
    title: "Price per group size",
    list: [
      {
        id: 0,
        text: "500",
        person: 2,
      },
      {
        id: 1,
        text: "400",
        person: 1,
      },
    ],
  };
  const rates = [
    {
      id: 0,
      title: "Standard rate plan",
      subTitle: "Cancellation policy",
      description:
        "This is set at the property level - any changes made will apply to all rooms",
      list: [
        {
          id: 0,
          text: "Guests can cancel their bookings for free before 6pm on the day of arrival. the guests will be charged cost of the first night if they cancel after this.",
        },
        {
          id: 1,
          text: "Guests who cancel within 24 hours will have their cancellation fee waived",
        },
      ],
    },
    {
      id: 1,
      title: "Non-refundable rate plan",
      subTitle: "Cancellation policy",
      description: "",
      list: [
        {
          id: 0,
          text: "Guests will pay 10% less than the standard rate for a non-refundable rate",
        },
        {
          id: 1,
          text: "Guests can't cancel their bookings for free anytime",
        },
      ],
    },
    {
      id: 2,
      title: "Weekly rate plan",
      subTitle: "Price and cancellation policy",
      description: "",
      list: [
        {
          id: 0,
          text: "Guests will pay 15% less than the standard rate when they book for at least 7 night",
        },
        {
          id: 1,
          text: "Guests can cancel their bookings for free before 6pm on the day of arrival. The guests wil be charged cost of the fist night if they cancel after this (based on the standard rate cancellation policy)",
        },
      ],
    },
  ];
  return (
    <div className="section-d max-w-[500px] grid grid-cols-1 gap-5">
      <h3 className="font-bold">Rate plan</h3>
      <p>
        To attract a winder range of guests, we suggest setting up multiple rate
        plan. The recommended prices and policies for each pla are based on data
        from properties like yours, but they can be edited now or after you
        complete registration
      </p>
      <div>
        {rates.map((item) => {
          const { id, title, subTitle, list } = item;
          return (
            <div className="grid grid-cols-1 gap-3 my-10" key={id}>
              <h3 className="font-bold flex items-center gap-2">
                {title}
                <IconWrapper>
                  <FileWarning />
                </IconWrapper>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {item.id === 0 ? (
                  <div>
                    {groupSizePrice.list.map((group) => {
                      return (
                        <div className="flex items-center gap-2" key={group.id}>
                          <div className="flex items-end gap-2 min-w-[50px]">
                            <IconWrapper>
                              <User2Icon />
                            </IconWrapper>
                            X {group.person}
                          </div>
                          <span>BDT {group.text}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
                <h4 className="font-semibold">{subTitle}</h4>
                {item.description ? (
                  <p className="text-xs">{item.description}</p>
                ) : null}

                <div className="grid grid-cols-1 gap-3">
                  {list.map((li) => {
                    return (
                      <div className="flex items-start gap-2" key={li.id}>
                        <IconWrapper>
                          <CheckCircle />
                        </IconWrapper>
                        <span>{li.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatePlan;
