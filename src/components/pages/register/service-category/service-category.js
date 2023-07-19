import { Button } from "@/components/ui/button";
import Image from "next/image";

import hotelIcon from "@/images/service-category-icons/hotel.svg";
import busIcon from "@/images/service-category-icons/bus.png";
import packageIcon from "@/images/service-category-icons/tour-package.svg";
import Link from "next/link";

const ServiceCategory = () => {
  const serviceCategories = [
    {
      id: 0,
      icon: hotelIcon,
      title: "Hotel",
      link: "/register/hotel-categories",
    },
    {
      id: 1,
      icon: busIcon,
      title: "Bus",
      link: "/register/hotel-categories",
    },
    {
      id: 2,
      icon: packageIcon,
      title: "Tour Package",
      link: "/register/hotel-categories",
    },
  ];
  return (
    <div className="pt-5">
      <h2 className="text-sm font-semibold pb-2">Service Category</h2>
      <p>List your service on Ovigo and start welcoming your customer</p>
      <div className="grid md:grid-cols-3 gap-4 mt-10 w-full">
        {serviceCategories.map((service) => {
          const { id, icon, title, link } = service;

          return (
            <div
              key={id}
              className="text-center border p-5 rounded-md space-y-3 hover:border-gray-400"
            >
              <Image
                width={50}
                height={50}
                src={icon}
                alt="Service Icon"
                className="mx-auto w-14 h-14 bg-white rounded-full"
              />
              <h3 className="text-sm">{title}</h3>
              <Link href={link}>
                <Button>List Service</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategory;
