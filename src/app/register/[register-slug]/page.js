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
import ParkingDetails from "@/components/pages/register/parking-details/parking-details";
import HouseRules from "@/components/pages/register/house-rules/house-rules";
import RoomDetails from "@/components/pages/register/room-details/room-details";
import RoomPrice from "@/components/pages/register/room-price/room-price";

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
      ) : pathname.includes("parking-details") ? (
        <ParkingDetails />
      ) : pathname.includes("house-rules") ? (
        <HouseRules />
      ) : pathname.includes("room-details") ? (
        <RoomDetails />
      ) : pathname.includes("room-price") ? (
        <RoomPrice />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default RegisterDynamicComps;
