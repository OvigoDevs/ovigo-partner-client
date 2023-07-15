import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

const HotelAddress = () => {
  const [address, setAddress] = useState({
    country: "Bangladesh",
    streetAddress: "",
    zipCode: "",
    city: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      console.log("Address:", address);
    } else {
      console.log("Error: Please fill in all fields.");
    }
  };

  const isFormValid = () => {
    return Object.values(address).every((value) => value !== "");
  };
  return (
    <div className="py-5">
      <p>Where is the property that you are listing?</p>

      <div className="grid md:grid-cols-2">
        <div>
          <div className="border p-5 rounded-md mt-5 space-y-3">
            <div className="grid grid-cols-1 gap-2">
              <label>Country/Region</label>
              <input name="country" readOnly defaultValue={address.country} />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>Street Name and House Number</label>
              <input
                name="streetAddress"
                type="text"
                value={address.streetAddress}
                onChange={handleInputChange}
                placeholder="Enter Hotel Address"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>ZIP Code</label>
              <input
                name="zipCode"
                type="number"
                value={address.zipCode}
                onChange={handleInputChange}
                placeholder="ZIP Code of the location"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>City</label>
              <input
                name="city"
                type="text"
                value={address.city}
                onChange={handleInputChange}
                placeholder="Enter Hotel City"
              />
            </div>
          </div>
          <hr className="my-5" />
          <Button className="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 py-5 pl-5">
          <div className="flex gap-3 p-2 border rounded-md">
            <IconWrapper>
              <ThumbsUp className="mt-[4px]" />
            </IconWrapper>
            <div className="space-y-3">
              <h3 className="font-semibold">
                What needs to be included in my address?
              </h3>
              <ul className="list-disc space-y-1">
                <li>
                  include both your street name and number for the entire
                  property
                </li>
                <li>the floor number in address line 2 if relevant</li>
                <li>individual apartment or floor can be shared later</li>
                <li>provide the zip code</li>
                <li>spell the street name correctly</li>
                <li>
                  use the physical address of the property, not your office or
                  home address
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3 p-2 border rounded-md">
            <IconWrapper>
              <Lightbulb className="mt-[4px]" />
            </IconWrapper>
            <div className="space-y-3">
              <h3 className="font-semibold">
                Why do i need to add my address?
              </h3>
              <p>
                Once a guest book your property, this is the address will be
                shared with them. It&apos;s important that it&apos;s correct so
                guest can easily find your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAddress;
