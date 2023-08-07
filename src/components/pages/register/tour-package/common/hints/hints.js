const { default: IconWrapper } = require("@/components/core/icon-wrapper/icon-wrapper");
const { ThumbsUpIcon } = require("lucide-react");

const Hints = () => {
    return (
        <div className="shadow-xl border flex items-start gap-3 p-4 rounded-md">
          <IconWrapper>
            <ThumbsUpIcon />
          </IconWrapper>
          <div className="grid grid-cols-1 gap-2">
            <h5 className="font-semibold">What type of names should I put in?</h5>
            <ul className="grid grid-cols-1 gap-1 list-disc">
              {[
                "Include the name which you want to known with",
                "Include the full company name do not",
                "Include the tour operator or guide names",
              ].map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
    )
}

export default Hints