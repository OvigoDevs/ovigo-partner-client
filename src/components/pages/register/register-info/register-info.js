import { Button } from "@/components/ui/button";
import Link from "next/link";

const RegisterInfo = () => {
  return (
    <div className="section-d">
      <div className="max-w-[500px]">
        <h1 className="font-bold mb-5">Registration information</h1>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 gap-1">
            <label>Firstname</label>
            <input />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label>Lastname</label>
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

export default RegisterInfo;
