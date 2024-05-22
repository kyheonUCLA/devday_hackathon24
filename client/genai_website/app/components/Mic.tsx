"use client";

import { FaMicrophone } from "react-icons/fa";


import React from "react";

export default function Mic() {

  

  return (
    <button className=" border-2 border-gray-500 p-1 rounded-full">
      <FaMicrophone className="w-8 h-8" style={{ color: "gray" }}/>
    </button>
  )
}
