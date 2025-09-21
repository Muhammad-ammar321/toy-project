import React from "react";

interface ConfirmationProps {
  formData: {
    fullName: string;
    address: string;
    fatherName: string;
    email: string;
    contact: string;
    preference: string;
  };
  onPrev: () => void;
  onSubmit: () => void;
}

const Step4: React.FC<ConfirmationProps> = ({ formData, onPrev, onSubmit }) => {
  return (
    <div>
      <h1>Confirmation</h1>
      <p>Please review your details before submitting:</p>

      <ul>
        <li><strong>Full Name:</strong> {formData.fullName}</li>
        <li><strong>Address:</strong> {formData.address}</li>
        <li><strong>Father Name:</strong> {formData.fatherName}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Contact:</strong> {formData.contact}</li>
        <li><strong>Course Preference:</strong> {formData.preference}</li>
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={onPrev}>Previous</button>
        <button onClick={onSubmit} style={{ marginLeft: "8px" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
