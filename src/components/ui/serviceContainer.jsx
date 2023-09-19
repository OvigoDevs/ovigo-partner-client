import React from "react";
import service1 from "../../assets/home/service/1.png";
import service2 from "../../assets/home/service/2.png";
import service3 from "../../assets/home/service/3.png";
import service4 from "../../assets/home/service/4.png";
import service5 from "../../assets/home/service/5.png";
import service6 from "../../assets/home/service/6.png";
import Image from "next/image";
const ServiceContainer = () => {
  return (
    <div className="container pt-20 pb-8 ">
      <h1 className="text-black dark:text-white  text-[36px] font-bold font-roboto leading-[50px]">
        <span className="text-[#26DE81]">Benefit</span> of working with us
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-[#E7F8F7] dark:bg-gray-800   rounded-3xl pt-6 pl-6 pr-4 pb-8">
          <Image src={service1} alt="" width={45} height={45} />
          <h2 className="text-[24px] font-medium text-black dark:text-white my-4 leading-[50px]">
            Easily import details
          </h2>
          <p className="text-black dark:text-white text-normal leading-[30px] text-[24px]">
            Streamline listings, import details, saving you invaluable time.
          </p>
        </div>

        <div className="bg-[#E7F8F7] dark:bg-gray-800 rounded-3xl pt-6 pl-6 pr-4 pb-8">
          <Image src={service2} alt="" width={45} height={45} />
          <h2 className="text-[24px] font-medium text-black dark:text-white my-4 leading-[50px]">
            Easily import details
          </h2>
          <p className="text-black dark:text-white text-normal leading-[30px] text-[24px]">
            Effortlessly save time with seamless listing import, no hassles.
          </p>
        </div>

        <div className="bg-[#E7F8F7] dark:bg-gray-800 rounded-3xl pt-6 pl-6 pr-4 pb-8">
          <Image src={service3} alt="" width={45} height={45} />
          <h2 className="text-[24px] font-medium text-black dark:text-white my-4 leading-[50px]">
            Step-by-step guidance
          </h2>
          <p className="text-black dark:text-white text-normal leading-[30px] text-[24px]">
            Unlock success with step-by-step guidance, your journey simplified.
          </p>
        </div>

        <div className="bg-[#E7F8F7] dark:bg-gray-800 rounded-3xl pt-6 pl-6 pr-4 pb-8">
          <Image src={service4} alt="" width={45} height={45} />
          <h2 className="text-[24px] font-medium text-black dark:text-white my-4 leading-[50px]">
            Enjoy more flexibility
          </h2>
          <p className="text-black dark:text-white text-normal leading-[30px] text-[24px]">
            Smart Flex Reservations, Embrace free cancellations, indulge your
            guests.
          </p>
        </div>

        <div className="bg-[#E7F8F7] dark:bg-gray-800 rounded-3xl pt-6 pl-6 pr-4 pb-8">
          <Image src={service5} alt="" width={45} height={45} />
          <h2 className="text-[24px] font-medium text-black dark:text-white my-4 leading-[50px]">
            Review Score
          </h2>
          <p className="text-black dark:text-white text-normal leading-[30px] text-[24px]">
            Your esteemed third-party accolades illuminate Ovigo listing page.
          </p>
        </div>

        <div className="bg-[#E7F8F7] dark:bg-gray-800 rounded-3xl pt-6 pl-6 pr-4 pb-8">
          <Image src={service5} alt="" width={45} height={45} />
          <h2 className="text-[24px] font-medium text-black dark:text-white my-4 leading-[50px]">
            unique discounts
          </h2>
          <p className="text-black dark:text-white text-normal leading-[30px] text-[24px]">
            Elevate guests stay with time-saving discounts and enhanced
            indulgence
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
