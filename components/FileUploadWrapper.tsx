'use client';

import React from 'react';
import DragAndDropUpload from './DragAndDropUpload';

const FileUploadWrapper: React.FC = () => {
  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      // Handle the uploaded files here
      console.log('Files uploaded:', files);
      // You can process the files or upload them to your server
    }
  };

  return <DragAndDropUpload onFileUpload={handleFileUpload} />;
};

export default FileUploadWrapper;
