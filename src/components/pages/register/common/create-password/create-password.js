import Backlink from "@/components/core/backlink/backlink";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { createPassword } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreatePassword = () => {
  const router = useRouter();
  const { registerData } = useSelector((state) => state.registerData);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });
  const [edited, setEdited] = useState(false);
  const [errors, setErrors] = useState(edited ? formData : {});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setEdited(true);
  };

  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };

  const validator = (data) => {
    let obj = {};
    if (!data.password.trim()) {
      obj.password = "Password is required!";
    } else if (data.password.length < 8) {
      obj.password = "At least 8 character need!";
    }
    if (!data.confirm_password.trim()) {
      obj.confirm_password = "Confirm password is required!";
    } else if (data.confirm_password.length < 8) {
      obj.confirm_password = "At least 8 character need!";
    } else if (data.password !== data.confirm_password) {
      obj.confirm_password = "Not match with password!";
    }
    return obj;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // submit form
      dispatch(
        createPassword({
          createPassword: formData,
        })
      );
      setCookie("registerData", { ...registerData, createPassword: formData });
      router.push("/register/hotel/service-category");
    }
  }, [errors]);

  useEffect(() => {
    setEdited(true);
    if (registerData.createPassword) {
      setFormData(registerData.createPassword);
    }
  }, []);

  return (
    <div className="section-d">
      <div className="max-w-[500px]">
        <Backlink link="/register/contact-details" text="Contact details" />
        <h1 className="font-bold mb-5">Create password</h1>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 gap-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleOnChange}
              defaultValue={formData.password}
            />
            <InputError error={errors.password} />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              onChange={handleOnChange}
              defaultValue={formData.confirm_password}
            />
            <InputError error={errors.confirm_password} />
          </div>
        </div>
      </div>
      <Button className="mt-10 min-w-[100px]" onClick={handleOnSubmit}>
        Next
      </Button>
    </div>
  );
};

export default CreatePassword;
