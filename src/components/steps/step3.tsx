import React, { useState } from "react";
import { Courses } from "./stepCard/CourseList";

interface Step3Props {
  onNext: (data: { preference: string }) => void;
  onPrev: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onPrev }) => {
  const [preference, setPreference] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preference) {
      alert("Please choose a course.");
      return;
    }
    onNext({ preference });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Choose Your Preference</h1>

      <label htmlFor="courses">Choose Your Course</label>
      <select
        id="courses"
        value={preference}
        onChange={(e) => setPreference(e.target.value)}
      >
        <option value="">-- Select --</option>
        {Courses.map((course) => (
          <option key={course.value} value={course.value}>
            {course.Title}
          </option>
        ))}
      </select>

      <div>
        <button type="button" onClick={onPrev}>Previous</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default Step3;
