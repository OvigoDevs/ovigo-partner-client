import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "@/components/context/AuthProvider";
import { useRouter } from "next/navigation";

const Navbar = () => {
  // const Links = [
  //   {
  //     id: 0,
  //     text: "Become a Partner",
  //     link: "/register/landing",
  //   },
  // ];
  const router = useRouter();

  const { userEmail } = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.removeItem("ovigoLogInToken");
    router.push("/");
    window.location.reload();
  };

  console.log("user email: ", userEmail);

  return (
    <div className=" md:backdrop-blur md:sticky md:top-0 md:z-50 border-b">
      <div className="px-7 py-2 border-b flex w-full items-center justify-between md:hidden">
        <button className="rounded-md text-[16px] text-[#26DE81] font-semibold text-base border border-[#26DE81] capitalize hover:text-gray-800 duration-300 dark:hover:text-white h-[40px] px-[12px]  flex items-center gap-2  ">
          get App <HiOutlineDevicePhoneMobile />
        </button>
        <div className=" flex justify-end items-center  py-3 gap-2 ">
          <span className="w-10 h-10 rounded-full bg-[#cff1ef] text-[#136f40] duration-300 flex items-center justify-center cursor-pointer">
            <AiOutlineQuestionCircle className="text-xl" />
          </span>

          <span className="w-10 h-10 rounded-full bg-[#cff1ef] text-[#136f40] duration-300 flex items-center justify-center cursor-pointer">
            <FaRegBell className="text-xl" />
          </span>
          <ModeToggle />
        </div>
      </div>
      <div className="container flex items-center justify-between py-[20px] gap-5  ">
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
          <button className="sub-button md:flex items-center gap-2 hidden ">
            get App <HiOutlineDevicePhoneMobile />
          </button>
          <div className="md:flex items-center gap-2 hidden">
            <span className="w-10 h-10 rounded-full bg-[#cff1ef] text-[#136f40] duration-300 flex items-center justify-center cursor-pointer">
              <AiOutlineQuestionCircle className="text-xl" />
            </span>

            <span className="w-10 h-10 rounded-full bg-[#cff1ef] text-[#136f40] duration-300 flex items-center justify-center cursor-pointer">
              <FaRegBell className="text-xl" />
            </span>
            <ModeToggle />
          </div>

          {userEmail ? (
            <>
              <button className="main-button" onClick={() => handleLogOut()}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/register/with-email" className="main-button">
                Register Service
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
