import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import footerLogo from "../../../assets/footer-logo.png";

const Footer = () => {
  //!Previous code
  // const pathname = usePathname();
  // return !pathname.includes("/register") ? (
  //   <div className="container bg-primary text-white dark:text-gray-800 py-5">
  //     <h2 className="text-center">All right reserved by Ovigo</h2>
  //   </div>
  // ) : null;

  const links = [
    {
      id: 1,
      text: "Overview",
      url: "/",
    },
    {
      id: 2,
      text: "Features",
      url: "/",
    },
    {
      id: 3,
      text: "Pricing",
      url: "/",
    },
    {
      id: 4,
      text: "Careers",
      url: "/",
    },
    {
      id: 5,
      text: "Help",
      url: "/",
    },
    {
      id: 6,
      text: "Pricing",
      url: "/",
    },
  ];

  return (
    <footer className="bg-[#105D36] dark:bg-[#105D36]">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center text-center">
          <div className="w-[164px] h-[134px] relative">
            <Link href="/">
              <Image
                src={footerLogo}
                alt="Logo"
                fill
                className="object-cover"
              />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center  mt-3 -mx-4 lg:mt-0 lg:-mx-0 mb-3 lg:mb-0">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="mx-4 text-sm text-white transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <hr className="mb-4 mt-2 dark:border-gray-200 border-[#0A7B76]" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between mt-3">
          <p className="text-sm text-white dark:text-gray-300">
            © 2077 Untitled UI. All rights reserved.
          </p>

          <div className="flex -mx-2 mt-2 lg:mt-0">
            <Link
              href="/"
              className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-gray-300 dark:hover:text-white"
              aria-label="Reddit"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-gray-300 dark:hover:text-gary-400"
              aria-label="Facebook"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-gray-300 dark:hover:text-gray-400"
              aria-label="Github"
            >
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
