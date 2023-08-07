import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactInformation = () => {
  const router = useRouter();

  const [contactInformation, setContactInformation] = useState({
    phoneNumber: "",
    emailAddress: "",
  });

  const [errors, setErrors] = useState(
    contactInformation ? contactInformation : {}
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInformation({ ...contactInformation, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = validator(contactInformation);

    if (Object.keys(newErrors).length === 0) {
      router.push("/register/tour-package/business-license");
    } else {
      setErrors(newErrors);
    }
  };
  const validator = (data) => {
    let obj = {};
    if (!data.phoneNumber.trim()) {
      obj.phoneNumber = "Phone Number is required!";
    }
    if (!data.emailAddress.trim()) {
      obj.emailAddress = "Email Address is required!";
    }

    return obj;
  };

  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/business-address"
        text="Business Address"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">Contact Information</p>
            <div className="grid grid-cols-1 gap-2">
              <label>Phone Number</label>
              <input
                name="phoneNumber"
                type="text"
                placeholder="e.g. +8801222-22 22 22"
                onChange={handleInputChange}
              />
              <InputError error={errors.phoneNumber} />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>Email Address</label>
              <input
                name="emailAddress"
                type="email"
                placeholder="e.g. contact@ovigotourism.com"
                onChange={handleInputChange}
              />
              <InputError error={errors.emailAddress} />
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
                Should I put my personal number and email to this field?
              </h3>
              <ul className="list-disc space-y-1">
                <li>
                  No, you have to provide your company number and email address
                </li>
                <li>
                  If you do not have an email with your company domain, then you
                  can provide the email which your company use as the primary
                  email for business handling.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
