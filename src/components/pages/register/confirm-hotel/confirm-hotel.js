import Image from "next/image";
import phoneIcon from "../../../../images/phone.svg";
import eyeIcon from "../../../../images/eye-and-money.svg";
import calanderIcon from "../../../../images/calander-icon.svg";
import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import { Button } from "@/components/ui/button";

const ConfirmHotel = () => {
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <div className="py-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-md p-5 space-y-4">
          <h4 className="text-lg">
            That&apos;s it! You&apos;ve done everything you need to before your
            first guest stays.
          </h4>
          <p>After you finish your registration you&apos;ll be able to:</p>

          <div className="space-y-3">
            <div className="flex gap-4 items-center">
              <Image width={40} height={40} src={phoneIcon} alt="Phone Icon" />
              <p>Manage your property from your dashboard.</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image width={40} height={40} src={eyeIcon} alt="Phone Icon" />
              <p>Get bookings and make money from guests browsing our site.</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src={calanderIcon}
                alt="Phone Icon"
              />
              <p>
                Stay on top of bookings from all the sites you use by syncing
                your calander.
              </p>
            </div>
          </div>
          <hr />

          <CustomCheckbox
            options={[
              "I certify that this is a legitimate accomodation business with all necessary licenses and permits, which can be shown upon request. Ovigo reserves the right to verify and investigate any details provided in this registration.",
              "I have read, accepted, and agreed to the General Delivery Terms.",
            ]}
            name="agreement"
            label=""
            defaultValue={[]}
            handleOnChange={handleOnChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-5">
        <Button className='w-full'>Submit</Button>
      </div>
    </div>
  );
};

export default ConfirmHotel;
