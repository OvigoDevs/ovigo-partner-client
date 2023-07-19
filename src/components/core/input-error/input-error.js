const { Fragment } = require("react");
const { default: IconWrapper } = require("../icon-wrapper/icon-wrapper");
const { AlertCircle } = require("lucide-react");

const InputError = ({ error }) => {
  return (
    <Fragment>
      {error ? (
        <span className="input-error">
          <IconWrapper>
            <AlertCircle />
          </IconWrapper>
          {error}
        </span>
      ) : null}
    </Fragment>
  );
};

export default InputError;
