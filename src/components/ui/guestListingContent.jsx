import Image from "next/image";
import check from "../../assets/home/check.png";
const GuestListingContent = () => {
  return (
    <div className="bg-[#E7F8F7] dark:bg-gray-800 rounded-[50px] p-10 mt-10 shadow-xl">
      <div className="flex gap-4 items-start  mb-[19px] ">
        <Image src={check} alt="" width={40} height={40} />
        <p className="text-[20px] font-normal text-black leading-[30px] dark:text-gray-200">
          75% of nights booked are by guests with 5 or more previous bookings
        </p>
      </div>
      <div className="flex gap-4 items-start  mb-[19px]  ">
        <Image src={check} alt="" width={40} height={40} />
        <p className="text-[20px] font-normal text-black leading-[30px] dark:text-gray-200">
          68% of nights booked are by families and couples
        </p>
      </div>
      <div className="flex gap-4 items-start  mb-[19px] ">
        <Image src={check} alt="" width={40} height={40} />
        <p className="text-[20px] font-normal text-black dark:text-gray-200 leading-[30px]">
          42% of nights booked are for properties other than hotels
        </p>
      </div>
    </div>
  );
};

export default GuestListingContent;
