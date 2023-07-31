import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return !pathname.includes("/register") ? (
    <div className="container bg-primary text-white dark:text-gray-800 py-5">
      <h2 className="text-center">All right reserved by Ovigo</h2>
    </div>
  ) : null;
};

export default Footer;
