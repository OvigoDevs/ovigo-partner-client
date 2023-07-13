import React from "react";

const IconWrapper = ({ children }) => {
  const StyledChildren = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        className: `${child.props.className} h-[18px] w-[18px] min-h-[18px] min-w-[18px]`,
      })
    );

  return <StyledChildren />;
};

export default IconWrapper;
