"use client";

import ContactDetails from "@/components/pages/register/common/contact-details/contact-details";
import CreatePassword from "@/components/pages/register/common/create-password/create-password";
import RegisterLanding from "@/components/pages/register/common/landing-page/register-landing";
import RegisterInfo from "@/components/pages/register/common/register-info/register-info";
import RegisterWithEmail from "@/components/pages/register/common/register-with-email/register-with-email";
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
import ServiceCategory from "@/components/pages/register/hotel/service-category/service-category";
import Verification from "@/components/pages/register/common/verification/verification";
import { usePathname } from "next/navigation";

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
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default RegisterDynamicComps;
