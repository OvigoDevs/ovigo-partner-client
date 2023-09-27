import { Button } from "@/components/ui/button";
import { useState } from "react";
// icon import form from "react-icon"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiHide, BiLockAlt, BiShow } from "react-icons/bi";
import { useSelector } from "react-redux";
import createPasswordImg from "../../../../../../public/images/auth/createPassword.png";

const CreatePassword = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [password, setPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);

  const validPassword = useSelector(
    (state) => state.registerData.registerData.registerInfo
  );
  // console.log("djfj", validPassword)
  const handleCreatePassword = (data) => {
    // console.log(data)
    if (data?.confirm_password == data.password) {
      const password = data?.password;
      // console.log(password)
      const passwordData = { ...validPassword, password };
      console.log("main Data", passwordData);
      fetch(
        "http://159.223.78.171:5000/businessUsersReg",
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(passwordData),
        }
      )
        .then((response) => response.json())
        .then((registerData) => {
          console.log(registerData);
          if (registerData?.data?.modifiedCount > 0) {
            toast(registerData.status, {
              icon: "👏",
            });
            // console.log(findMail)
            router.push(`/login`);
          } else {
            toast.error(registerData.message);
          }
        })

        .catch((errors) => {
          console.log(errors);
        });

      // toast("Added A New Password", {
      //   icon: "👏",
      // });
    } else {
      toast.error("password not match");
    }
  };
  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
        <form
          className="form_card lg:p-10 p-3 h-max lg:mt-20 mt-3"
          onSubmit={handleSubmit(handleCreatePassword)}
        >
          <h2 className="lg:text-4xl text-2xl text-[#000] font-semibold lg:mb-10 mb-3">
            Create Password
          </h2>
          <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-4 relative">
            <BiLockAlt size="22px" color="#b6b9be" />
            <input
              type={password ? "password" : "text"}
              required={true}
              placeholder="Password"
              {...register("password", {
                required: "password",
              })}
              className="w-full focus:outline-none rounded-md text-[#b6b9be] bg-transparent"
            />
            {password ? (
              <div className="absolute right-1 top-2">
                <BiHide
                  onClick={() => setPassword(!password)}
                  size="22px"
                  color="#b6b9be"
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <div className="absolute right-1 top-2">
                <BiShow
                  onClick={() => setPassword(!password)}
                  size="22px"
                  color="#b6b9be"
                  className="cursor-pointer"
                />
              </div>
            )}
          </div>
          <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-7 relative">
            <BiLockAlt size="22px" color="#b6b9be" />
            <input
              type={newPassword ? "password" : "text"}
              required={true}
              placeholder="Confirm Password"
              {...register("confirm_password", {
                required: "confirm_password",
              })}
              className="w-full focus:outline-none rounded-md text-[#b6b9be] bg-transparent"
            />
            {newPassword ? (
              <div className="absolute right-1 top-2">
                <BiHide
                  onClick={() => setNewPassword(!newPassword)}
                  size="22px"
                  color="#b6b9be"
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <div className="absolute right-1 top-2">
                <BiShow
                  onClick={() => setNewPassword(!newPassword)}
                  size="22px"
                  color="#b6b9be"
                  className="cursor-pointer"
                />
              </div>
            )}
          </div>
          <Button className="mt-10 w-full" type="submit">
            Next
          </Button>
        </form>
        <div className="lg:p-10 p-5">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%" }}
            src={createPasswordImg}
            alt={createPasswordImg}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
