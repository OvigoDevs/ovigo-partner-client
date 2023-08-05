"use client";

import CompanyStructure from "@/components/pages/register/tour-package/company-structure/company-structure";
import Organizer from "@/components/pages/register/tour-package/organizer/organizer";
import { usePathname } from "next/navigation";

const TourPackageDynamicPage = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname.includes("organizer") ? (
        <Organizer />
      ) : pathname.includes("company-structure") ? (
        <CompanyStructure />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default TourPackageDynamicPage;
