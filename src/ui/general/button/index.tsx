import { poppinsFont } from "@/ui/font";
import { Button, ButtonProps } from "antd";
import clsx from "clsx";
import React from "react";

const GenButton: React.FC<ButtonProps> = ({
  type = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      type={type}
      style={poppinsFont.style}
      className={clsx(className, "w-full h-10")}
    >
      {children}
    </Button>
  );
};

export default GenButton;
