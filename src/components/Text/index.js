import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[24px] md:text-[26px] text-[28px]",
  h2: "sm:text-[21px] md:text-[23px] text-[25px]",
  h3: "font-semibold sm:text-[18px] md:text-[20px] text-[22px]",
  h4: "text-[20px]",
  h5: "text-[18px]",
  h6: "text-[17px]",
  body1: "text-[16px]",
  body2: "text-[15px]",
  body3: "text-[14px]",
  body4: "text-[13px]",
  body5: "font-normal text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
