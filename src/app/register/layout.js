"use client";
import SideNav from "@/components/pages/register/sidenav/sidenav";
import { usePathname } from "next/navigation";

const RegisterLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="container-d flex items-start justify-start gap-[1rem]">
      <div className="min-w-[250px] min-h-[100vh] border-r py-[1rem]">
        <SideNav />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default RegisterLayout;
