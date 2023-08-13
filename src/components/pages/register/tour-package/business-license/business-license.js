import Backlink from "@/components/core/backlink/backlink";
import InputError from "@/components/core/input-error/input-error";
import UploadImages from "@/components/core/upload-images/upload-images";
import { Button } from "@/components/ui/button";
import ImageIcon from "@/components/ui/image-icon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BusinessLicense = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    businessLicense: [],
  });
  const [errors, setErrors] = useState(formData?.businessLicense?.length != 0 ? formData : {});

  // tourPackage state
  const [tourPackageData, setTourPackageData] = useState(null);

  useEffect(()=>{
    const oldTourPackageData = JSON.parse(localStorage.getItem("tourPackageData"));
    setTourPackageData(oldTourPackageData)
    if(oldTourPackageData?.businessLicense){
      setFormData({businessLicense: oldTourPackageData.businessLicense})
    }
  },[])
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handlesubmit
  const handleOnSubmit = () => {
    const newErrors = validator(formData);

    if (Object.keys(newErrors).length === 0) {
      const newTourPackageData = {
        ...tourPackageData,
        businessLicense: formData.businessLicense
      }

      localStorage.setItem("tourPackageData", JSON.stringify(newTourPackageData))  
      router.push("/register/tour-package/invoice-info");
    } else {
      setErrors(newErrors);
    }
  };
  console.log(formData) 
  // validation
  const validator = (data) => {
    let obj = {};
    if (!data?.businessLicense?.length) {
      obj.businessLicense = "Business License is required!";
    } else if (data?.businessLicense?.length > 5) {
      obj.businessLicense =
        "Maximum 5 images can be added! Remove rest of the images please!";
    }
    return obj;
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
              <UploadImages func={handleOnChange} name="businessLicense" />
              <InputError error={errors.businessLicense} />
            </div>
          </div>
          <hr className="my-5" />
          <Button className="max-w-[150px]" onClick={handleOnSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessLicense;
