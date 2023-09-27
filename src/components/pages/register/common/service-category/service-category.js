import Backlink from "@/components/core/backlink/backlink";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

const ServiceCategory = () => {
  const serviceCategories = [
    {
      id: 0,
      icon: "hotel.svg",
      title: "Hotel",
      category: "stay",
      link: "/register/hotel/hotel-categories",
    },
    // {
    //   id: 1,
    //   icon: "bus.png",
    //   title: "Bus",
    //   link: "/register/hotel/hotel-categories",
    // },
    {
      id: 2,
      icon: "tour-package.svg",
      title: "Tour Package",
      category: "tour",
      link: "/",
    },
  ];

  // const { hotelData } = useSelector((state) => state.registerData);

  // const dispatch = useDispatch();

  const handleOnNext = (category) => {
    localStorage.setItem("serviceType", category);
    // setCookie("hotelData", { ...hotelData, serviceType: category }, "1h");
  };
  return (
    <div className="pt-5 lg:mb-20 mb-5">
      <Backlink link="/register/create-password" text="Create Password" />
      <h2 className="text-sm font-semibold pb-2">Service Category</h2>
      <p>List your service on Ovigo and start welcoming your customer</p>
      <div className="grid md:grid-cols-3 gap-4 mt-10 w-full">
        {serviceCategories.map((service) => {
          const { id, icon, title, link, category } = service;

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
              <h3 className="text-sm pb-5">{title}</h3>
              <Link href={link}>
                <Button onClick={() => handleOnNext(category)}>
                  List Service
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategory;
