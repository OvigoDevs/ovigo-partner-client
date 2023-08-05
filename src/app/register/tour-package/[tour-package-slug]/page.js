"use client";

import CompanyStructure from "@/components/pages/register/tour-package/company-structure/company-structure";
import Organizer from "@/components/pages/register/tour-package/organizer/organizer";
import TourDateAndTime from "@/components/pages/register/tour-package/tour-date-and-time/tour-date-and-time";
import { usePathname } from "next/navigation";

const TourPackageDynamicPage = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname.includes("organizer") ? (
        <Organizer />
      ) : pathname.includes("company-structure") ? (
        <CompanyStructure />
      ) : pathname.includes("tour-date-and-time") ? (
        <TourDateAndTime />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default TourPackageDynamicPage;
