"use client";

import { usePathname } from "next/navigation";

const TourPackageDynamicPage = () => {
  const pathname = usePathname();
  return (
    <div>
      {/* {pathname.includes("confirm-hotel") ? (
        <ConfirmHotel />
      ) : (
        "404 | No component found"
      )} */}
      {pathname}
    </div>
  );
};

export default TourPackageDynamicPage;
