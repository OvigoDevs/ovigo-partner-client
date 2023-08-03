import Image from "next/image";
import { CheckCircle } from "lucide-react";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";

const KnowGuestsSection = () => {
  return (
    <div className="section-p section-m">
      <div className="grid lg:grid-cols-2 gap-10 pt-5">
        <div className="my-auto grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-4xl font-bold">Get to know your guests</h2>
            <p>
              No matter where they&apos;re from, our guests share a few
              similarities.
            </p>
          </div>
          <div className="flex items-center">
            <ul className="grid grid-cols-1 gap-3">
              <li className="flex items-start gap-[1rem]">
                <IconWrapper>
                  <CheckCircle className="mt-[4px]" />
                </IconWrapper>
                75% of nights booked are by guests with 5 or more previous
                bookings
              </li>
              <li className="flex items-start gap-[1rem]">
                <IconWrapper>
                  <CheckCircle className="mt-[4px]" />
                </IconWrapper>
                68% of nights booked are by families and couples
              </li>
              <li className="flex items-start gap-[1rem]">
                <IconWrapper>
                  <CheckCircle className="mt-[4px]" />
                </IconWrapper>
                42% of nights booked are for properties other than hotels
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            src="/images/guest-section.svg"
            alt="Guest Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default KnowGuestsSection;
