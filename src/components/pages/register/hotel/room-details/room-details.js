"use client";
import Backlink from "@/components/core/backlink/backlink";
import CustomRadio from "@/components/core/custom-radio/custom-radio";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setCookie } from "@/lib/cookie";
import { roomDetails } from "@/redux/features/register_slice";
import { BedDouble } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./counter";

const BedTypes = [
  {
    id: 0,
    title: "Twin Bed(s)",
    sizes: "35-51 inches wide",
    name: "twinBeds",
  },
  {
    id: 1,
    title: "Full Bed(s)",
    sizes: "52-59 inches wide",
    name: "fullBeds",
  },
  {
    id: 2,
    title: "Queen Bed(s)",
    sizes: "60-70 inches wide",
    name: "queenBeds",
  },
  {
    id: 3,
    title: "King Bed(s)",
    sizes: "71-81 inches wide",
    name: "kingBeds",
  },
  {
    id: 4,
    title: "Bunk Bed(s)",
    sizes: "Varying sizes",
    name: "bunkBeds",
  },
  {
    id: 5,
    title: "Sofa Bed(s)",
    sizes: "Varying sizes",
    name: "sofaBeds",
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
  // router
  const router = useRouter();
  // redux
  const { roomData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // formdata
  const [formData, setFormData] = useState(
    roomData.roomDetails
      ? roomData.roomDetails
      : {
          unitType: "",
          sameTypeRooms: 0,
          bed_name: "",
          bed_number: 0,
          // twinBeds: 0,
          // fullBeds: 0,
          // queenBeds: 0,
          // kingBeds: 0,
          // bunkBeds: 0,
          // sofaBeds: 0,
          guestsNumber: 0,
          cribsAllowed: "",
          smookingAllow: "",
          roomSize: 0,
          roomSizeUnit: "",
        }
  );

  
  // edited
  const [edited, setEdited] = useState(false);
  // error
  const [errors, setErrors] = useState(edited ? formData : {});
  // handle input
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!edited) {
      setEdited(true);
    }
  };
  // handle submit
  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };
  // validator
  const validator = (data) => {
    // console.log(data)
    

    const badData = { twinBeds: data.twinBeds, fullBeds: data.fullBeds, queenBeds: data.queenBeds, kingBeds: data.kingBeds, bunkBeds: data.bunkBeds, sofaBeds: data.sofaBeds};
    // console.log(data, badData);
    // console.log(badData)
    let countGreaterThanOne = 0;
    let countEqualToOne = 0;

    // Iterate through the data
    for (const key in badData) {
      if (badData[key] >= 1) {
        countGreaterThanOne++;
      }
      if (badData[key] === 1) {
        countEqualToOne++;
      }
    }  
    let obj = {};
    
    
    if (!data.unitType.trim()) {
      obj.unitType = "Unit type is required!";
    }
    if (data.sameTypeRooms < 1) {
      obj.sameTypeRooms = "Input is required!";
    }
    
    if (data.guestsNumber < 1) {
      obj.guestsNumber = "Guests number is required!";
    }
    if (data.cribsAllowed < 1) {
      obj.cribsAllowed = "Selection is required!";
    }
    if (data.smookingAllow < 1) {
      obj.smookingAllow = "Selection is required!";
    }

    if (data.roomSize < 1) {
      obj.roomSize = "Room size is required!";
    }
    if (!data.roomSizeUnit) {
      obj.roomSizeUnit = "Room size bed is required!";
    }
    if (countGreaterThanOne === 0 && countEqualToOne === 0) {
      // obj.badData = "Only one type of bed number is required!";
      toast.error("Only one type of bed number is required!")
    } else if (countGreaterThanOne >= 2) {
      // obj.badData = "Only one type of bed number is required!";
      toast.error("Only one type of bed number is required!")
    } else {
      // console.log("jdjf", Object.entries(badData))
      const keysAndValuesWithValueNotZero = Object.entries(badData)
      .filter(([key, value]) => value !== 0);
      // console.log(keysAndValuesWithValueNotZero)
      const bedData =   keysAndValuesWithValueNotZero[0];
      console.log(bedData[0])
      console.log(bedData[1])
      formData.bed_name = bedData[0]
      formData.bed_number = bedData[1]
      // router.push("/register/hotel/bath-details")
      // localStorage.removeItem(roomData)
    }

    return obj;
  };
  // useEffect > dispatch > setcookie > router
  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // dispatch
      dispatch(
        roomDetails({
          roomDetails: formData,
        })
      );
      // setCookie
      setCookie("roomData", { ...roomData, roomDetails: formData }, "1h");
      // router
      router.push("/register/hotel/bath-details");
    }
  }, [errors]);
  // useEffect > setEdited
  useEffect(() => {
    setEdited(true);
  }, []);
  return (
    <div className="py-5 max-w-[500px]">
      <Backlink link="/register/hotel/hotel-details-completion" text="Back" />
      <h4 className="font-bold">Room Details</h4>

      {/* Bed Details Container */}
      <div className="py-5">
        <div className="border p-5 rounded-md space-y-3">
          <h4 className="font-bold">What type of unit this is?</h4>
          <Select
            onValueChange={(value) =>
              handleOnChange({
                target: {
                  name: "unitType",
                  value,
                },
              })
            }
            defaultValue={formData.unitType}
          >
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
          <InputError error={errors.unitType} />
          <h4 className="font-bold">
            How many rooms of this type do you have?
          </h4>
          <input
            className="form-input w-full"
            min={0}
            type="number"
            name="sameTypeRooms"
            placeholder="Enter the quantity of this type of room"
            onChange={(e) =>
              handleOnChange({
                target: {
                  name: e.target.name,
                  value: parseInt(e.target.value),
                },
              })
            }
            defaultValue={formData.sameTypeRooms}
          />
          <InputError error={errors.sameTypeRooms} />
        </div>
      </div>

      {/* Type of Bed Available  */}
      <div>
        {/* Bed Info Container */}
        <div className="border rounded-md p-5 space-y-3">
          <h4 className="font-bold">
            What type of beds are available in this room?
          </h4>

          {/* Twin Bed */}
          {BedTypes.map((item) => {
            return (
              <div className="grid grid-cols-2" key={item.id}>
                <div className="flex gap-4">
                  <BedDouble width={30} height={30} />
                  <div className="text-start">
                    <h4>{item.title}</h4>
                    <p>{item.sizes} wide</p>
                  </div>
                </div>
                <div className="max-w-[120px] min-w-[100px] ml-auto">
                  <Counter
                    handleOnChange={handleOnChange}
                    name={item.name}
                    defaultValue={formData[item.name]}
                  />
                </div>
                <InputError error={errors[item.name]} className="col-span-2" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 py-[1rem] my-[1rem] border rounded-md p-[1rem]">
        <h3>How many guests can stay in this room?</h3>
        <div className="max-w-[120px] min-w-[100px]">
          <Counter
            defaultValue={formData.guestsNumber}
            handleOnChange={handleOnChange}
            name="guestsNumber"
            className="border-4 w-full"
          />
        </div>

        <InputError error={errors.guestsNumber} />
      </div>

      <div className="grid grid-cols-1 gap-2 py-[1rem] my-[1rem] border rounded-md p-[1rem]">
        <h3>Do you allow cribs?</h3>
        <CustomRadio
          name="cribsAllowed"
          handleOnChange={handleOnChange}
          defaultValue={formData.cribsAllowed}
          options={["Yes", "No"]}
        />

        <InputError error={errors.cribsAllowed} />
      </div>

      <div className="grid grid-cols-1 gap-2 py-[1rem] my-[1rem] border rounded-md p-[1rem]">
        <h3>How big is this room?</h3>
        <div className="grid grid-cols-3 gap-3">
          <input
            type="number"
            name="roomSize"
            defaultValue={formData.roomSize}
            onChange={handleOnChange}
            className="col-span-2 form-input"
          />
          <Select
            onValueChange={(value) =>
              handleOnChange({
                target: {
                  name: "roomSizeUnit",
                  value,
                },
              })
            }
            defaultValue={formData.roomSizeUnit}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Size unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup
                className="grid grid-cols-1 gap-2"
                placeholder="select teher"
              >
                {[
                  {
                    id: 0,
                    value: "Square Inch",
                  },
                  {
                    id: 1,
                    value: "Square Feet",
                  },
                ].map((bed) => (
                  <SelectItem key={bed.id} value={bed.value}>
                    {bed.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <InputError error={errors.roomSizeUnit} />
      </div>

      <div className="grid grid-cols-1 gap-2 py-[1rem] my-[1rem] border rounded-md p-[1rem]">
        <h3>Do you allow smooking?</h3>
        <CustomRadio
          name="smookingAllow"
          handleOnChange={handleOnChange}
          defaultValue={formData.smookingAllow}
          options={["Yes", "No"]}
        />

        <InputError error={errors.smookingAllow} />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Button className="w-full" onClick={handleOnSubmit}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default RoomDetails;
