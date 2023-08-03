import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const userName = "john@doe.com";
  const accountType = "Primary";

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

  const pathname = usePathname();
  return (
    <div className="container-d py-2 backdrop-blur sticky top-0 z-50 border-b">
      <div className="space-y-3">
        {/* Top Navbar */}
        <div className="flex justify-between ">
          <div className="flex gap-3 items-center">
            <Link href="/">
              <div className="cursor-default lg:cursor-pointer flex items-center justify-start gap-2">
                <Image
                  src="/images/OvigoLogo.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
                <span className="text-primary hidden md:flex text-2xl font-black border-r-[1px] pr-3 border-black">
                  Ovigo
                </span>
              </div>
            </Link>
            <h2 className="text-lg font-bold">{userName}</h2>
            <Badge>{accountType}</Badge>
          </div>
          <div className="space-x-3">
            {/* Properties Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Image
                    width={40}
                    height={40}
                    src="/images/dashboard/properties.svg"
                    alt="Properties Image"
                    className="w-full h-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56  space-y-2">
                {properties.map((property) => (
                  <DropdownMenuItem
                    key={property.id}
                    className="flex gap-3 border"
                  >
                    <Image
                      width={40}
                      height={40}
                      src={property.propertyImage}
                      alt="property image"
                      className="rounded-md"
                    />
                    <div>
                      <h5 className="font-semibold">{property.propertyName}</h5>
                      <p>{property.serviceId}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Parent Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <User2 />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Add New Service</DropdownMenuItem>
                  <DropdownMenuItem>Update Service</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* Middle Navbar */}
        <div className="flex gap-4">
          <Link href="/dashboard" className="px-3 py-2 border border-black rounded-md hover:bg-gray-200">
            <div className="cursor-default lg:cursor-pointer flex items-center justify-start gap-2">
              <h3>Group Homepage</h3>
            </div>
          </Link>
          <Link href="/dashboard/reservations" className="px-3 py-2 border border-black rounded-md hover:bg-gray-200">
            <div className="cursor-default lg:cursor-pointer flex items-center justify-start gap-2">
              <h3>Reservations</h3>
            </div>
          </Link>
          <Link href="/dashboard/group-opportunity" className="px-3 py-2 border border-black rounded-md hover:bg-gray-200">
            <div className="cursor-default lg:cursor-pointer flex items-center justify-start gap-2">
              <h3>Group Opportunity</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
