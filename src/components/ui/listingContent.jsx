import Image from "next/image";
import check from "../../assets/home/check.png";

const ListingContent = () => {
  return (
    <div>
      <div className="flex gap-4 items-start  mb-[19px] ">
        <Image src={check} alt="" width={40} height={40} />
        <p className="text-[30px] font-normal text-black leading-[38px] dark:text-gray-200">
          More than 6.4 million vacation rentals already listed
        </p>
      </div>
      <div className="flex gap-4 items-start  mb-[19px]  ">
        <Image src={check} alt="" width={40} height={40} />
        <p className="text-[30px] font-normal text-black leading-[38px] dark:text-gray-200">
          Over 1 billion vacation rental guest arrivals
        </p>
      </div>
      <div className="flex gap-4 items-start  mb-[19px] ">
        <Image src={check} alt="" width={40} height={40} />
        <p className="text-[30px] font-normal text-black dark:text-gray-200 leading-[38px]">
          More than 40% of new vacation rental listings get their first booking
          within a week
        </p>
      </div>
    </div>
  );
};

export default ListingContent;
