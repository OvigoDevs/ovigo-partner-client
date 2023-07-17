import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";

const RoomFeatures = () => {
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <div className="section-d max-w-[500px]">
      <h3 className="font-bold">What can guests use in this room?</h3>
      <div className="grid grid-cols-1 gap-5 my-10">
        <CustomCheckbox
          options={[
            "Clothes rack",
            "flat-screenTV",
            "Air conditioning",
            "Lines",
            "Desk",
            "Wake-up service",
            "Towels",
            "Wardrobe or closet",
            "Heating",
            "Fan",
            "Safe",
            "Towels/Sheets (extra free)",
            "Entire unit located on ground floor",
          ]}
          name="general-amenities"
          label="General amenities"
          defaultValue={[]}
          handleOnChange={handleOnChange}
        />
        <hr />
        <div className="grid grid-cols-1 gap-3">
        <CustomCheckbox
          options={["Balcony", "Terrce", "View"]}
          name="outdoors-and-views"
          label="Outdoors and views"
          defaultValue={[]}
          handleOnChange={handleOnChange}
        />
        <div className="grid grid-cols-1 gap-2">
          <label>{`What's the main view from this room`}</label>
          <input />
        </div>
        </div>
        <hr />
        <CustomCheckbox
          options={[
            "Electric kettle",
            "Tea/Coffee maker",
            "Dining area",
            "Dining table",
            "Microwave",
          ]}
          name="food-and-drink"
          label="Food and drink"
          defaultValue={[]}
          handleOnChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default RoomFeatures;
