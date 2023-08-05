import CustomRadio from "@/components/core/custom-radio/custom-radio";
import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

const CompanyStructure = () => {
  const [companyStructure, setCompanyStructure] = useState(null);

  // onChange for Custom Radio Buttons
  const handleOnChange = (e) => {
    console.log(e.target);
    setCompanyStructure(e.target.value);
  };

  // onSubmitHandler for Next Button
  const handleOnSubmit = () => {
    console.log(companyStructure);
  };

  return (
    <div className="section-d grid md:grid-cols-2 gap-4">
      <div className="p-5 border rounded-md w-full space-y-3">
        <h3 className="text-xl font-bold">Company Structure</h3>
        <CustomRadio
          options={[
            "Sole Proprietorship",
            "Partnership",
            "Limited Liability Company (LLC)",
            "Corporation",
          ]}
          handleOnChange={handleOnChange}
          name="companyStructure"
        />
        <div className="pt-3">
          <Button onClick={handleOnSubmit}>Next</Button>
        </div>
      </div>
      {/* Suggestion Box */}
      <div>
        <div className="flex gap-3 p-2 border rounded-md">
          <IconWrapper>
            <ThumbsUp className="mt-[4px]" />
          </IconWrapper>
          <div className="space-y-3">
            <h3 className="font-semibold">What if I am not single partner?</h3>
            <ul className="list-disc space-y-1">
              <li>
                in order to register you have to have partnership which have to
                up to 25% of the company.
              </li>
              <li>
                if you are a manager or employee of the company then please ask
                the company owner to complete the registration process.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStructure;
