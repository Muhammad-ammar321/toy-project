import  { useState } from "react";
import styles from '../../styles/stepper/stepper.module.css'
import Stepper from "../../pages/stepper/stepper";
import Step1 from "../../components/steps/step1";
import Step2 from "../../components/steps/step2";
import Step3 from "../../components/steps/step3";
import Step4 from "../../components/steps/step4";

const StepPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    fatherName: "",
    email: "",
    contact: "",
    preference: "",
  });

  const steps = ["Personal Info", "Contact Info", "Preferences", "Confirmation"];

  const nextStep = (data?: Partial<typeof formData>) => {
    if (data) {
      setFormData((prev) => ({ ...prev, ...data }));
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = () => {
    console.log("Final Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
   <div className={styles.pageWrapper}>
  <div className={styles.container}>
    <Stepper steps={steps} currentStep={currentStep} />

    {currentStep === 0 && <Step1 onNext={(data) => nextStep(data)} />}
    {currentStep === 1 && <Step2 onNext={(data) => nextStep(data)} onPrev={prevStep} />}
    {currentStep === 2 && <Step3 onNext={(data) => nextStep(data)} onPrev={prevStep} />}
    {currentStep === 3 && (
      <Step4 formData={formData} onPrev={prevStep} onSubmit={handleSubmit} />
    )}
  </div>
</div>

  );
};

export default StepPage;
