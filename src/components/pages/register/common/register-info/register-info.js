"use client";

import Backlink from "@/components/core/backlink/backlink";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { NAME_REGEX } from "@/lib/regexes";
import { registerInfo } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RegisterInfo = () => {
  const router = useRouter();
  const { registerData } = useSelector((state) => state.registerData);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(
    registerData.registerInfo
      ? registerData.registerInfo
      : {
          firstName: "",
          lastName: "",
        }
  );
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
    if (!data.firstName.trim()) {
      obj.firstName = "First name is required!";
    } else if (!NAME_REGEX.test(data.firstName)) {
      obj.firstName = "Invalid first name!";
    }
    if (!data.lastName.trim()) {
      obj.lastName = "Last name is required!";
    }
    return obj;
  };

  useEffect(() => {
    console.log({ formData, errors });
    if (Object.keys(errors).length === 0 && edited) {
      // update redux store
      dispatch(
        registerInfo({
          registerInfo: formData,
        })
      );
      setCookie("registerData", { ...registerData, registerInfo: formData });
      router.push("/register/contact-details");
    }
  }, [errors]);

  useEffect(() => {
    setEdited(true);
  }, []);

  return (
    <div className="section-d">
      <div className="max-w-[500px]">
      <Backlink link="/register/verification" text="Verification" />
        <h1 className="font-bold mb-5">Registration information</h1>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 gap-1">
            <label>Firstname</label>
            <input
              name="firstName"
              placeholder="e.g. John"
              onChange={handleOnChange}
              defaultValue={formData.firstName}
            />
            <InputError error={errors.firstName} />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label>Lastname</label>
            <input
              name="lastName"
              placeholder="e.g. Doe"
              onChange={handleOnChange}
              defaultValue={formData.lastName}
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
