"use client";

import RegisterLanding from "@/components/pages/register/RegisterLanding";
import RegisterWithEmail from "@/components/pages/register/RegisterWithEmail";
import { usePathname } from "next/navigation";

const RegisterDynamicComps = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname.includes("landing") ? (
        <RegisterLanding />
      ) : pathname.includes("with-email") ? (
        <RegisterWithEmail />
      ) : (
        "404 | No component found"
      )}
    </div>
  );
};

export default RegisterDynamicComps;
