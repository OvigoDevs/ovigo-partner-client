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

const TourPackageName = () => {
  const router = useRouter();

  const [tourPackage, setTourPackage] = useState({
    tourPackageName: "",
    tourCategory: "",
  });

  const tourCategories = [
    {
      id: 1,
      category: "Adventure Tours",
    },
    {
      id: 2,
      category: "Sightseeing Tours",
    },
    {
      id: 3,
      category: "Relaxing Tours",
    },
    {
      id: 4,
      category: "Cultural Tours",
    },
    {
      id: 5,
      category: "Wildlife Tours",
    },
    {
      id: 6,
      category: "Food and Culinary Tours",
    },
    {
      id: 7,
      category: "Eco-Tours",
    },
    {
      id: 8,
      category: "Photography Tours",
    },
    {
      id: 9,
      category: "Wellness and Yoga Retreats",
    },
    {
      id: 10,
      category: "Historical Tours",
    },
    {
      id: 11,
      category: "Cruise and Sailing Tours",
    },
    {
      id: 12,
      category: "Educational and Study Tours",
    },
    {
      id: 13,
      category: "Festival and Event Tours",
    },
    {
      id: 14,
      category: "Rural and Village Tours",
    },
    {
      id: 15,
      category: "Luxury and VIP Tours",
    },
  ];
  

  const [errors, setErrors] = useState(tourPackage ? tourPackage : {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourPackage({ ...tourPackage, [name]: value });
  };
  console.log(tourPackage);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTourPackage({ ...tourPackage, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = validator(tourPackage);

    if (Object.keys(newErrors).length === 0) {
      router.push("/register/tour-package/tour-destination");
    } else {
      setErrors(newErrors);
    }
  };

  const validator = (data) => {
    let obj = {};
    if (!data.tourPackageName.trim()) {
      obj.tourPackageName = "Tour Package Name is required!";
    }
    if (!data.tourCategory.trim()) {
      obj.tourCategory = "Tour Category is required!";
    }

    return obj;
  };
  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/invoice-info"
        text="Invoice Info"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">Tour Package Name</p>
            <div className="grid grid-cols-1 gap-2">
              <input
                name="tourPackageName"
                type="text"
                placeholder="e.g. Green Escapes"
                onChange={handleInputChange}
              />
              <InputError error={errors.tourPackageName} />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label>Tour Category</label>
              <Select
                onValueChange={(value) =>
                  handleOnChange({
                    target: {
                      name: "tourCategory",
                      value,
                    },
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select the category of this tour package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="grid grid-cols-4 gap-2">
                    {tourCategories.map((category) => (
                      <SelectItem key={category.id} value={category.category}>
                        {category.category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <InputError error={errors.tourCategory} />
            </div>
          </div>
          <hr className="my-5" />
          <Button className="max-w-[150px]" onClick={handleSubmit}>Next</Button>
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

export default TourPackageName;
