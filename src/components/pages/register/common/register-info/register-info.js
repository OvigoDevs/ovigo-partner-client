"use client";
import { Button } from "@/components/ui/button";
import { registerInfo } from "@/redux/features/register_slice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import registerInfoImg from "../../../../../../public/images/auth/registerInfo.png";

const RegisterInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
 
  const email = useSelector((state) => state.registerData.registerData.registerInfo)
  console.log(email)
  const handleRegistrationInfo = (data) => {
    const registrationInfoData = {...data, email};
   console.log(registrationInfoData)
    dispatch(
      registerInfo({
        registerInfo: registrationInfoData,
      })
    );
    toast("Your First Name And Last Name Added", {
      icon: "👏",
    });
    router.push("/register/contact-details");
  };
  return (
    <div>
      <div className="grid grid-cols-5 gap-5 lg:mb-20 mb-5">
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
        <form
          className="form_card lg:p-10 p-3 h-max lg:mt-5 mt-3"
          onSubmit={handleSubmit(handleRegistrationInfo)}
        >
          <h2 className="text-base text-[#101828] font-bold lg:mb-7">
            Registration information{" "}
          </h2>
          <div>
            <input
              type="text"
              required={true}
              className="w-full border border-gray-400 py-2 px-3 mt-4 focus:outline-none rounded-md text-[#b6b9be] bg-transparent"
              placeholder="First Name"
              {...register("first_name", {
                required: "first_name",
              })}
            />
          </div>
          <div>
            <input
              type="text"
              required={true}
              className="w-full border border-gray-400 py-2 px-3 mt-4 focus:outline-none rounded-md text-[#b6b9be] bg-transparent"
              placeholder="Last Name"
              {...register("last_name", {
                required: "last_name",
              })}
            />
          </div>
          <Button className="mt-10 w-full" type="submit">
            Continue
          </Button>
        </form>
        <div className="xl:w-[520px] xl:ml-auto">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%" }}
            src={registerInfoImg}
            alt={registerInfoImg}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterInfo;
