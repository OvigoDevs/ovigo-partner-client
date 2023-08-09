"use client";

import AddDescription from "@/components/pages/register/tour-package/add-description/add-description";
import BusinessAddress from "@/components/pages/register/tour-package/business-address/business-address";
import BusinessLicense from "@/components/pages/register/tour-package/business-license/business-license";
import CompanyStructure from "@/components/pages/register/tour-package/company-structure/company-structure";
import ContactInformation from "@/components/pages/register/tour-package/contact-information/contact-information";
import HostNameAndProfile from "@/components/pages/register/tour-package/host-name-and-profile/host-name-and-profile";
import InvoiceInfo from "@/components/pages/register/tour-package/invoice-info/invoice-info";
import Organizer from "@/components/pages/register/tour-package/organizer/organizer";
import TourDateAndTime from "@/components/pages/register/tour-package/tour-date-and-time/tour-date-and-time";
import TourPlanDayToDay from "@/components/pages/register/tour-package/tour-plan-day-to-day/tour-plan-day-to-day";
import PackagePrice from "@/components/pages/register/tour-package/package-price/package-price";
import SeatAndGroupSize from "@/components/pages/register/tour-package/seat-and-group-size/seat-and-group-size";
import TourDestination from "@/components/pages/register/tour-package/tour-destination/tour-destination";
import TourPackageName from "@/components/pages/register/tour-package/tour-package-name/tour-package-name";
import { usePathname } from "next/navigation";
import TourAccomodation from "@/components/pages/register/tour-package/tour-accomodation/tour-accomodation";
import TourExclusions from "@/components/pages/register/tour-package/tour-exclusions/tour-exclusions";
import TourAddons from "@/components/pages/register/tour-package/tour-addons/tour-addons";
import TourMeals from "@/components/pages/register/tour-package/tour-meals/tour-meals";
import TourJourneyDetails from "@/components/pages/register/tour-package/tour-journey-details/tour-journey-details";
import TourHealthAndSafety from "@/components/pages/register/tour-package/tour-health-and-safety/tour-health-and-safety";
import BookingAndCancellationPolicy from "@/components/pages/register/tour-package/tour-booking-and-cancellation-policy/tour-booking-and-cancellation-policy";
import TourAddPhotos from "@/components/pages/register/tour-package/tour-add-photos/tour-add-photos";
import RegistrationProgress from "@/components/pages/register/tour-package/registration-progress/registration-progress";

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
      ) : pathname.includes("tour-plan-day-to-day") ? (
        <TourPlanDayToDay />
      ) : pathname.includes("tour-package-name") ? (
        <TourPackageName />
      ) : pathname.includes("tour-destination") ? (
        <TourDestination />
      ) : pathname.includes("total-seat-n-group-size") ? (
        <SeatAndGroupSize />
      ) : pathname.includes("package-price") ? (
        <PackagePrice />
      ) : pathname.includes("tour-accomodation") ? (
        <TourAccomodation />
      ) : pathname.includes("tour-exclusions") ? (
        <TourExclusions />
      ) : pathname.includes("tour-addons") ? (
        <TourAddons />
      ) : pathname.includes("tour-meals") ? (
        <TourMeals />
      ) : pathname.includes("tour-journey-details") ? (
        <TourJourneyDetails />
      ) : pathname.includes("tour-health-and-safety") ? (
        <TourHealthAndSafety />
      ) : pathname.includes("tour-booking-and-cancellation-policy") ? (
        <BookingAndCancellationPolicy />
      ) : pathname.includes("host-name-and-profile") ? (
        <HostNameAndProfile />
      ) : pathname.includes("add-description") ? (
        <AddDescription />
      ) : pathname.includes("tour-add-photos") ? (
        <TourAddPhotos />
      ) : pathname.includes("registration-progress") ? (
        <RegistrationProgress />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default TourPackageDynamicPage;
