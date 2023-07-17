"use client";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import SideNav from "@/components/pages/register/sidenav/sidenav";
import { MenuIcon } from "lucide-react";
import { MenuSquareIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const RegisterLayout = ({ children }) => {
  const pathname = usePathname();
  const [openSideNav, setOpenSideNav] = useState(true);
  useEffect(() => {
    setOpenSideNav(false);
  }, [pathname]);

  return (
    <div className="container-d flex items-start justify-start gap-[1rem]">
      <div
        className={`fixed  md:sticky left-0 z-10 transition ease-in-out duration-500 top-[56px] md:top-[76px] ${
          openSideNav ? "translate-x-0" : "-translate-x-[100%] md:translate-x-0"
        }`}
      >
        <SideNav setOpenSideNav={setOpenSideNav} />
      </div>
      <div
        className={`fixed top-[76px] md:hidden right-0 backdrop-blur p-2 z-9 transition ease-in-out duration-500 rounded-md border m-[1rem] z-10 ${
          !openSideNav ? "translate-x-0" : "translate-x-[150%] md:translate-x-0"
        }`}
      >
        <IconWrapper>
          <MenuIcon
            className="min-w-[25px] min-h-[25px]"
            onClick={() => setOpenSideNav(true)}
          />
        </IconWrapper>
      </div>
      <div className="w-full md:border-l pl-[1rem] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default RegisterLayout;
