import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EMAIL_REGEX } from "@/lib/regexes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerWithEmail } from "@/redux/features/register_slice";
import InputError from "@/components/core/input-error/input-error";
import { setCookie } from "@/lib/cookie";

const RegisterWithEmail = () => {
  const router = useRouter();
  const { registerData } = useSelector((state) => state.registerData);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // getting value from cookie and setting to state
  useEffect(() => {
    if (registerData.email) {
      setEmail(registerData.email);
    }
  }, [registerData]);

  const handleOnSubmit = () => {
    if (!EMAIL_REGEX.test(email)) {
      setError("Email is not validated!");
    } else {
      setError("");
      // redux update
      dispatch(
        registerWithEmail({
          email,
        })
      );
      setCookie(
        "registerData",
        registerData ? { ...registerData, email } : { email }
      );
      router.push("/register/verification");
    }
  };

  return (
    <div className="section-d max-w-[450px]">
      <div className="rounded-md">
        <div className="grid grid-cols-1 gap-2 mb-10">
          <h2 className="text-xl font-bold">Create your partner account</h2>
          <p>Create an account to list and manage your service.</p>
          <div className="grid grid-cols-1 gap-2">
            <label>Email Address</label>
            <input
              placeholder="e.g. john@example.com"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
            />
            <InputError error={error} />
            <Button className="w-full" onClick={handleOnSubmit}>
              Continue
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <p>
            Check out Partner Help or ask another partner in the Partner
            Community.
          </p>
          <Button variant="outline">Sign In</Button>
          <p className="font-medium mt-5">
            By signing in or creating an account, you agree with our Terms &
            Conditions and Privacy Statement
          </p>
        </div>
      </div>
    </div>
  );
};
export default RegisterWithEmail;
