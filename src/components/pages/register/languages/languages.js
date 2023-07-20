import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from "@/lib/cookie";
import { registerLanguages } from "@/redux/features/register_slice";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InputError from "@/components/core/input-error/input-error";
import { useRouter } from "next/navigation";
const Languages = () => {
  const { hotelData } = useSelector((state) => state.registerData);

  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const router = useRouter();
  const [languages, setLanguages] = useState(
    hotelData.registerLanguages ? hotelData.registerLanguages : []
  );

  const handleOnChange = (e) => {
    setLanguages(e.target.value);
    dispatch(registerLanguages({ registerLanguages: languages }));
  };

  const handleOnClick = () => {
    if (languages?.length === 0) {
      setError("Please Atleast Select One Language");
    } else {
      setCookie("hotelData", { ...hotelData, registerLanguages: languages });
      router.push("/register/house-rules");
    }
  };
  return (
    <div className="section-d max-w-[500px]">
      <h3 className="font-bold">Languages</h3>
      <div className="grid grid-cols-1 gap-3 py-5">
        <CustomCheckbox
          label="What languages you or your staff speak?"
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
          defaultValue={languages}
        />
        <InputError error={error} />
        <Button className="mt-10 w-[100px]" onClick={handleOnClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Languages;
