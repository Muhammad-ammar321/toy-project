import React from "react";
import styles from "./../../styles/stepper/stepper.module.css";

interface StepperProps {
  steps?: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps = [], currentStep }) => {
  return (
    <div className={styles.stepperContainer}>
      {steps.map((label, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className={styles.step}>
            {/* Connector */}
            {index !== 0 && (
              <div
                className={`${styles.connector} ${
                  isCompleted ? styles.completedConnector : ""
                }`}
              />
            )}

            {/* Circle */}
            <div
              className={`${styles.circle} ${
                isActive ? styles.activeCircle : ""
              } ${isCompleted ? styles.completedCircle : ""}`}
            >
              {isCompleted ? "✓" : index + 1}
            </div>

            {/* Label */}
            <div
              className={`${styles.label} ${
                isActive ? styles.activeLabel : ""
              } ${isCompleted ? styles.completedLabel : ""}`}
            >
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
