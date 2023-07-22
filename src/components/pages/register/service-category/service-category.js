import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ServiceCategory = () => {
  const serviceCategories = [
    {
      id: 0,
      icon: "hotel.svg",
      title: "Hotel",
      link: "/register/hotel-categories",
    },
    {
      id: 1,
      icon: "bus.png",
      title: "Bus",
      link: "/register/hotel-categories",
    },
    {
      id: 2,
      icon: "tour-package.svg",
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
                src={`/images/service-category-icons/${icon}`}
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
