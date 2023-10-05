import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css'; // Import the CSS file

function QuestionForm() {
  const [partA, setPartA] = useState(0);
  const [partB, setPartB] = useState(0);
  const [partC, setPartC] = useState(0);

  const handlePartAChange = (e) => {
    setPartA(e.target.value);
  };

  const handlePartBChange = (e) => {
    setPartB(e.target.value);
  };

  const handlePartCChange = (e) => {
    setPartC(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Part A:', partA);
    console.log('Part B:', partB);
    console.log('Part C:', partC);
  };

  // Handling file uploads
  const onDrop = (acceptedFiles) => {
    // Handle the uploaded files (CSV, Excel, etc.)
    console.log('Uploaded files:', acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.csv,.xlsx', // Allow CSV and Excel files
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="file-input" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop CSV or Excel files here, or click to select files</p>
        </div>
        <label>
          Number of Questions for Part A:
          <input type="number" value={partA} onChange={handlePartAChange} />
        </label>
        <br />
        <label>
          Number of Questions for Part B:
          <input type="number" value={partB} onChange={handlePartBChange} />
        </label>
        <br />
        <label>
          Number of Questions for Part C:
          <input type="number" value={partC} onChange={handlePartCChange} />
        </label>
        <br />
        <button type="submit">Show PDF</button>
        <button type="reset">Print PDF</button>
        <button type="button">Show Answer Key</button>
        <button type="button">Print Answer Key</button>
      </form>
    </div>
  );
}

export default QuestionForm;
