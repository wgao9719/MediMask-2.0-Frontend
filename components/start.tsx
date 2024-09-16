import React from 'react';
import DragAndDropUpload from './DragAndDropUpload';

const YourComponent = () => {
  const handleFileUpload = (file: File | null) => {
    // You can perform actions when the file is uploaded, if needed
  };

  const handleStart = () => {
    // Retrieve the file from local storage
    const fileContent = localStorage.getItem('uploadedFile');
    const fileName = localStorage.getItem('uploadedFileName');

    if (fileContent && fileName) {
      // Process the file
      // For example, if it's a PDF, you might display it using PDF.js
      // If it's a CSV, you might parse it using a CSV parser

      // Example: Handling a CSV file
      if (fileName.endsWith('.csv')) {
        // Decode the Base64 string
        const base64Content = fileContent.split(',')[1];
        const csvContent = atob(base64Content);

        // Parse the CSV content
        const rows = csvContent.split('\n').map((row) => row.split(','));

        // Do something with the rows
        console.log(rows);
      }

      // Example: Handling a PDF file
      if (fileName.endsWith('.pdf')) {
        // Display or process the PDF content
        // Note: Handling PDFs requires additional libraries like PDF.js
      }
    } else {
      alert('No file found in local storage.');
    }
  };

  return (
    <DragAndDropUpload onFileUpload={handleFileUpload} onStart={handleStart} />
  );
};

export default YourComponent;
