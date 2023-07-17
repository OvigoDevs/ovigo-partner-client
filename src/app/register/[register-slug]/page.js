"use client";

import ContactDetails from "@/components/pages/register/contact-details/contact-details";
import CreatePassword from "@/components/pages/register/create-password/create-password";
import HotelCategories from "@/components/pages/register/hotel-categories/hotel-categories";
import HotelTypeConfirmation from "@/components/pages/register/hotel-type-confirmation/hotel-type-confirmation";
import HotelAddress from "@/components/pages/register/hotel-address/hotel-address";
import RegisterLanding from "@/components/pages/register/landing-page/register-landing";
import NoOfHotel from "@/components/pages/register/no-of-hotel/no-of-hotel";
import PopularFacilities from "@/components/pages/register/popular-facilities/popular-facilities";
import RegisterInfo from "@/components/pages/register/register-info/register-info";
import RegisterWithEmail from "@/components/pages/register/register-with-email/register-with-email";
import Verification from "@/components/pages/register/verification/verification";
import ServiceCategory from "@/components/pages/register/service-category/service-category";
import { usePathname } from "next/navigation";
import HotelInformation from "@/components/pages/register/hotel-information/hotel-information";
import BreakfastDetails from "@/components/pages/register/breakfast-details/breakfast-details";
import RoomDetails from "@/components/pages/register/room-details/room-details";
import Languages from "@/components/pages/register/languages/languages";
import ParkingDetails from "@/components/pages/register/parking-details/parking-details";
import HouseRules from "@/components/pages/register/house-rules/house-rules";
import RoomPrice from "@/components/pages/register/room-price/room-price";
import BathroomDetails from "@/components/pages/register/bathroom-details/bathroom-details";
import HotelDetailsCompletion from "@/components/pages/register/hotel-details-completion/hotel-details-completions";
import RoomFeatures from "@/components/pages/register/room-features/room-features";
import RoomName from "@/components/pages/register/room-name/room-name";
import RatePlan from "@/components/pages/register/rate-plan/rate-plan";
import AddPhotos from "@/components/pages/register/add-photos/add-photos";

const RegisterDynamicComps = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname.includes("landing") ? (
        <RegisterLanding />
      ) : pathname.includes("with-email") ? (
        <RegisterWithEmail />
      ) : pathname.includes("register-info") ? (
        <RegisterInfo />
      ) : pathname.includes("verification") ? (
        <Verification />
      ) : pathname.includes("create-password") ? (
        <CreatePassword />
      ) : pathname.includes("contact-details") ? (
        <ContactDetails />
      ) : pathname.includes("hotel-categories") ? (
        <HotelCategories />
      ) : pathname.includes("hotel-type-confirmation") ? (
        <HotelTypeConfirmation />
      ) : pathname.includes("service-category") ? (
        <ServiceCategory />
      ) : pathname.includes("no-of-hotel") ? (
        <NoOfHotel />
      ) : pathname.includes("hotel-address") ? (
        <HotelAddress />
      ) : pathname.includes("popular-facilities") ? (
        <PopularFacilities />
      ) : pathname.includes("hotel-information") ? (
        <HotelInformation />
      ) : pathname.includes("breakfast-details") ? (
        <BreakfastDetails />
      ) : pathname.includes("room-details") ? (
        <RoomDetails />
      ) : pathname.includes("languages") ? (
        <Languages />
      ) : pathname.includes("parking-details") ? (
        <ParkingDetails />
      ) : pathname.includes("house-rules") ? (
        <HouseRules />
      ) : pathname.includes("room-details") ? (
        <RoomDetails />
      ) : pathname.includes("bath-details") ? (
        <BathroomDetails />
      ) : pathname.includes("room-price") ? (
        <RoomPrice />
      ) : pathname.includes("hotel-details-completion") ? (
        <HotelDetailsCompletion />
      ) : pathname.includes("room-features") ? (
        <RoomFeatures />
      ) : pathname.includes("room-name") ? (
        <RoomName />
      ) : pathname.includes("rate-plan") ? (
        <RatePlan />
      ) : pathname.includes("add-photos") ? (
        <AddPhotos />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default RegisterDynamicComps;
