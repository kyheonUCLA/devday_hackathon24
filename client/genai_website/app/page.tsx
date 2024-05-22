"use client";
// Importing necessary dependencies
import React, { useState } from "react";

import FileUpload from "./components/FileUpload";
import TitleBar from "./components/TitleBar";


export default function Home() {
  // State to store the uploaded file
  const [file, setFile] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (e: any) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Do something with the uploaded file (e.g., send it to the server)
    console.log("Uploaded file:", file);
  };

  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-gray-100">

      <div className="flex flex-col bg-white p-8">
        <TitleBar />

        <div className="bg-white p-8 rounded-lg shadow-md ">
          <input
            type="text"
            className="w-64 text-black px-4 p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button
            onClick={handleSubmit}
            className="mx-4 px-4 p-2 bg-green-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Search
          </button>
          
          <FileUpload />
        </div>
      
      </div>
      
    </main>
  );
}
