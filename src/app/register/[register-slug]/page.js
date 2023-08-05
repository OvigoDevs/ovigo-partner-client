"use client";

import ContactDetails from "@/components/pages/register/common/contact-details/contact-details";
import CreatePassword from "@/components/pages/register/common/create-password/create-password";
import RegisterLanding from "@/components/pages/register/common/landing-page/register-landing";
import RegisterInfo from "@/components/pages/register/common/register-info/register-info";
import RegisterWithEmail from "@/components/pages/register/common/register-with-email/register-with-email";
import ServiceCategory from "@/components/pages/register/common/service-category/service-category";
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
      ) : pathname.includes("service-category") ? (
        <ServiceCategory />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default RegisterDynamicComps;
