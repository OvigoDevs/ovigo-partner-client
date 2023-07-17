import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import CustomRadio from "@/components/core/custom-radio/custom-radio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lightbulb } from "lucide-react";
import { BedDouble } from "lucide-react";
import { useState } from "react";

const RoomDetails = () => {
  const doubleBedTypes = [
    {
      id: 1,
      value: "Double Room",
    },
    {
      id: 2,
      value: "Double Room With Balcony",
    },
    {
      id: 3,
      value: "Double Room With Garden View",
    },
    {
      id: 4,
      value: "Double Room With Private Bathroom",
    },
    {
      id: 5,
      value: "Budget Double Room",
    },
    {
      id: 6,
      value: "Business Double Room With Gym Access",
    },
    {
      id: 7,
      value: "Deluxe Double Room",
    },
    {
      id: 8,
      value: "Deluxe Double Room With Balcony",
    },
    {
      id: 9,
      value: "Deluxe Double Room With Balcony And Sea View",
    },
    {
      id: 10,
      value: "Deluxe Double Room With Bath",
    },
    {
      id: 11,
      value: "Deluxe Double Room With Castle View",
    },
    {
      id: 12,
      value: "Deluxe Double Room With Extra Bed",
    },
    {
      id: 13,
      value: "Deluxe Double Bed With Sea View",
    },
    {
      id: 14,
      value: "Deluxe Double Bed With Shower",
    },
    {
      id: 14,
      value: "Deluxe Double Bed With Side Sea View",
    },
    {
      id: 15,
      value: "Deluxe Double Or Twin Room",
    },
    {
      id: 16,
      value: "Deluxe King Room",
    },
    {
      id: 17,
      value: "Deluxe Queen Room",
    },
    {
      id: 18,
      value: "Deluxe Room",
    },
    {
      id: 19,
      value: "Deluxe Room",
    },
    {
      id: 20,
      value: "Double Room  - Disablity Access",
    },
    {
      id: 21,
      value: "Double Room With Balcony",
    },
    {
      id: 22,
      value: "Double Room With Balcony And Sea View",
    },
    {
      id: 23,
      value: "Double Room With Extra Bed",
    },
    {
      id: 24,
      value: "Double Room With Lake View",
    },
    {
      id: 25,
      value: "Double Room With Mountain View",
    },
    {
      id: 26,
      value: "Double Room With Patio",
    },
    {
      id: 27,
      value: "Double Room With Sea View",
    },
    {
      id: 28,
      value: "Double Room With Shared Bathroom",
    },
    {
      id: 29,
      value: "Double Room With Spa Bath",
    },
    {
      id: 30,
      value: "Double Room With Terrace",
    },
    {
      id: 31,
      value: "Economy Double Room",
    },
    {
      id: 32,
      value: "King Room",
    },
    {
      id: 33,
      value: "King Room With Balcony",
    },
    {
      id: 34,
      value: "King Room With Garden View",
    },
    {
      id: 35,
      value: "King Room With Lake View",
    },
    {
      id: 36,
      value: "King Room With Pool View",
    },
    {
      id: 37,
      value: "Standard Double Room",
    },
    {
      id: 38,
      value: "Standard Double Room With Balcony",
    },
    {
      id: 39,
      value: "Superior Double Room",
    },
  ];

  const [twinBed, setTwinBed] = useState(0);
  const [fullBed, setFullBed] = useState(0);
  const [queenBed, setQueenBed] = useState(0);
  const [kingBed, setKingBed] = useState(0);
  const [bunkBed, setBunkBed] = useState(0);
  const [sofaBed, setSofaBed] = useState(0);

  const [guests, setGuests] = useState(0);
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <div className="py-5">
      <h4 className="font-bold">Room Details</h4>

      {/* Bed Details Container */}
      <div className="py-5 grid grid-cols-2 gap-4">
        <div className="border p-5 rounded-md space-y-3">
          <h4 className="font-bold">What type of unit this is?</h4>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Bed Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="grid grid-cols-4 gap-2">
                {doubleBedTypes.map((bed) => (
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
                <h4 className={twinBed >= 1 ? "font-bold" : ""}>Twin Bed(s)</h4>
                <p>35-51 inches wide</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="grid grid-cols-3 w-2/4 border p-2 text-center">
                <button
                  className="w-full"
                  onClick={() => {
                    if (twinBed >= 1) {
                      const newTwinBed = twinBed - 1;
                      setTwinBed(newTwinBed);
                    } else {
                      setTwinBed(0);
                    }
                  }}
                >
                  -
                </button>
                <p className="font-bold">{twinBed}</p>
                <button
                  className="w-full"
                  onClick={() => {
                    const newTwinBed = twinBed + 1;
                    setTwinBed(newTwinBed);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Full Bed */}
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <BedDouble width={30} height={30} />
              <div className="text-start">
                <h4 className={fullBed >= 1 ? "font-bold" : ""}>Full Bed(s)</h4>
                <p>52-59 inches wide</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="grid grid-cols-3 w-2/4 border p-2 text-center">
                <button
                  className="w-full"
                  onClick={() => {
                    if (fullBed >= 1) {
                      const newFullBed = fullBed - 1;
                      setFullBed(newFullBed);
                    } else {
                      setFullBed(0);
                    }
                  }}
                >
                  -
                </button>
                <p className="font-bold">{fullBed}</p>
                <button
                  className="w-full"
                  onClick={() => {
                    const newFullBed = fullBed + 1;
                    setFullBed(newFullBed);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Queen Bed */}
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <BedDouble width={30} height={30} />
              <div className="text-start">
                <h4 className={queenBed >= 1 ? "font-bold" : ""}>
                  Queen Bed(s)
                </h4>
                <p>60-70 inches wide</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="grid grid-cols-3 w-2/4 border p-2 text-center">
                <button
                  className="w-full"
                  onClick={() => {
                    if (queenBed >= 1) {
                      const newQueenBed = queenBed - 1;
                      setQueenBed(newQueenBed);
                    } else {
                      setQueenBed(0);
                    }
                  }}
                >
                  -
                </button>
                <p className="font-bold">{queenBed}</p>
                <button
                  className="w-full"
                  onClick={() => {
                    const newQueenBed = queenBed + 1;
                    setQueenBed(newQueenBed);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* King Bed */}
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <BedDouble width={30} height={30} />
              <div className="text-start">
                <h4 className={kingBed >= 1 ? "font-bold" : ""}>King Bed(s)</h4>
                <p>71-81 inches wide</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="grid grid-cols-3 w-2/4 border p-2 text-center">
                <button
                  className="w-full"
                  onClick={() => {
                    if (kingBed >= 1) {
                      const newkingBed = kingBed - 1;
                      setKingBed(newkingBed);
                    } else {
                      setKingBed(0);
                    }
                  }}
                >
                  -
                </button>
                <p className="font-bold">{kingBed}</p>
                <button
                  className="w-full"
                  onClick={() => {
                    const newkingBed = kingBed + 1;
                    setKingBed(newkingBed);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Bunk Bed */}
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <BedDouble width={30} height={30} />
              <div className="text-start">
                <h4 className={bunkBed >= 1 ? "font-bold" : ""}>Bunk Bed(s)</h4>
                <p>Varying sizes</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="grid grid-cols-3 w-2/4 border p-2 text-center">
                <button
                  className="w-full"
                  onClick={() => {
                    if (bunkBed >= 1) {
                      const newbunkBed = bunkBed - 1;
                      setBunkBed(newbunkBed);
                    } else {
                      setBunkBed(0);
                    }
                  }}
                >
                  -
                </button>
                <p className="font-bold">{bunkBed}</p>
                <button
                  className="w-full"
                  onClick={() => {
                    const newbunkBed = bunkBed + 1;
                    setBunkBed(newbunkBed);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Sofa Bed */}
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <BedDouble width={30} height={30} />
              <div className="text-start">
                <h4 className={sofaBed >= 1 ? "font-bold" : ""}>Sofa Bed(s)</h4>
                <p>71-81 inches wide</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="grid grid-cols-3 w-2/4 border p-2 text-center">
                <button
                  className="w-full"
                  onClick={() => {
                    if (sofaBed >= 1) {
                      const newsofaBed = sofaBed - 1;
                      setSofaBed(newsofaBed);
                    } else {
                      setSofaBed(0);
                    }
                  }}
                >
                  -
                </button>
                <p className="font-bold">{sofaBed}</p>
                <button
                  className="w-full"
                  onClick={() => {
                    const newsofaBed = sofaBed + 1;
                    setSofaBed(newsofaBed);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Box */}
        <div>
          <div className="flex gap-3 border rounded-md p-3">
            <Lightbulb className="w-10 h-10" />
            <div className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-bold">
                  Do you ofer other sleeping arrangements?
                </h4>
                <p>
                  For now, you just need to add your basic arrangements. Cribs
                  additional beds, and other sleeping arrangements can be added
                  later from the dashboard.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">
                  Do you have specific policies for children?
                </h4>
                <p>
                  You can set up your property&apos;s child policies (e.g.
                  maximum age, price adjustments) on the dashboard after you
                  finish your registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How many guests can stay in this room? */}
      <div className="py-5 grid grid-cols-2 gap-4">
        <div className="border rounded-md p-5 space-y-2">
          <h4 className="font-bold">How many guests can stay in this room?</h4>
          <div className="flex w-2/4">
            <div className="grid grid-cols-3 w-2/4 border p-2 text-center">
              <button
                className="w-full"
                onClick={() => {
                  if (guests >= 1) {
                    const newguests = guests - 1;
                    setGuests(newguests);
                  } else {
                    setGuests(0);
                  }
                }}
              >
                -
              </button>
              <p className="font-bold">{guests}</p>
              <button
                className="w-full"
                onClick={() => {
                  const newguests = guests + 1;
                  setGuests(newguests);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How Big is this room? */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3 border rounded-md p-5">
          <h4 className="font-bold">How big is this room?</h4>

          <div className="space-y-1">
            <p>Room size - optional</p>
            <div className="flex">
              <Input type="number" placeholder="Measurement" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="grid grid-cols-3 gap-2">
                    <SelectItem value="square meters">Square Meters</SelectItem>
                    <SelectItem value="square foot">Square Foot</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <CustomRadio
            options={["Yes", "No"]}
            label="Is smoking allowed in this room?"
            handleOnChange={handleOnChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Button className="w-full">Submit</Button>
      </div>
    </div>
  );
};

export default RoomDetails;
