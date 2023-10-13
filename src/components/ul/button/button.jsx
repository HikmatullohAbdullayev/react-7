import React from "react";
import style from "./button.module.css";
export const Button = ({
  type,
  onClick,
  children,
  startIcon: Icon,
  endIcon: EndIcon,
  variant,
}) => {
  return (
    <>
      <button
      onClick={onClick}
      type={type}
        className={
          variant === "frist"
            ? style.frist
            : variant === "scond"
            ? style.second
            : style.text
        }
      >
        {Icon ? <Icon/> : ""}
        {children}
        {Icon ? <EndIcon/> : ""}
      </button>
    </>
  );
};
