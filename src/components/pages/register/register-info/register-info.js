import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { NAME_REGEX } from "@/lib/regexes";
import { registerInfo } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const RegisterInfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState(formData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };

  const validator = (data) => {
    let obj = {};
    if (!data.firstName.trim()) {
      obj.firstName = "First name is required!";
    } else if (!NAME_REGEX.test(data.firstName)) {
      obj.firstName = "Invalid first name!";
    }
    if (!data.lastName.trim()) {
      obj.lastName = "Last name is required!";
    } else if (!NAME_REGEX.test(data.lastName)) {
      obj.firstName = "Invalid last name!";
    }
    return obj;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      // update redux store
      dispatch(
        registerInfo({
          registerInfo: formData,
        })
      );
      router.push("/register/contact-details");
    }
  }, [errors]);
  return (
    <div className="section-d">
      <div className="max-w-[500px]">
        <h1 className="font-bold mb-5">Registration information</h1>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 gap-1">
            <label>Firstname</label>
            <input
              name="firstName"
              placeholder="e.g. John"
              onChange={handleOnChange}
            />
            <InputError error={errors.firstName} />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label>Lastname</label>
            <input
              name="lastName"
              placeholder="e.g. Doe"
              onChange={handleOnChange}
            />
            <InputError error={errors.lastName} />
          </div>
        </div>
      </div>
      <Button className="mt-10 min-w-[100px]" onClick={handleOnSubmit}>
        Next
      </Button>
    </div>
  );
};

export default RegisterInfo;
