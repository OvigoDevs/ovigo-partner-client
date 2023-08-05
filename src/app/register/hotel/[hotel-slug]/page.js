"use client";

import AddPhotos from "@/components/pages/register/hotel/add-photos/add-photos";
import BathroomDetails from "@/components/pages/register/hotel/bathroom-details/bathroom-details";
import BreakfastDetails from "@/components/pages/register/hotel/breakfast-details/breakfast-details";
import ConfirmHotel from "@/components/pages/register/hotel/confirm-hotel/confirm-hotel";
import GuestPayment from "@/components/pages/register/hotel/guest-payment/guest-payment";
import HotelAddress from "@/components/pages/register/hotel/hotel-address/hotel-address";
import HotelCategories from "@/components/pages/register/hotel/hotel-categories/hotel-categories";
import HotelDetailsCompletion from "@/components/pages/register/hotel/hotel-details-completion/hotel-details-completions";
import HotelInformation from "@/components/pages/register/hotel/hotel-information/hotel-information";
import HotelTypeConfirmation from "@/components/pages/register/hotel/hotel-type-confirmation/hotel-type-confirmation";
import HouseRules from "@/components/pages/register/hotel/house-rules/house-rules";
import ImportantInfo from "@/components/pages/register/hotel/important-info/important-info";
import InvoiceInfo from "@/components/pages/register/hotel/invoice-info/invoice-info";
import Languages from "@/components/pages/register/hotel/languages/languages";
import NoOfHotel from "@/components/pages/register/hotel/no-of-hotel/no-of-hotel";
import ParkingDetails from "@/components/pages/register/hotel/parking-details/parking-details";
import PopularFacilities from "@/components/pages/register/hotel/popular-facilities/popular-facilities";
import RatePlan from "@/components/pages/register/hotel/rate-plan/rate-plan";
import RoomDetails from "@/components/pages/register/hotel/room-details/room-details";
import RoomFeatures from "@/components/pages/register/hotel/room-features/room-features";
import RoomName from "@/components/pages/register/hotel/room-name/room-name";
import RoomPrice from "@/components/pages/register/hotel/room-price/room-price";

import { usePathname } from "next/navigation";

const HotelDynamicComps = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div>
      {pathname.includes("hotel-categories") ? (
        <HotelCategories />
      ) : pathname.includes("hotel-type-confirmation") ? (
        <HotelTypeConfirmation />
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
      ) : pathname.includes("guest-payment") ? (
        <GuestPayment />
      ) : pathname.includes("important-info") ? (
        <ImportantInfo />
      ) : pathname.includes("invoice-info") ? (
        <InvoiceInfo />
      ) : pathname.includes("confirm-hotel") ? (
        <ConfirmHotel />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default HotelDynamicComps;
