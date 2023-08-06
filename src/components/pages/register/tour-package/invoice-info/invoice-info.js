import Backlink from "@/components/core/backlink/backlink";
import CustomRadio from "@/components/core/custom-radio/custom-radio";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const InvoiceInfo = () => {
  // router
  const router = useRouter();

  // same address state
  const [sameAddress, setSameAddress] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });

  // errors
  const [errors, setErrors] = useState(formData ? formData : {});

  // onChange for Custom Radio Buttons
  const handleOnChange = (e) => {
    console.log(e.target);
    setSameAddress(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = () => {
    setErrors(validator(formData));

    console.log(formData);

    if (Object.keys(errors).length === 0) {
      router.push("/register/tour-package/");
    }
  };
  const validator = (data) => {
    let obj = {};
    if (!data.name.trim()) {
      obj.name = "Name is required!";
    }
    if (sameAddress === "No") {
      if (!data.address.trim()) {
        obj.address = "Address is required!";
      }
    }
    if (!sameAddress.trim()) {
      obj.sameAddress = "Select an option.";
    }

    return obj;
  };

  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/business-license"
        text="Business License"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">Invoice Info</p>
            <p>
              We&apos;ll send you payouts every month by bank transfer. This
              payout includes all reservations that checked out in the previous
              month.
            </p>
            <div className="grid grid-cols-1 gap-2">
              <label>What name should be on the invoice?</label>
              <input
                name="name"
                type="text"
                placeholder="e.g. John Doe"
                onChange={handleInputChange}
              />
              <InputError error={errors?.name} />
            </div>
            <CustomRadio
              label="Does this recipient have the same address as your property?"
              options={["Yes", "No"]}
              handleOnChange={handleOnChange}
              name="sameAddress"
            />
            <InputError error={errors?.sameAddress} />
            {sameAddress === "No" ? (
              <div className="grid grid-cols-1 gap-2">
                <label>Address</label>
                <input
                  name="address"
                  type="text"
                  placeholder="e.g. location, city"
                  onChange={handleInputChange}
                />
                <InputError error={errors?.address} />
              </div>
            ) : null}
          </div>
          <hr className="my-5" />
          <Button className="max-w-[150px]" onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfo;
