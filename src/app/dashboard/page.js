"use client";

import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";
import { Edit } from "lucide-react";
import Image from "next/image";

const Dashboard = () => {
  const properties = [
    {
      id: 12,
      propertyName: "Green Garden",
      propertyImage: "https://i.ibb.co/jJ2yW80/venice.jpg",
      address: "Marine Drive Road, Cox's Bazar",
      serviceId: 11223344,
    },
    {
      id: 14,
      propertyName: "Not Hotel",
      propertyImage: "https://i.ibb.co/jJ2yW80/venice.jpg",
      address: "Marine Drive Road, Cox's Bazar",
      serviceId: 11223345,
    },
    {
      id: 15,
      propertyName: "Premium Resort",
      propertyImage: "https://i.ibb.co/jJ2yW80/venice.jpg",
      address: "Marine Drive Road, Cox's Bazar",
      serviceId: 11223346,
    },
  ];
  return (
    <div className="container-d section-d my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Group Homepage</h2>
        <Button>Add New Service</Button>
      </div>
      <div className="space-y-3 pt-5">
        {properties.map((property) => (
          <div
            key={property.id}
            className="flex justify-between items-center border border-black p-3 rounded-md"
          >
            <div className="flex gap-4">
              <Image
                width={80}
                height={80}
                src={property.propertyImage}
                alt="Service Image"
                className="rounded-md"
              />
              <div>
                <h3 className="font-semibold">{property.propertyName}</h3>
                <p>{property.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Edit/>
              <Delete/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
