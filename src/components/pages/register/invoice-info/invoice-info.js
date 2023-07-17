import CustomRadio from "@/components/core/custom-radio/custom-radio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InvoiceInfo = () => {
  const userName = "OVIGO OWNER";
  const hotelName = "OVIGO HOTEL";

  const handleOnChange = (e) => {
    console.log(e);
  };

  return (
    <div className="py-5">
      <h4 className="font-bold">Invoicing</h4>

      {/* Container */}
      <div className="pt-5 grid grid-cols-2 gap-4">
        <div className="p-5 rounded-md border">
          <p>
            We&apos;ll send you payouts every month by bank transfer. This
            payout includes all reservations that checked out in the previous
            month.
          </p>

          <div className="pt-5">
            <CustomRadio
              options={[
                userName,
                hotelName,
                "Leagal Company Name (Please specify)",
              ]}
              label="What name should be on the invoice?"
              handleOnChange={handleOnChange}
            />

            <h4 className="font-bold mt-5">Leagal Company Name (Please specify)</h4>
            <Input className='w-full mt-2' type='text' placeholder='Legal Company Name'/>

            <hr className="my-5"/>
            <CustomRadio
              options={[
                "Yes", "No"
              ]}
              label="Does this recipient have the same address as your property?"
              handleOnChange={handleOnChange}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Button className='w-full'>Submit</Button>
      </div>
    </div>
  );
};

export default InvoiceInfo;
