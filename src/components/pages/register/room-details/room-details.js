"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BedDouble } from "lucide-react";

const BedTypes = [
  {
    id: 0,
    title: "Twin Bed(s)",
    sizes: "35-51 inches wide",
  },
  {
    id: 1,
    title: "Twin Bed(s)",
    sizes: "35-51 inches wide",
  },
  {
    id: 2,
    title: "Twin Bed(s)",
    sizes: "35-51 inches wide",
  },
  {
    id: 3,
    title: "Twin Bed(s)",
    sizes: "35-51 inches wide",
  },
  {
    id: 4,
    title: "Twin Bed(s)",
    sizes: "35-51 inches wide",
  },
  {
    id: 5,
    title: "Twin Bed(s)",
    sizes: "35-51 inches wide",
  },
];
const roomTypes = [
  {
    id: 1,
    value: "Single",
  },
  {
    id: 2,
    value: "Double",
  },
  {
    id: 3,
    value: "Twin",
  },
  {
    id: 4,
    value: "Triple",
  },
  {
    id: 5,
    value: "Quad",
  },
  {
    id: 6,
    value: "Suite",
  },
  {
    id: 7,
    value: "Family",
  },
  {
    id: 8,
    value: "Studio",
  },
  {
    id: 9,
    value: "Apartment",
  },
  {
    id: 10,
    value: "Houseboat",
  },
];
const RoomDetails = () => {
  return (
    <div className="py-5">
      <h4 className="font-bold">Room Details</h4>

      {/* Bed Details Container */}
      <div className="py-5 grid grid-cols-2 gap-4">
        <div className="border p-5 rounded-md space-y-3">
          <h4 className="font-bold">What type of unit this is?</h4>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Room Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="grid grid-cols-4 gap-2">
                {roomTypes.map((bed) => (
                  <SelectItem key={bed.id} value={bed.value}>
                    {bed.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <h4 className="font-bold">
            How many rooms of this type do you have?
          </h4>
          <input
            min={0}
            type="number"
            className="w-full"
            placeholder="Enter the quantity of this type of room"
          />
        </div>
      </div>

      {/* Type of Bed Available  */}
      <div className="grid grid-cols-2 gap-4 ">
        {/* Bed Info Container */}
        <div className="border rounded-md p-5 space-y-3">
          <h4 className="font-bold">
            What type of beds are available in this room?
          </h4>

          {/* Twin Bed */}
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <BedDouble width={30} height={30} />
              <div className="text-start">
                <h4>Twin Bed(s)</h4>
                <p>35-51 inches wide</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="grid grid-cols-3 w-2/4 border p-2 text-center">
                <button className="w-full">-</button>
                <p className="font-medium">456</p>
                <button className="w-full">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Button className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RoomDetails;
