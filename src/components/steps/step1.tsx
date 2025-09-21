import React, { useState } from "react";

interface Step1Props {
  onNext: (data: { fullName: string; address: string; fatherName: string }) => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [fatherName, setFatherName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !address || !fatherName) {
      alert("Please fill out all fields.");
      return;
    }
    onNext({ fullName, address, fatherName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information</h1>

      <label htmlFor="fullname">Full Name</label>
      <input
        id="fullname"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <label htmlFor="address">Address</label>
      <input
        id="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <label htmlFor="fathername">Father Name</label>
      <input
        id="fathername"
        type="text"
        value={fatherName}
        onChange={(e) => setFatherName(e.target.value)}
      />

      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
