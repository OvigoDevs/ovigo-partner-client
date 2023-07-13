"use client";
import { usePathname } from "next/navigation";

const RegisterLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="container-d section-d">
      layout - pathname - {pathname}
      {children}
    </div>
  );
};

export default RegisterLayout;
