import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BusinessAddress = () => {
  const router = useRouter();
  const [address, setAddress] = useState({
    country: "Bangladesh",
    streetAddress: "",
    zipCode: "",
    city: "",
  });
  const [errors, setErrors] = useState(address ? address : {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = () => {
    setErrors(validator(address));

    if (Object.keys(errors).length === 0) {
      router.push("/register/tour-package/contact-information");
    }
  };
  const validator = (data) => {
    let obj = {};
    if (!data.streetAddress.trim()) {
      obj.streetAddress = "Street address is required!";
    }
    if (!data.zipCode.trim()) {
      obj.zipCode = "Street address is required!";
    }
    if (!data.city.trim()) {
      obj.city = "Street address is required!";
    }

    return obj;
  };

  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/company-structure"
        text="Company Structure"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">
              Where is the property that you are listing?
            </p>
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
              <InputError error={errors.streetAddress} />
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
              <InputError error={errors.zipCode} />
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
              <InputError error={errors.city} />
            </div>
          </div>
          <hr className="my-5" />
          <Button className="max-w-[150px]" onClick={handleSubmit}>
            Next
          </Button>
        </div>
        {/* Suggestion Box */}
        <div>
          <div className="flex gap-3 p-2 border rounded-md">
            <IconWrapper>
              <ThumbsUp className="mt-[4px]" />
            </IconWrapper>
            <div className="space-y-3">
              <h3 className="font-semibold">
                I do not have any office, which address should I put in?
              </h3>
              <ul className="list-disc space-y-1">
                <li>
                  the address you have in the legal documents or business
                  registration paper, you can use that
                </li>
                <li>
                  if you do not have valid papers or you are just an individual
                  who are organizing tours, then please give your permanent
                  address which we can verify through your NID.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAddress;
