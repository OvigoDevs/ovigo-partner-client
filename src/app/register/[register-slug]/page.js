"use client";

import HotelAddress from "@/components/pages/register/hotel-address/hotel-address";
import RegisterLanding from "@/components/pages/register/landing-page/register-landing";
import NoOfHotel from "@/components/pages/register/no-of-hotel/no-of-hotel";
import PopularFacilities from "@/components/pages/register/popular-facilities/popular-facilities";
import RegisterInfo from "@/components/pages/register/register-info/register-info";
import RegisterWithEmail from "@/components/pages/register/register-with-email/register-with-email";
import ServiceCategory from "@/components/pages/register/service-category/service-category";
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
      ) : pathname.includes("service-category") ? (
        <ServiceCategory />
      ) : pathname.includes("no-of-hotel") ? (
        <NoOfHotel />
      ) : pathname.includes("hotel-address") ? (
        <HotelAddress />
      ) : pathname.includes("popular-facilities") ? (
        <PopularFacilities />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default RegisterDynamicComps;
