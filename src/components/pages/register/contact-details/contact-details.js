import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PHONE_REGEX } from "@/lib/regexes";
import { useRouter } from "next/navigation";
import { registerPhoneInfo } from "@/redux/features/register_slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCookie } from "@/lib/cookie";

const ContactDetails = () => {
  const router = useRouter();

  const { registerData } = useSelector((state) => state.registerData);

  const dispatch = useDispatch();

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (registerData.phone) {
      setPhone(registerData.phone);
    }
  }, [registerData]);

  const handleOnSubmit = () => {
    if (!PHONE_REGEX.test(phone)) {
      setError("Phone number is invalid");
    } else {
      setError("");
      dispatch(
        registerPhoneInfo({
          phone,
        })
      );
      setCookie(
        "registerData",
        { ...registerData, phone }
      );

      router.push("/register/create-password")
    }
  };

  return (
    <div className="section-d">
      <div className="max-w-[500px]">
        <h1 className="font-bold mb-5">Registration information</h1>
        <div className="col-span-2 grid grid-cols-1 gap-2">
          <label>Phone</label>
          <input
            placeholder="e.g. +880**********"
            onChange={(e) => setPhone(e.target.value)}
            defaultValue={phone}
          />
          <InputError error={error} />
        </div>
      </div>

      <Button onClick={handleOnSubmit} className="mt-10">
        Next
      </Button>
    </div>
  );
};

export default ContactDetails;
