"use client";

import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { UserPlus } from "lucide-react";
import { Text } from "lucide-react";
import { CheckCircle2Icon } from "lucide-react";
import { List } from "lucide-react";
import { Hotel } from "lucide-react";
import { ListTodo } from "lucide-react";
import { Check } from "lucide-react";
import { Building2 } from "lucide-react";
import { Languages } from "lucide-react";
import { X } from "lucide-react";
import { Scroll } from "lucide-react";
import { ScrollText } from "lucide-react";
import { LucideListChecks } from "lucide-react";
import { ListTree } from "lucide-react";
import { Info } from "lucide-react";
import { LucideBadgeDollarSign } from "lucide-react";
import { DollarSign } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { FolderEdit } from "lucide-react";
import { Salad } from "lucide-react";
import { Car } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { Scale } from "lucide-react";
import { Newspaper } from "lucide-react";
import { Key } from "lucide-react";
import { ShowerHead } from "lucide-react";
import { MapPin } from "lucide-react";
import { Briefcase } from "lucide-react";
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
      text: "Hotel number",
      link: "/register/no-of-hotel",
      icon: (
        <IconWrapper>
          <Building2 />
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
      text: "Hotel Information",
      link: "/register/hotel-information",
      icon: (
        <IconWrapper>
          <Newspaper />
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
      id: 13,
      text: "Breakfast details",
      link: "/register/breakfast-details",
      icon: (
        <IconWrapper>
          <Salad />
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
      id: 15,
      text: "Languages",
      link: "/register/languages",
      icon: (
        <IconWrapper>
          <Languages />
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
      id: 17,
      text: "Hotel Details Completion",
      link: "/register/hotel-details-completion",
      icon: (
        <IconWrapper>
          <LucideListChecks />
        </IconWrapper>
      ),
    },
    {
      id: 18,
      text: "Room details",
      link: "/register/room-details",
      icon: (
        <IconWrapper>
          <Scroll />
        </IconWrapper>
      ),
    },
    {
      id: 19,
      text: "Bathroom details",
      link: "/register/bath-details",
      icon: (
        <IconWrapper>
          <ScrollText />
        </IconWrapper>
      ),
    },
    {
      id: 20,
      text: "Room features",
      link: "/register/room-features",
      icon: (
        <IconWrapper>
          <ListTree />
        </IconWrapper>
      ),
    },
    {
      id: 21,
      text: "Room name",
      link: "/register/room-name",
      icon: (
        <IconWrapper>
          <FolderEdit />
        </IconWrapper>
      ),
    },
    {
      id: 22,
      text: "Room price",
      link: "/register/room-price",
      icon: (
        <IconWrapper>
          <CircleDollarSign />
        </IconWrapper>
      ),
    },
    {
      id: 23,
      text: "Rate plan",
      link: "/register/rate-plan",
      icon: (
        <IconWrapper>
          <DollarSign />
        </IconWrapper>
      ),
    },
    {
      id: 24,
      text: "Add photos",
      link: "/register/add-photos",
      icon: (
        <IconWrapper>
          <ImageIcon />
        </IconWrapper>
      ),
    },
    {
      id: 25,
      text: "Guest payment",
      link: "/register/guest-payment",
      icon: (
        <IconWrapper>
          <LucideBadgeDollarSign />
        </IconWrapper>
      ),
    },
    {
      id: 26,
      text: "Important info",
      link: "/register/important-info",
      icon: (
        <IconWrapper>
          <Info />
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
      className={`relative h-full max-h-[90vh] overflow-scroll min-w-[240px] backdrop-blur rounded-md`}
    >
      <div className="md:hidden">
        <IconWrapper>
          <X
            className="absolute top-0 right-0 m-2 md:hidden text-gray-800 dark:text-gray-400"
            onClick={() => setOpenSideNav(false)}
          />
        </IconWrapper>
      </div>
      <div className="flex flex-col py-10 md:pt-0 md:pb-20">
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
