import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  return (
    <div className="container-d section-d mt-10">
      <h1 className="text-2xl font-bold mb-10">Welcome to Ovigo Partner registration!</h1>
      <Link href="/register/landing">
        <Button>{`Let's begin`}</Button>
      </Link>
    </div>
  );
};

export default Register;
