import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  const Links = [
    {
      id: 0,
      text: "Become a Partner",
      link: "/register/landing",
    },
  ];
  return (
    <div className="container flex items-center justify-between py-[20px] gap-5  backdrop-blur sticky top-0 z-50 border-b overflow-hidden">
      <Link href="/">
        <div className="cursor-default lg:cursor-pointer">
          <Image
            src="/images/OvigoLogo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="w-[100px]"
          />
        </div>
      </Link>
      <nav className="flex items-center gap-[24px]">
        <button className="sub-button flex items-center gap-2">
          get App <HiOutlineDevicePhoneMobile />
        </button>
        <div className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-full bg-[#cff1ef] text-[#136f40] duration-300 flex items-center justify-center cursor-pointer">
            <AiOutlineQuestionCircle className="text-xl" />
          </span>

          <span className="w-10 h-10 rounded-full bg-[#cff1ef] text-[#136f40] duration-300 flex items-center justify-center cursor-pointer">
            <FaRegBell className="text-xl" />
          </span>
          <ModeToggle />
        </div>
        <button className="main-button">Register Service</button>
      </nav>
    </div>
  );
};
export default Navbar;
