import { Button } from "@/components/ui/button";
import { getCookie, setCookie } from "@/lib/cookie";
import { verification } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Verification = () => {
  const { registerData } = useSelector((state) => state.registerData);
  const [verify, setVerify] = useState(false);
  useEffect(() => {
    setVerify(registerData.verification);
  }, []);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleOnSubmit = () => {
    dispatch(verification({ verification: true }));
    setCookie(
      "registerData",
      registerData
        ? { ...registerData, verification: true }
        : { verification: true }
    );
    router.push("/register/register-info");
  };

  return (
    <div className="container-d section-d flex flex-col gap-5">
      <h3>
        Please click on the link below to verify your email and proceed to nex
        step.
      </h3>
      <Button
        className="max-w-[150px]"
        variant={verify ? "outline" : ""}
        onClick={handleOnSubmit}
        disabled={verify}
      >
        {verify ? "Verified" : "Verify"}
      </Button>
    </div>
  );
};

export default Verification;
