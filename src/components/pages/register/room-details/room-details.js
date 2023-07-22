"use client";
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
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomDetails } from "@/redux/features/register_slice";
import { setCookie } from "@/lib/cookie";
import InputError from "@/components/core/input-error/input-error";

const RoomDetails = () => {
  const { roomData } = useSelector((state) => state.registerData);
  const dispatch = useDispatch();
  const router = useRouter();

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

  const [roomType, setRoomType] = useState(roomData ? roomData.roomType : "");

  const [roomQuantityOfSelectedType, setRoomQuantityOfSelectedType] = useState(
    roomData ? roomData?.roomQuantityOfSelectedType : 0
  );
  const [twinBed, setTwinBed] = useState(
    roomData?.twinBed ? roomData.twinBed : 0
  );
  const [fullBed, setFullBed] = useState(
    roomData?.fullBed ? roomData.fullBed : 0
  );
  const [queenBed, setQueenBed] = useState(
    roomData?.queenBed ? roomData.queenBed : 0
  );
  const [kingBed, setKingBed] = useState(
    roomData?.kingBed ? roomData.kingBed : 0
  );
  const [bunkBed, setBunkBed] = useState(
    roomData?.bunkBed ? roomData.bunkBed : 0
  );
  const [sofaBed, setSofaBed] = useState(
    roomData?.sofaBed ? roomData.sofaBed : 0
  );
  const [roomSize, setRoomSize] = useState({
    size: roomData?.roomSize?.size ? roomData.roomSize?.size : 0,
    measurementUnit: "",
  });

  const [guests, setGuests] = useState(roomData?.guests ? roomData?.guests : 0);

  const [smokingAllowed, setSmokingAllowed] = useState(
    roomData?.SmokingAllowance ? roomData?.SmokingAllowance : ""
  );

  const [error, setError] = useState("");

  const handleSelectOnChange = (e) => {
    setRoomType(e);
  };

  const handleSubmit = () => {
    const roomData = {
      roomType: roomType,
      roomQuantityOfSelectedType: roomQuantityOfSelectedType,
      twinBed: twinBed,
      fullBed: fullBed,
      queenBed: queenBed,
      kingBed: kingBed,
      bunkBed: bunkBed,
      sofaBed: sofaBed,
      guests: guests,
      SmokingAllowance: smokingAllowed,
      roomSize: roomSize,
    };
    if (roomType === "") {
      setError("Please Select one unit type");
      return;
    } else if (roomQuantityOfSelectedType <= 0) {
      setError("Please Select valid Quantity");
      return;
    } else if (
      twinBed === 0 &&
      fullBed === 0 &&
      queenBed === 0 &&
      kingBed === 0 &&
      bunkBed === 0 &&
      sofaBed === 0
    ) {
      setError("Please Set availability");
      return;
    } else if (guests <= 0) {
      setError("Please Set minimum guest number");
      return;
    } else if (smokingAllowed === "") {
      setError("Please set Smoking Policy");
    } else {
      setError("");
      dispatch(roomDetails({ roomDetails: roomData }));
      setCookie("roomData", roomData);

      router.push("/register/bath-details");
    }
  };

  useEffect(() => {}, [roomData]);

  return (
    <div className="py-5">
      <h4 className="font-bold">Room Details</h4>

      {/* Bed Details Container */}
      <div className="py-5 grid grid-cols-2 gap-4">
        <div className="border p-5 rounded-md space-y-3">
          <h4 className="font-bold">What type of unit this is?</h4>
          <Select defaultValue={roomType} onValueChange={handleSelectOnChange}>
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
          <InputError error={error}></InputError>
          <h4 className="font-bold">
            How many rooms of this type do you have?
          </h4>
          <input
            min={0}
            defaultValue={roomQuantityOfSelectedType}
            onChange={(e) => setRoomQuantityOfSelectedType(e.target.value)}
            type="number"
            className="w-full"
            placeholder="Enter the quantity of this type of room"
          />
          <InputError error={error}></InputError>
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
          <InputError error={error}></InputError>
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
              <input
                defaultValue={roomData?.roomSize?.size}
                onChange={(e) =>
                  setRoomSize({
                    ...roomSize,
                    size: e.target.value,
                  })
                }
                type="number"
                placeholder="Measurement"
              />
              <Select
                defaultValue={roomData?.roomSize?.measurementUnit}
                onValueChange={(e) => {
                  console.log(e);
                  setRoomSize({
                    ...roomSize,
                    measurementUnit: e,
                  });
                }}
              >
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
            defaultValue={roomData?.SmokingAllowance}
            options={["Yes", "No"]}
            name="smoking-allowed"
            label="Is smoking allowed in this room?"
            handleOnChange={(e) => setSmokingAllowed(e.target.value)}
          />
          <InputError error={error}></InputError>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Button onClick={handleSubmit} className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RoomDetails;
