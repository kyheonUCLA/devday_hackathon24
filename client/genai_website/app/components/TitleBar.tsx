import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

export default function TitleBar() {
  return (
    <div className="bg-blue-500 text-white py-4 px-8 flex flex-row space-x-[9rem] items-center rounded-sm">
      <FaHeartPulse className="w-20 h-20 bg-blue-500"/>
        <h1 className="text-4xl font-bold ">MedDojo</h1>
    </div>
  );
}