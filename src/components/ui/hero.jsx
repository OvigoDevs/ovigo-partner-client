import Image from "next/image";
import horn from "../../assets/home/horn.png";
import hero1 from "../../assets/home/hero-1.png";
import hero2 from "../../assets/home/hero-2.png";
import hero3 from "../../assets/home/hero-3.png";
import hero4 from "../../assets/home/hero-4.png";

const Hero = () => {
  return (
    <div>
      <div className="bg-white dark:bg-[#020817]">
        <div className="container px-6 py-10 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h6 className="text-[#101010] dark:text-white text-[20px] mb-5 font-semibold">
                  Register your properties on free in 15 mins only
                </h6>
                <h1 className="text-[48px] text-[#101828] dark:text-white font-bold leading-[72px] ">
                  Maximize Business <br />
                  <span className="text-[#26DE81]">Growth</span> today{" "}
                </h1>
                <p className="text-[36px] font-medium text-[#2F2F2F] mt-4 dark:text-gray-500">
                  List Resorts now!
                </p>
                <button className="main-button mt-10">Register Now</button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Image src={hero1} alt="" width={241} height={256} />
                <Image src={hero2} alt="" width={241} height={256} />
                <Image src={hero3} alt="" width={241} height={256} />
                <Image src={hero4} alt="" width={241} height={256} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
