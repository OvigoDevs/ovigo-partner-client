"use client";

import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { UserPlus } from "lucide-react";
import { Text } from "lucide-react";
import { CheckCircle2Icon } from "lucide-react";
import { List } from "lucide-react";
import { Hotel } from "lucide-react";
import { ListTodo } from "lucide-react";
import { Check } from "lucide-react";
import { Car } from "lucide-react";
import { Bed } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { Scale } from "lucide-react";
import { Newspaper } from "lucide-react";
import { Key } from "lucide-react";
import { ShowerHead } from "lucide-react";
import { MapPin } from "lucide-react";
import { Briefcase } from "lucide-react";
import { CrossIcon } from "lucide-react";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SideNav = ({ setOpenSideNav }) => {
  const [currentLink, setCurrentLink] = useState(0);
  const pathname = usePathname();
  const links = [
    {
      id: 0,
      text: "Overview",
      link: "/register/landing",
      icon: (
        <IconWrapper>
          <Home />
        </IconWrapper>
      ),
    },
    {
      id: 1,
      text: "Sign up with email",
      link: "/register/with-email",
      icon: (
        <IconWrapper>
          <UserPlus />
        </IconWrapper>
      ),
    },
    {
      id: 2,
      text: "Verification",
      link: "/register/verification",
      icon: (
        <IconWrapper>
          <Check />
        </IconWrapper>
      ),
    },
    {
      id: 3,
      text: "Register info",
      link: "/register/register-info",
      icon: (
        <IconWrapper>
          <Text />
        </IconWrapper>
      ),
    },
    {
      id: 4,
      text: "Contact details",
      link: "/register/contact-details",
      icon: (
        <IconWrapper>
          <List />
        </IconWrapper>
      ),
    },
    {
      id: 5,
      text: "Create password",
      link: "/register/create-password",
      icon: (
        <IconWrapper>
          <Key />
        </IconWrapper>
      ),
    },
    {
      id: 6,
      text: "Service Category",
      link: "/register/service-category",
      icon: (
        <IconWrapper>
          <Briefcase />
        </IconWrapper>
      ),
    },
    {
      id: 7,
      text: "Hotel categories",
      link: "/register/hotel-categories",
      icon: (
        <IconWrapper>
          <Hotel />
        </IconWrapper>
      ),
    },
    {
      id: 8,
      text: "Hotels",
      link: "/register/no-of-hotel",
      icon: (
        <IconWrapper>
          <Newspaper />
        </IconWrapper>
      ),
    },
    {
      id: 9,
      text: "Hotel Type",
      link: "/register/hotel-type-confirmation",
      icon: (
        <IconWrapper>
          <ListTodo />
        </IconWrapper>
      ),
    },
    {
      id: 10,
      text: "Hotel Address",
      link: "/register/hotel-address",
      icon: (
        <IconWrapper>
          <MapPin />
        </IconWrapper>
      ),
    },
    {
      id: 11,
      text: "Hotel Address",
      link: "/register/hotel-address",
      icon: (
        <IconWrapper>
          <MapPin />
        </IconWrapper>
      ),
    },
    {
      id: 12,
      text: "Popular Facilities",
      link: "/register/popular-facilities",
      icon: (
        <IconWrapper>
          <ShowerHead />
        </IconWrapper>
      ),
    },
    {
      id: 14,
      text: "Parking Details",
      link: "/register/parking-details",
      icon: (
        <IconWrapper>
          <Car />
        </IconWrapper>
      ),
    },
    {
      id: 16,
      text: "House Rules",
      link: "/register/house-rules",
      icon: (
        <IconWrapper>
          <Scale />
        </IconWrapper>
      ),
    },
    {
      id: 18,
      text: "Room Details",
      link: "/register/room-details",
      icon: (
        <IconWrapper>
          <Bed />
        </IconWrapper>
      ),
    },
    {
      id: 22,
      text: "Room Price",
      link: "/register/room-price",
      icon: (
        <IconWrapper>
          <CircleDollarSign />
        </IconWrapper>
      ),
    },
  ];

  useEffect(() => {
    const filteredLink = links.filter((item) => pathname.includes(item.link));
    filteredLink.length && setCurrentLink(filteredLink[0].id);
  }, [pathname]);

  return (
    <div
      className={`relative h-full min-h-screen min-w-[250px] backdrop-blur py-5 rounded-md`}
    >
      <div className="md:hidden">
        <IconWrapper>
          <CrossIcon
            className="absolute top-0 right-0 m-2 rotate-[45deg] md:hidden"
            onClick={() => setOpenSideNav(false)}
          />
        </IconWrapper>
      </div>
      <div className="flex flex-col pt-10 md:pt-0">
        {links.map((item) => {
          const { id, text, link, icon } = item;
          return (
            <Link
              key={id}
              href={link}
              className={`cursor-default lg:cursor-pointer w-full flex items-center justify-start gap-[0.5rem] container-d py-2 transition ease-in-out duration-300 rounded-md ${
                pathname.includes(link)
                  ? "bg-primary text-white dark:text-gray-800 opacity-1 hover:opacity-[80%]"
                  : "hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-[#ffffff30] dark:hover:text-white"
              }`}
            >
              {currentLink > id ? (
                <IconWrapper>
                  <CheckCircle2Icon className="text-green-400" />
                </IconWrapper>
              ) : (
                icon
              )}
              {text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
