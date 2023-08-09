import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";

const { useRouter } = require("next/navigation");
const { useState } = require("react");

const PackagePrice = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    packagePrice: "",
  });

  const [errors, setErrors] = useState(formData ? formData : {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = validator(formData);

    if (Object.keys(newErrors).length === 0) {
      router.push("/register/tour-package/tour-plan-day-to-day");
    } else {
      setErrors(newErrors);
    }
  };

  const validator = (data) => {
    let obj = {};
    if (!data.packagePrice.trim()) {
      obj.packagePrice = "Price is required!";
    }

    return obj;
  };

  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/total-seat-n-group-size"
        text="Seat & Group Size"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">Package Price</p>
            <div className="grid grid-cols-1 gap-2">
              <label>
                Price start from: (Tourist can add extra services with extra
                charges if apply)
              </label>
              <input
                name="packagePrice"
                type="number"
                placeholder="e.g. BDT 5899 (each person)"
                onChange={handleInputChange}
              />
              <InputError error={errors.packagePrice} />
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

export default PackagePrice;
