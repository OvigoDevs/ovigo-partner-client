"use client";

import RegisterLanding from "@/components/pages/register/RegisterLanding";
import RegisterWithEmail from "@/components/pages/register/RegisterWithEmail";
import Test from "@/components/pages/register/test";
import { usePathname } from "next/navigation";

const RegisterDynamicComps = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname.includes("landing") ? (
        <RegisterLanding />
      ) : pathname.includes("with-email") ? (
        <RegisterWithEmail />
      ) : pathname.includes("test") ? (
        <Test />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default RegisterDynamicComps;
