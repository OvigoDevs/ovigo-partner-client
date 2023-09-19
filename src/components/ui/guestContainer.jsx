import GuestListingContent from "./guestListingContent";
import calender from "../../assets/home/calender.png";
import Image from "next/image";
const GuestContainer = () => {
  return (
    <div className=" container grid grid-cols-1 gap-4 lg:grid-cols-6 mt-10 py-10">
      <div className="col-span-4">
        <h2 className="text-[36px] font-bold text-black dark:text-white leading-[48px]">
          Get to know your <span className="text-[#26DE81]">guests</span>
        </h2>
        <p className="text-black text-[24px] dark:text-white font-normal font-roboto leading-[24px] mt-6">
          No matter where they are from, our guests share a few similarities.
        </p>
        <GuestListingContent />
      </div>
      <div className="col-span-2 flex items-end">
        <div className="relative w-[400px] h-[312px]">
          <Image src={calender} alt="" width={400} height={312} />
        </div>
      </div>
    </div>
  );
};

export default GuestContainer;
