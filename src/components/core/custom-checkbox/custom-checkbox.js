import { useEffect, useState } from "react";
import IconWrapper from "../icon-wrapper/icon-wrapper";
import { Square } from "lucide-react";
import { CheckSquare } from "lucide-react";

const CustomCheckbox = ({
  options,
  handleOnChange,
  name,
  defaultValue,
  label,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(
    defaultValue ? defaultValue : []
  );
  useEffect(() => {
    handleOnChange({
      target: {
        name,
        value: selectedOptions,
      },
    });
  }, [selectedOptions]);

  useEffect(() => {
    defaultValue.length && setSelectedOptions(defaultValue);
  }, [defaultValue]);
  return (
    <div className="grid grid-cols-1 gap-3">
      <p>{label}</p>
      <div
        className={`grid grid-cols-1 ${
          options.length > 9 ? "md:grid-cols-1" : ""
        } gap-3`}
      >
        {options.map((option) => (
          <div
            key={option}
            className="flex items-start justify-start gap-2 md:cursor-pointer"
            onClick={() => {
              if (selectedOptions.includes(option)) {
                setSelectedOptions([
                  ...selectedOptions.filter((item) => item !== option),
                ]);
              } else {
                setSelectedOptions([...selectedOptions, option]);
              }
            }}
          >
            <IconWrapper>
              {selectedOptions.includes(option) ? <CheckSquare /> : <Square />}
            </IconWrapper>
            <label htmlFor={option} className="md:cursor-pointer">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCheckbox;
