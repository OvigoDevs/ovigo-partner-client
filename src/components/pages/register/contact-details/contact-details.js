import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <div className="section-d">
      <div>
        <h1 className="font-bold mb-5">Registration information</h1>
        <div className="col-span-2 grid grid-cols-1 gap-2">
          <label>Phone</label>
          <input />
        </div>
      </div>
      <Link href="/register/create-password">
        <Button className="mt-10">Next</Button>
      </Link>
    </div>
  );
};

export default ContactDetails;
