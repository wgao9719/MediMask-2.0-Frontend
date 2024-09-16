'use client';

import React, { useCallback, useState } from 'react';

interface DragAndDropUploadProps {
  onFileUpload?: (file: File | null) => void;
  onStart?: () => void;
}

const DragAndDropUpload: React.FC<DragAndDropUploadProps> = ({ onFileUpload, onStart }) => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOver(false);
  }, []);

  const handleFile = useCallback(
    (file: File) => {
      setUploadedFile(file);
      if (onFileUpload) {
        onFileUpload(file);
      }

      // Read the file content
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          // Store in local storage
          localStorage.setItem('uploadedFile', result);
          localStorage.setItem('uploadedFileName', file.name);
        }
      };

      // Read the file as Data URL (Base64)
      reader.readAsDataURL(file);
    },
    [onFileUpload]
  );

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragOver(false);
      const files = event.dataTransfer.files;
      if (files && files.length > 0) {
        const file = files[0];
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleFileInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleStart = useCallback(() => {
    if (onStart) {
      onStart();
    }
  }, [onStart]);

  return (
    <div
      className={`border-dashed border-2 p-6 text-center ${
        dragOver ? 'border-blue-400' : 'border-gray-400'
      } mt-8 mx-auto max-w-full sm:max-w-md md:max-w-lg`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p className="text-base font-medium text-gray-100">
        Drag and Drop File Here, or{' '}
        <label htmlFor="file-upload" className="cursor-pointer text-blue-500 underline">
          Click Here To Upload
        </label>
      </p>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
      />
      {uploadedFile && (
        <>
          <p className="text-base font-medium text-gray-100 mt-4">
            Uploaded File: <span className="font-normal">{uploadedFile.name}</span>
          </p>
          <button
            onClick={handleStart}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          >
            Start
          </button>
        </>
      )}
    </div>
  );
};

export default DragAndDropUpload;
