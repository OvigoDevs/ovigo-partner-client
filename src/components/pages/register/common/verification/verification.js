import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import verificationImg from "../../../../../../public/images/auth/verification.png";

const Verification = ({ email }) => {
  console.log(email);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const handleVerify = (data) => {
    const otp = Object.values(data).join("");
    const bodydata = { otp, email };
    console.log(data);
    fetch(
      "https://ovigo-backend-nqj2iwkbs-nazmulbhuyian.vercel.app/businessUsersReg/verifyOTP",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodydata),
      }
    )
      .then((response) => response.json())
      .then((verifyData) => {
        if (verifyData?.status == "Successfully") {
          toast(verifyData.status, {
            icon: "👏",
          });
          router.push("/register/register-info");
        } else {
          toast.error(verifyData.message);
        }
      });
  };

  const handleResendOtp = (req, res) => {
    const resentData = { email };
    console.log(resentData);
    fetch(
      "https://ovigo-backend-nqj2iwkbs-nazmulbhuyian.vercel.app/businessUsersReg/resendOTP",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resentData),
      }
    )
      .then((response) => response.json())
      .then((verifyData) => {
        toast(verifyData.message, {
          icon: "👏",
        });
      });
  };
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-5">
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
        <div className="form_card lg:p-10 p-3 h-max lg:mt-20 mt-5">
          <form onSubmit={handleSubmit(handleVerify)}>
            <h3 className="text-3xl text-[#101828] font-medium lg:mb-12 mb-3">
              Verify
            </h3>
            <p className="text-[#101828]">
              Check your email. We have sent you a verification code.
            </p>
            <div className="flex gap-5 mt-10 mb-3">
              <input
                type="number"
                required={true}
                className="w-full focus:outline-none rounded-none border-b border-black bg-transparent text-black text-5xl"
                {...register("verify", {
                  required: "verify",
                })}
              />
              <input
                type="number"
                required={true}
                className="w-full focus:outline-none rounded-none border-b border-black bg-transparent text-black text-5xl"
                {...register("verify1", {
                  required: "verify1",
                })}
              />
              <input
                type="number"
                required={true}
                className="w-full focus:outline-none rounded-none border-b border-black bg-transparent text-black text-5xl"
                {...register("verify2", {
                  required: "verify2",
                })}
              />
              <input
                type="number"
                className="w-full focus:outline-none rounded-none border-b border-black bg-transparent text-black text-5xl"
                {...register("verify3", {
                  required: "verify3",
                })}
              />
            </div>
            <Button className="w-full mt-3" type="submit">
              Verify account
            </Button>
          </form>
          <div className="mt-10 flex items-center justify-center gap-2">
            <p className="text-[#475467] text-base m-0 text-center">
              Expires in: 03:43. {"Didn't"} receive the code ?{" "}
            </p>
            <p
              className="text-[#0A7B76] font-medium cursor-pointer"
              onClick={() => handleResendOtp()}
            >
              Resend
            </p>
          </div>
        </div>
        <div className="w-full lg:p-5">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            src={verificationImg}
            alt={verificationImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Verification;
