import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Verification = () => {
    const router = useRouter();
  return (
    <div className="container-d section-d flex flex-col gap-5">
      <h3>
        Please click on the link below to verify your email and proceed to nex
        step.
      </h3>
      <Button className="max-w-[150px]" variant="secondary" onClick={() => router.push("/register/register-info")}>Verify</Button>
    </div>
  );
};

export default Verification;
