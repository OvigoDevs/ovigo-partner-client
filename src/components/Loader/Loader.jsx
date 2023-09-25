import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="bg-white w-full h-screen flex items-center justify-center">
      <div className="z-50">
        <Image src="/loader.png" alt="" width={70} height={70} />
      </div>
    </div>
  );
};

export default Loader;
