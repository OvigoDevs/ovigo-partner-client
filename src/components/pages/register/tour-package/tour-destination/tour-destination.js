import Backlink from "@/components/core/backlink/backlink";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
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
import { ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TourDestination = () => {
  const router = useRouter();
  const journeyStart = [
    {
      id: 1,
      value: "Dhaka",
    },
    {
      id: 2,
      value: "Chittogong",
    },
    {
      id: 3,
      value: "Rajshahi",
    },
    {
      id: 4,
      value: "Sylhet",
    },
    {
      id: 5,
      value: "Barishal",
    },
    {
      id: 6,
      value: "Khulna",
    },
  ];
  const journeyEnd = [
    {
      id: 1,
      value: "Cox's Bazar",
    },
    {
      id: 2,
      value: "Saint Martin",
    },
    {
      id: 3,
      value: "Kuakata",
    },
    {
      id: 4,
      value: "Kaptai Lake",
    },
    {
      id: 5,
      value: "Boga Lake",
    },
    {
      id: 6,
      value: "Shajek Valley",
    },
  ];

  const [tourDestination, setTourDestination] = useState({
    tourStart: "",
    tourEnd: "",
  });
  const [errors, setErrors] = useState(tourDestination ? tourDestination : {});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTourDestination({ ...tourDestination, [name]: value });
  };

  console.log(tourDestination);

  const handleSubmit = () => {
    const newErrors = validator(tourDestination);

    if (Object.keys(newErrors).length === 0) {
      router.push("/register/tour-package/tour-date-and-time");
    } else {
      setErrors(newErrors);
    }
  };

  const validator = (data) => {
    let obj = {};
    if (!data.tourStart.trim()) {
      obj.tourStart = "Start Point is required!";
    }
    if (!data.tourEnd.trim()) {
      obj.tourEnd = "Tour Destination is required!";
    }

    return obj;
  };

  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/tour-package-name"
        text="Package Name"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">Tour Destination</p>
            <div className="grid grid-cols-1 gap-2">
              <label>From</label>
              <Select
                onValueChange={(value) =>
                  handleOnChange({
                    target: {
                      name: "tourStart",
                      value,
                    },
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select The City You Want Your Journey To Start" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="grid grid-cols-1 max-h-[200px] overflow-y-auto gap-2">
                    {journeyStart.map((place) => (
                      <SelectItem key={place.id} value={place.value}>
                        {place.value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <InputError error={errors.tourStart} />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>Tour Category</label>
              <Select
                onValueChange={(value) =>
                  handleOnChange({
                    target: {
                      name: "tourEnd",
                      value,
                    },
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select The Final Destination, If multiple then select all" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="grid grid-cols-1 max-h-[200px] overflow-y-auto gap-2">
                    {journeyEnd.map((place) => (
                      <SelectItem key={place.id} value={place.value}>
                        {place.value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <InputError error={errors.tourEnd} />
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

export default TourDestination;
