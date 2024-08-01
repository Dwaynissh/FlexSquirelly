"use client";

import React, { useContext, useState } from "react";
import { Context } from "./global/provider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import squirell from "../public/squirell-removebg-preview.png";

const Page = () => {
  const { user, setUser } = useContext(Context);
  const [state, setState] = useState("");
  const router = useRouter();

  return (
    <div className="h-[calc(100vh-30px)] w-[100%] bg-[#fff]">
      <div className="w-full flex justify-start items-center">
        <Image src={squirell} alt="Squirrel" className="h-[200px] w-[200px]" />
      </div>
      <div className="w-full">
        <div className="pt-[60px] text-center">
          <h1 className="mb-4 text-[#e38e6c] text-[30px] font-extrabold ">
            Welcome TO FLEXSQUIRELLY
          </h1>
          <h3 className="text-[#e38e6c] text-[18px] font-medium">
            Help the squirrels go back to their burrows. But first input your
            name to go!!!
          </h3>
        </div>
        <div className="w-full py-[40px] flex justify-center items-center flex-col">
          <div className="w-full mb-6 flex justify-center items-center">
            <input
              type="text"
              placeholder="Player Name"
              className="h-[45px] w-[400px] md:w-[500px] pl-2 rounded-lg outline-none border border-[#e38e6c]"
              value={state}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-4 rounded-lg shadow-md border bg-[#e38e6c] text-white animate-bounce"
            onClick={() => {
              console.log("checking user", user, "checking state,", state);
              setUser(state);
              localStorage.setItem("user", JSON.stringify(state));
              router.push("/1");
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-full flex justify-end items-center">
        <div className="flex-1" />
        <Image src={squirell} alt="Squirrel" className="h-[200px] w-[200px]" />
      </div>
    </div>
  );
};

export default Page;
