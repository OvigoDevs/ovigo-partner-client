import { CheckCircle } from "lucide-react";
import { Circle } from "lucide-react";
import { useState } from "react";
import IconWrapper from "../icon-wrapper/icon-wrapper";

const CustomRadio = ({ options, handleOnChange, defaultValue, name, label }) => {
  const [nativeOptions, setNativeOptions] = useState(
    options
      ? options.map((item) => {
          return { text: item, value: defaultValue ? true : false };
        })
      : { text: "", value: false }
  );

  return (
    <div className="grid grid-cols-1 gap-2">
      <label>{label}</label>
      {nativeOptions.map((option) => {
        return (
          <div
            className="flex items-center space-x-2 md:cursor-pointer"
            key={option.text}
            onClick={() => {
              setNativeOptions([
                ...nativeOptions.map((item) => {
                  if (item.text === option.text) {
                    return {
                      text: item.text,
                      value: item.value ? false : true,
                    };
                  }else{
                    return {
                      text: item.text,
                      value: false
                    };
                  }
                }),
              ]),
                handleOnChange({
                  target: {
                    name: name,
                    value: option.text,
                  },
                });
            }}
          >
            <IconWrapper>
              {option.value ? <CheckCircle /> : <Circle />}
            </IconWrapper>
            <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {option.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CustomRadio;
