import CustomRadio from "@/components/core/custom-radio/custom-radio";

const GuestPayment = () => {
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <div className="section-d max-w-[500px] grid grid-cols-1 gap-5">
      <h3 className="font-bold">Guest payment options</h3>
      <div>
        <CustomRadio
          name="charge-credit"
          label="Would you like to charge credit cards at your property?"
          handleOnChange={handleOnChange}
          options={["Yes", "No"]}
        />
      </div>
      <div className="p-[1rem] rounded-md border dark:border-gray-800">
        <h3 className="font-bold">How does payments by Ovigo works?</h3>
        <p>{`Guest books > Ovigo facilates payment gatway > You get paid`}</p>
      </div>
    </div>
  );
};

export default GuestPayment;
