import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";

const Languages = () => {
  const handleOnChange = (e) => {
    console.log(e)
  }
  return (
    <div className="section-d max-w-[500px]">
      <h3 className="font-bold">Languages</h3>
      <div className="grid grid-cols-1 gap-3 py-5">
        <label>What languages you or your staff speak?</label>
        <CustomCheckbox
          options={[
            "English",
            "Bangla",
            "Hindi",
            "Urdu",
            "Arabic",
            "French",
            "Latin",
            "Russian",
            "Japanese",
            "Chinese",
            "Korean",
            "Malay",
          ]}
          handleOnChange={handleOnChange}
          name="languages"
          defaultValue={[]}
        />
      </div>
    </div>
  );
};

export default Languages;
