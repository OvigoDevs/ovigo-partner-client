import Image from "next/image";
import guestSectionImage from "../../../../images/guest-section.svg";
import { CheckCircle } from "lucide-react";

const KnowGuestsSection = () => {
  return (
    <div className="py-10 space-y-3 px-20">
      <h2 className="text-3xl font-bold">Get to know your guests</h2>
      <p>
        No matter where they&apos;re from, our guests share a few similarities.
      </p>
      <div className="grid md:grid-cols-2 gap-10 md:gap-4 pt-5">
        <div className="flex items-center">
          <ul className="space-y-3">
            <li className="flex items-center gap-4">
              <CheckCircle />
              75% of nights booked are by guests with 5 or more previous
              bookings
            </li>
            <li className="flex items-center gap-4">
              <CheckCircle />
              68% of nights booked are by families and couples
            </li>
            <li className="flex items-center gap-4">
              <CheckCircle />
              42% of nights booked are for properties other than hotels
            </li>
          </ul>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            src={guestSectionImage}
            alt="Guest Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default KnowGuestsSection;
