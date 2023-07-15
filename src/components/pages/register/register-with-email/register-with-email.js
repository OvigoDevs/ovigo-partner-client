import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const RegisterWithEmail = () => {
  const router = useRouter();
  return (
    <div className="section-d max-w-[450px]">
      <div className="rounded-md">
        <div className="grid grid-cols-1 gap-2 mb-10">
          <h2 className="text-xl font-bold">Create your partner account</h2>
          <p>Create an account to list and manage your service.</p>
          <dev className="grid grid-cols-1 gap-2">
            <label>Email Address</label>
            <Input />
            <Button
              className="w-full"
              onClick={() => router.push("/register/verification")}
            >
              Continue
            </Button>
          </dev>
        </div>
        <div className="grid grid-cols-1 gap-2">
        <p>
          Check out Partner Help or ask another partner in the Partner
          Community.
        </p>
        <Button variant="outline">
          Sign In
        </Button>
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
