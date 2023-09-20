import { Button } from "@/components/ui/button";
import { registerInfo } from "@/redux/features/register_slice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiPhoneCall } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import contactDetailsImg from "../../../../../../public/images/auth/contactDetails.png";

const ContactDetails = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
 
  const contactData = useSelector((state) => state.registerData.registerData.registerInfo)
  // console.log(contactData)

  const handleContactDetails = (data) => {  
   const contact = {...data, ...contactData};
   dispatch(
    registerInfo({
      registerInfo: contact,
    })
  );
   
    toast("Your Contact Number Added", {
      icon: "👏",
    });
    router.push("/register/create-password");
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
        <form
          className="form_card lg:p-10 p-3 h-max lg:mt-20 mt-3"
          onSubmit={handleSubmit(handleContactDetails)}
        >
          <h2 className="lg:text-4xl text-2xl text-[#000] font-semibold lg:mb-5 mb-3">
            Contact details
          </h2>
          <h3 className="text-base text-[#101828] font-bold lg:mb-5">
            Registration information
          </h3>
          <div>
            <div className="col-span-2 grid grid-cols-1 gap-2">
              <label className="text-base text-black font-normal">Phone</label>
              <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-4">
                <FiPhoneCall size="22px" color="#b6b9be" />
                <input
                  required={true}
                  type="number"
                  placeholder="e.g. +880**********"
                  {...register("phone", {
                    required: "phone",
                  })}
                  className="w-full focus:outline-none rounded-md text-[#b6b9be] bg-transparent"
                />
              </div>
            </div>
          </div>
          <Button className="mt-10 w-full" type="submit">
            Continue
          </Button>
        </form>
        <div className="xl:w-[550px] lg:ml-auto">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            src={contactDetailsImg}
            alt={contactDetailsImg}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
