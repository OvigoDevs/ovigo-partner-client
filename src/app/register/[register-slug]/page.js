"use client";
import { usePathname  } from "next/navigation";

const RegisterDynamicComps = () => {
  const pathname = usePathname ();
  return <div>RegisterDynamicComps - </div>;
};

export default RegisterDynamicComps;
