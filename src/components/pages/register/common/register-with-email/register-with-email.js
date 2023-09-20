import { Button } from "@/components/ui/button";
import { registerInfo } from "@/redux/features/register_slice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch } from "react-redux";
import registerImg from "../../../../../../public/images/auth/registerImg.png";

const RegisterWithEmail = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const handleRegister = (data) => {
    dispatch(
      registerInfo({
        registerInfo: data?.email,
      })
    );
    fetch(
      "https://ovigo-server-567i1qszj-nazmulbhuyian.vercel.app/businessUsersReg",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((registerData) => {
        console.log(registerData);
        if (registerData?.status === "Successfully") {
          toast(registerData.status, {
            icon: "👏",
          });
          // console.log(findMail)
          router.push(
            `/register/verification/?email=${registerData?.data?.email}`
          );
        } else {
          toast.error(registerData.message);
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  return (
    <div>
      <div className="grid grid-cols-5 gap-5 lg:mb-20 mb-10">
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
        <div>
          <h2 className="lg:text-4xl text-2xl text-[#000] font-semibold lg:mb-10 mb-5">
            Get Started Now
          </h2>
          <form
            className="form_card lg:p-10 p-3"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div className="lg:m-auto xl:w-[490px]">
              <h2 className="text-base text-[#101828] font-bold lg:mb-7">
                Create your partner account
              </h2>
              <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-4">
                <HiOutlineMail size="22px" color="#b6b9be" />
                <input
                  type="email"
                  placeholder="Email address"
                  required={true}
                  {...register("email", {
                    required: "email",
                  })}
                  className="w-full focus:outline-none rounded-md text-[#b6b9be] bg-transparent"
                />
              </div>
              <div className="flex justify-start gap-2 items-center lg:mt-10 mb-5 mt-3">
                <input
                  required={true}
                  {...register("checkbox", {
                    required: "checkbox",
                  })}
                  type="checkbox"
                  className="checkbox-sm bg-transparent "
                />
                <p className="m-0 text-[#344054] lg:text-base">
                  By creating an account you agree to our Terms & Conditions
                </p>
              </div>
              <Button className="w-full" type="submit">
                Continue
              </Button>
            </div>
            <div className="flex items-center justify-center gap-1 text-base border-t border-gray-400 lg:mt-10 mt-3 pt-5">
              <p> Already have an Account? </p>{" "}
              <Link href="/login" className="text-[#0A7B76] font-medium">
                Sign In
              </Link>
            </div>
          </form>
        </div>
        <div className="xl:w-[600px] xl:ml-auto">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            src={registerImg}
            alt={registerImg}
          />
        </div>
      </div>
    </div>
  );
};
export default RegisterWithEmail;
