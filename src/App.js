import React, { useState } from "react";
import "./App.css";

/*We will build the form, button and functionality here*/


function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCheck = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    // Placeholder for backend logic
    //alert(`Checking file "${file.name}" for suspicious activity...`);
  };

  return (
    <div className="App">
      <h1>Fraud Detection Tool</h1>
      <div className="form-container">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleCheck}>Check for Suspicious Activity</button>
      </div>
    </div>
  );
}

export default App;