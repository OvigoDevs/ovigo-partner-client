"use client";
import { usePathname } from "next/navigation";

const RegisterLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      layout
      {children}
    </div>
  );
};

export default RegisterLayout;
