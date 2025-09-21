import React, { useState } from "react";
import { Courses } from "./CourseList"; // <-- put your array in a separate file (CourseList.ts) or inside this file

interface CourseProps {
  onNext: () => void;
  onPrev: () => void;
}

const Course: React.FC<CourseProps> = ({ onNext, onPrev }) => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleNext = () => {
    if (!selectedCourse) {
      alert("Please select a course before continuing.");
      return;
    }
    console.log("Selected Course:", selectedCourse);
    onNext();
  };

  return (
    <div>
      <h2>Select a Course</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {Courses.map((course) => (
          <li key={course.value} style={{ margin: "8px 0" }}>
            <label>
              <input
                type="radio"
                value={course.value}
                checked={selectedCourse === course.value}
                onChange={(e) => setSelectedCourse(e.target.value)}
              />
              {" "}{course.Title}
            </label>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={onPrev}>Previous</button>
        <button onClick={handleNext} style={{ marginLeft: "8px" }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Course;
