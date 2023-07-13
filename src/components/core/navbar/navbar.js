import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const Links = [
    {
      id: 0,
      text: "Become a Partner",
      link: "/register/landing",
    },
  ];
  return (
    <nav className="container-d flex items-center justify-between gap-5 py-2 backdrop-blur sticky top-0 z-50 border-b">
      <Link href="/">
        <div className="font-black cursor-default lg:cursor-pointer flex items-center justify-start gap-2">
          <Image
            src="/images/OvigoLogo.png"
            alt="Logo"
            width={30}
            height={30}
          />
          <span className="text-primary">Ovigo</span>
        </div>
      </Link>
      <ul>
        {Links.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};
export default Navbar;
