"use client"
import React from "react";

const CustomButton = () => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={"custom-btn"}
      onClick={() => {}}
    >
      <span className={"flex-1"}>Title</span>
    </button>
  );
};

export default CustomButton;