import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="section-p grid grid-cols-1 lg:grid-cols-2 gap-10 section-m-b">
      {/* Text Container */}
      <div className="flex items-center">
        <div className="space-y-3">
          <h3 className="lg:text-5xl text-3xl font-bold">
            List Your{" "}
            <span className="text-primary block">
              <Typewriter
                words={[
                  "Hotel",
                  "Resort",
                  "Houseboat",
                  "Bus",
                  "Flight",
                  "Tour Package",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span>on Ovigo.net</span>
          </h3>
          <p className="text-lg md:w-10/12">
            Registration is free and can take as little as 15 minutes to
            complete - get started today
          </p>
        </div>
      </div>
      {/* Form Container */}
      <div className="flex justify-center items-center">
        <div className="text-start space-y-3 p-5 border border-primary rounded-md">
          <h3 className="text-2xl font-bold">Create Your Listing</h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <IconWrapper>
                <Check className="text-green-600 mt-[4px]" />
              </IconWrapper>{" "}
              More than 6.4 million vacation rentals already listed
            </li>
            <li className="flex items-center gap-2">
              <IconWrapper>
                <Check className="text-green-600 mt-[4px]" />
              </IconWrapper>{" "}
              Over 1 billion vacation rental guest arrivals{" "}
            </li>
            <li className="flex items-start gap-2">
              <IconWrapper>
                <Check className="text-green-600 mt-[4px]" />
              </IconWrapper>
              More than 40% of new vacation rental listings get their first
              booking within a week
            </li>
          </ul>
          <hr />
          <h3 className="font-bold">
            Create a partner account to get started:
          </h3>
          <p className="pb-10">
            By continuing, you agree to let Ovigo.net email you regarding your
            property registration.
          </p>
          <Link href="/register/with-email">
            <Button className="flex items-center gap-2 w-full">
              Get Started{" "}
              <IconWrapper>
                <ArrowRight />
              </IconWrapper>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
