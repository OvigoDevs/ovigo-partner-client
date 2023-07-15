"use client";

import ContactDetails from "@/components/pages/register/contact-details/contact-details";
import CreatePassword from "@/components/pages/register/create-password/create-password";
import HotelCategories from "@/components/pages/register/hotel-categories/hotel-categories";
import HotelTypeConfirmation from "@/components/pages/register/hotel-type-confirmation/hotel-type-confirmation";
import RegisterLanding from "@/components/pages/register/landing-page/register-landing";
import RegisterInfo from "@/components/pages/register/register-info/register-info";
import RegisterWithEmail from "@/components/pages/register/register-with-email/register-with-email";
import Verification from "@/components/pages/register/verification/verification";
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
      ) : pathname.includes("hotel-categories") ? (
        <HotelCategories />
      ) : pathname.includes("hotel-type-confirmation") ? (
        <HotelTypeConfirmation />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default RegisterDynamicComps;
