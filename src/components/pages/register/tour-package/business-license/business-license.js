import Backlink from "@/components/core/backlink/backlink";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import ImageIcon from "@/components/ui/image-icon";
import { useRouter } from "next/navigation";

const BusinessLicense = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/register/tour-package/invoice-info");
  };
  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/contact-information"
        text="Contact Information"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">Business License</p>
            <div className="grid grid-cols-1 gap-2">
              <label>
                Add your business license copy to validate as a proper company
              </label>
              <ImageIcon />
              {/* <InputError error={errors.phoneNumber} /> */}
            </div>
          </div>
          <hr className="my-5" />
          <Button className="max-w-[150px]" onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessLicense;
