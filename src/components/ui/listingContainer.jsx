import React from "react";
import ListingContent from "./listingContent";

const ListingContainer = () => {
  return (
    <div className="flex justify-center w-full px-2">
      <div className="lg:w-[1000px] mx-auto bg-[#E7F8F7] dark:bg-gray-700 rounded-3xl p-10 shadow-lg">
        <h2 className="text-[#081634] dark:text-white text-[36px] font-bold capitalize mb-6 leading-[38px]">
          create your listing
        </h2>
        <ListingContent />
        <div className="border-t border-gray-600 dark:border-gray-300 pt-6 mt-2">
          <h3 className="text-[24px] text-black dark:text-white font-normal leading-[38px]">
            Create a partner account to get started
          </h3>
          <p className="font-light text-black dark:text-gray-400 text-base mt-4 leading-[20px]">
            By continuing, you agree to let Ovigo.net email you regarding your
            property registration.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <button className="main-button md:w-[614px] w-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingContainer;
