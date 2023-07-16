import CustomRadio from "@/components/core/custom-radio/custom-radio";

const HotelInformation = () => {
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <div className="section-d max-w-[500px]">
      <h3 className="font-bold">Hotel information</h3>
      <div className="grid grid-cols-1 gap-5 my-5">
        <h4>Tell us about your hotel</h4>

        <div className="grid grid-cols-1 gap-8">
          <p>{`Whats's the name of your hotel?`}</p>
          <div className="grid grid-cols-1 gap-2">
            <lable>Property name</lable>
            <input />
            <p className="text-gray-400 dark:text-gray-600 text-xs">
              Guest will see this name when they search place to stay
            </p>
          </div>
          <hr />
          <div className="grid grid-cols-1 gap-2">
            <CustomRadio
              options={[
                "N/A",
                "1 star",
                "2 stars",
                "3 stars",
                "4 stars",
                "5 stars",
              ]}
              defaultValue={0}
              handleOnChange={handleOnChange}
              name="hotel-rating"
              label="What is the rating of your hotel?"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <CustomRadio
              options={["Yes", "No"]}
              defaultValue={0}
              handleOnChange={handleOnChange}
              name="hotel-rating"
              label="Are you a property management company or a part of a group or chain?"
            />
            <div className="grid grid-cols-1 gap-2">
              <lable>Name of your company, group, or chain</lable>
              <input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInformation;
