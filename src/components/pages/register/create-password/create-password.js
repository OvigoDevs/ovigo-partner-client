import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreatePassword = () => {
  return (
    <div className="container-d section-d">
      <div>
        <h1 className="font-bold mb-5">Create password</h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-1 gap-2">
            <label>Password</label>
            <input />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label>Confirm Password</label>
            <input />
          </div>
        </div>
      </div>
      <Link href="/register/contact-details">
        <Button className="mt-10 min-w-[100px]">Next</Button>
      </Link>
    </div>
  );
};

export default CreatePassword;
