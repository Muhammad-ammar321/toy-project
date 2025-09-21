import React, { useState } from "react";

interface Step2Props {
  onNext: (data: { email: string; contact: string }) => void;
  onPrev: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrev }) => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !contact) {
      alert("Please fill out all fields.");
      return;
    }
    onNext({ email, contact });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Information</h1>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="contact">Phone Number</label>
      <input
        id="contact"
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <div>
        <button type="button" onClick={onPrev}>Previous</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default Step2;
