import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const RegisterWithEmail = () => {
  const router = useRouter();
  return (
    <div className="py-10 max-w-[450px]">
      <div className="p-5 rounded-md">
        <h2 className="text-2xl font-bold">Create your partner account</h2>
        <p>Create an account to list and manage your service.</p>
        <dev className="text-start pt-5 space-y-2">
          <label>Email Address</label>
          <Input />
          <Button
            className="w-full"
            onClick={() => router.push("/register/verification")}
          >
            Continue
          </Button>
        </dev>
        <hr />
        <p className="w-3/4">
          Check out Partner Help or ask another partner in the Partner
          Community.
        </p>
        <Button variant="outline" className="w-full">
          Sign In
        </Button>
        <hr />
        <p className="font-medium">
          By signing in or creating an account, you agree with our Terms &
          Conditions and Privacy Statement
        </p>
      </div>
    </div>
  );
};
export default RegisterWithEmail;
