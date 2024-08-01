import { Dispatch, FC, SetStateAction, useState } from "react";

interface iProps {
  value: boolean;
}

export const DisplayPart: FC<iProps> = ({ value }) => {
  console.log(value);
  return (
    <div className={`flex bg-red-500 w-full justify-between relative mt-10`}>
      {/* For Squirells */}
      <div
        className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${value ? "top-5 left-10  " : "top-0 left-0 "}
          h-[100px] w-[100px] flex justify-center items-center `}
      />
      <div
        className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${value ? "top-5 right-10  " : "top-0 left-10 "}
          h-[100px] w-[100px] flex justify-center items-center `}
      />

      {/* For Trees */}
      <div className="absolute top-0 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center left-10 " />
      <div className="absolute top-0 right-10 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center " />
    </div>
  );
};
