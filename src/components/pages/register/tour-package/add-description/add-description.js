import { Textarea } from "@/components/ui/textarea";

const { default: Backlink } = require("@/components/core/backlink/backlink");
const {
  default: IconWrapper,
} = require("@/components/core/icon-wrapper/icon-wrapper");
const {
  default: InputError,
} = require("@/components/core/input-error/input-error");
const { Button } = require("@/components/ui/button");
const { ThumbsUp } = require("lucide-react");
const { useRouter } = require("next/navigation");
const { useState } = require("react");

const AddDescription = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    tourDescription: "",
  });
  const [errors, setErrors] = useState(formData ? formData : {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    const newErrors = validator(formData);

    if (Object.keys(newErrors).length === 0) {
      router.push("/register/tour-package/");
    } else {
      setErrors(newErrors);
    }
  };

  const validator = (data) => {
    let obj = {};
    if (!data.tourDescription.trim()) {
      obj.tourDescription = "Description is required!";
    }

    return obj;
  };
  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/registration-progress"
        text="Registration progress"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">Add Description</p>
            <div className="grid grid-cols-1 gap-2">
              <label>
              Here you can add description as you like, we will display this details description to tourist to attract them to this package. Include each details that you couldn&apos;t add here.
              </label>
              <Textarea
                name="tourDescription"
                type="text"
                placeholder="Description"
                onChange={handleInputChange}
              />
              <InputError error={errors.tourDescription} />
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

export default AddDescription