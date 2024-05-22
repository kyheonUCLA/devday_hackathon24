import React, { useState } from "react";
import { RiFileUploadLine } from "react-icons/ri";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <label htmlFor="file-upload" className="cursor-pointer rounded-2xl border border-dotted border-black p-4">
        <div className="flex flex-col items-center rounded-t-sm mt-6">
        <RiFileUploadLine className="h-10 w-10 text-gray-400 mb-2 items-center justify-center" />
        <span className="text-gray-400">Choose a file</span>

        </div>
        <input 
          type="file"
          id="file-upload"
          className="sr-only justify-center items-center"
          onChange={handleFileChange}
        />
      </label>
      
    </div>
  );
}
