"use client";
// Importing necessary dependencies
import React, { useState } from "react";

import FileUpload from "./components/FileUpload";
import TitleBar from "./components/TitleBar";
import Mic from "./components/Mic";

export default function Home() {
  const [text, setText] = useState("");

  const state = fetch("http://127.0.0.1:5000/ld")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
  });

  const onTextChange = (e: any) => {
    e.preventDefault()
    setText(e.target.value)
  }

  return (
      <main className={"flex min-h-screen flex-row items-center justify-center bg-gray-100 scale-" + state}>

        <div className="flex flex-col bg-white p-8">
          <TitleBar />

          <div className="bg-white p-8 rounded-lg shadow-md ">
            <div className="flex flex-row items-center justify-center bg-white">
              <input
                onChange={onTextChange}
                type="text"
                className="w-64 text-black px-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
              <button
                onClick={() => {}}
                className="mx-4 px-4 p-2 bg-green-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
              >
                Search
              </button>

              <Mic />
            </div>
            
            <FileUpload />
          </div>
        
        </div>
        
      </main>
  );
}
