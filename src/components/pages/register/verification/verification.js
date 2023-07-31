import Backlink from "@/components/core/backlink/backlink";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { verification } from "@/redux/features/register_slice";
import Link from "next/link";
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
    <div className="section-d flex flex-col gap-5">
      <Backlink link="/register/with-email" text="Sign up with email" />
      <h3>
        Please click on the link below to verify your email and proceed to nex
        step.
      </h3>
      <div className="flex items-center justify-start gap-2">
        <Button
          className="max-w-[150px]"
          variant={verify ? "outline" : "secondary"}
          onClick={handleOnSubmit}
          disabled={verify}
        >
          {verify ? "Verified" : "Verify"}
        </Button>
        <Link href="/register/register-info">
          <Button className="max-w-[150px]">Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default Verification;
