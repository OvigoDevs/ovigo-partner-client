"use client";

import AddDescription from "@/components/pages/register/tour-package/add-description/add-description";
import BusinessAddress from "@/components/pages/register/tour-package/business-address/business-address";
import BusinessLicense from "@/components/pages/register/tour-package/business-license/business-license";
import CompanyStructure from "@/components/pages/register/tour-package/company-structure/company-structure";
import ContactInformation from "@/components/pages/register/tour-package/contact-information/contact-information";
import HostNameAndProfile from "@/components/pages/register/tour-package/host-name-and-profile/host-name-and-profile";
import InvoiceInfo from "@/components/pages/register/tour-package/invoice-info/invoice-info";
import Organizer from "@/components/pages/register/tour-package/organizer/organizer";
import PackagePrice from "@/components/pages/register/tour-package/package-price/package-price";
import SeatAndGroupSize from "@/components/pages/register/tour-package/seat-and-group-size/seat-and-group-size";
import TourDestination from "@/components/pages/register/tour-package/tour-destination/tour-destination";
import TourPackageName from "@/components/pages/register/tour-package/tour-package-name/tour-package-name";
import { usePathname } from "next/navigation";

const TourPackageDynamicPage = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname.includes("organizer") ? (
        <Organizer />
      ) : pathname.includes("company-structure") ? (
        <CompanyStructure />
      ) : pathname.includes("business-address") ? (
        <BusinessAddress />
      ) : pathname.includes("contact-information") ? (
        <ContactInformation />
      ) : pathname.includes("business-license") ? (
        <BusinessLicense />
      ) : pathname.includes("invoice-info") ? (
        <InvoiceInfo />
      ) : pathname.includes("tour-package-name") ? (
        <TourPackageName />
      ) : pathname.includes("tour-destination") ? (
        <TourDestination />
      ) : pathname.includes("total-seat-n-group-size") ? (
        <SeatAndGroupSize />
      ) : pathname.includes("package-price") ? (
        <PackagePrice />
      ) : pathname.includes("host-name-and-profile") ? (
        <HostNameAndProfile />
      ) : pathname.includes("add-description") ? (
        <AddDescription />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default TourPackageDynamicPage;
