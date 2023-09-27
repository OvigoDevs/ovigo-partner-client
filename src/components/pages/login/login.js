"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiHide, BiLockAlt, BiShow } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import loginImage from "../../../../public/images/auth/loginImg.png";

const Login = () => {
  const [password, setPassword] = useState(true);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    fetch(
      "http://159.223.78.171:5000/businessUsersLog",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((loginData) => {
        if (loginData?.status === "Failled") {
          toast.error(loginData.message);
        } else {
          localStorage.setItem("ovigoLogInToken", loginData?.ovigoLogInToken);
          toast("Successfully Login", {
            icon: "👏",
          });
          router.push("/register/service-category");
        }
        console.log(loginData);
      })
      .catch((err) => console.log("error", err));
    console.log(data);
  };
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-start gap-3 lg:mb-20 mb-10">
          <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
          <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
          <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
          <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
          <div className="lg:h-2 h-1 bg-[#26DE81] rounded-md w-full"></div>
        </div>
        <div className="lg:mb-20 mb-5">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
            <div>
              <h2 className="lg:text-4xl text-2xl text-[#000] font-semibold lg:mb-10 mb-5">
                Get Started Now
              </h2>
              <form
                className="form_card lg:p-10 p-3"
                onSubmit={handleSubmit(handleLogin)}
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
                  <div className="flex justify-start gap-1 items-center border border-gray-400 rounded-md py-2 px-3 mt-5 relative">
                    <BiLockAlt size="22px" color="#b6b9be" />
                    <input
                      type={password ? "password" : "text"}
                      required={true}
                      placeholder="Password"
                      {...register("password", {
                        required: "password",
                      })}
                      className="w-full focus:outline-none rounded-md text-[#b6b9be] "
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
                  <div className="flex justify-start gap-2 items-center lg:mt-5 mb-3 mt-3">
                    <input
                      required={true}
                      type="checkbox"
                      className="checkbox-sm bg-transparent "
                    />
                    <p className="m-0 text-[#344054] lg:text-base">
                      By creating an account you agree to our Terms & Conditions
                    </p>
                  </div>
                  <Button className="w-full mt-3">Continue</Button>
                </div>
                <div className="flex items-center justify-center gap-1 text-base border-t border-gray-400 xl:mt-20 mt-3 pt-5 xl:pb-5 pb-2">
                  <p> Already {"don't"} have an account? </p>{" "}
                  <Link
                    href="/register/with-email"
                    className="text-[#0A7B76] font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
            <div className="w-full xl:h-[480px] lg:h-[430px] lg:mt-10">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                src={loginImage}
                alt={loginImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
