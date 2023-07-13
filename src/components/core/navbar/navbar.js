import { ModeToggle } from "@/components/ui/mode-toggle";
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
    <nav className="container flex items-center justify-between gap-5 py-2">
      <Link href="/">
        <div className="font-black cursor-default lg:cursor-pointer">Ovigo</div>
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
