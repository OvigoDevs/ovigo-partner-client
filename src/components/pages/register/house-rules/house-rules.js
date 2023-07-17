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

const HouseRules = () => {
  const times = [
    {
      id: 1,
      value: "12:00 am",
      label: "12:00 AM",
    },
    {
      id: 2,
      value: "01:00 am",
      label: "01:00 AM",
    },
    {
      id: 3,
      value: "02:00 am",
      label: "02:00 AM",
    },
    {
      id: 4,
      value: "03:00 am",
      label: "03:00 AM",
    },
    {
      id: 5,
      value: "04:00 am",
      label: "04:00 AM",
    },
    {
      id: 6,
      value: "05:00 am",
      label: "05:00 AM",
    },
    {
      id: 7,
      value: "06:00 am",
      label: "06:00 AM",
    },
    {
      id: 8,
      value: "07:00 am",
      label: "07:00 AM",
    },
    {
      id: 9,
      value: "08:00 am",
      label: "08:00 AM",
    },
    {
      id: 10,
      value: "09:00 am",
      label: "09:00 AM",
    },
    {
      id: 11,
      value: "10:00 am",
      label: "10:00 AM",
    },
    {
      id: 12,
      value: "11:00 am",
      label: "11:00 AM",
    },
    {
      id: 13,
      value: "12:00 pm",
      label: "12:00 PM",
    },
    {
      id: 14,
      value: "01:00 pm",
      label: "01:00 PM",
    },
    {
      id: 15,
      value: "02:00 pm",
      label: "02:00 PM",
    },
    {
      id: 16,
      value: "03:00 pm",
      label: "03:00 PM",
    },
    {
      id: 17,
      value: "04:00 pm",
      label: "04:00 PM",
    },
    {
      id: 18,
      value: "05:00 pm",
      label: "05:00 PM",
    },
    {
      id: 19,
      value: "06:00 pm",
      label: "06:00 PM",
    },
    {
      id: 20,
      value: "07:00 pm",
      label: "07:00 PM",
    },
    {
      id: 21,
      value: "08:00 pm",
      label: "08:00 PM",
    },
    {
      id: 22,
      value: "09:00 pm",
      label: "09:00 PM",
    },
    {
      id: 23,
      value: "10:00 pm",
      label: "10:00 PM",
    },
    {
      id: 24,
      value: "11:00 pm",
      label: "11:00 PM",
    },
  ];

  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <div className="py-5">
      <h4 className="font-bold">House Rules</h4>
      <div className="grid md:grid-cols-2 gap-4 my-5">
        <div className="p-5 rounded-md border grid grid-cols-1 gap-5">
          <h4 className="font-bold">
            What are your check-in and check-out times?
          </h4>
          <div className="space-y-1 py-3">
            <p className="">Check-in</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="">From</p>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="grid grid-cols-3 gap-2">
                      {times.map((time) => (
                        <SelectItem key={time.id} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="">Until</p>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="grid grid-cols-3 gap-2">
                      {times.map((time) => (
                        <SelectItem key={time.id} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-1 py-3">
            <p className="">Check-out</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="">From</p>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="grid grid-cols-3 gap-2">
                      {times.map((time) => (
                        <SelectItem key={time.id} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <p className="">Until</p>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="grid grid-cols-3 gap-2">
                      {times.map((time) => (
                        <SelectItem key={time.id} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <hr className="py-2" />

          <CustomRadio
            label="Do you allow children?"
            name="parking-type"
            handleOnChange={handleOnChange}
            options={["Yes", "No"]}
          />

          <CustomRadio
            label="Do you allow pets?"
            name="parking-type"
            handleOnChange={handleOnChange}
            options={["Yes", "Upon request", "No"]}
          />
          <CustomRadio
            label="Do you allow pets for free?"
            name="parking-type"
            handleOnChange={handleOnChange}
            options={["Yes, pets can stay for free", "No"]}
          />
          <input
            type="number"
            placeholder="Price in BDT per night (If applicable)"
            className="mx-2"
          />

          <hr className="py-2" />

          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;
