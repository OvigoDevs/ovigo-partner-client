"use client";

import BusinessAddress from "@/components/pages/register/tour-package/business-address/business-address";
import BusinessLicense from "@/components/pages/register/tour-package/business-license/business-license";
import CompanyStructure from "@/components/pages/register/tour-package/company-structure/company-structure";
import ContactInformation from "@/components/pages/register/tour-package/contact-information/contact-information";
import InvoiceInfo from "@/components/pages/register/tour-package/invoice-info/invoice-info";
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
      ) : pathname.includes("business-address") ? (
        <BusinessAddress />
      ) : pathname.includes("contact-information") ? (
        <ContactInformation />
      ) : pathname.includes("business-license") ? (
        <BusinessLicense />
      ) : pathname.includes("invoice-info") ? (
        <InvoiceInfo />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default TourPackageDynamicPage;
