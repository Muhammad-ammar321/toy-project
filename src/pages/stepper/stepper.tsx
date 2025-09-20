import { useState } from "react"
import { Steps } from "../../routes/stepperRoute/step"
import styles from '../../styles/stepper/stepper.module.css'

const StepperApp = ()=>{

  const [currentStep,setCurrentStep]= useState(0)

  const nextStep = ()=>{
    setCurrentStep((step)=> Math.min(step +1,Steps.length -1))
  }

  const preStep = ()=>{
    setCurrentStep((step)=> Math.max(step -1,0))
  }


  return(
    <>
    <div className={styles.box}>
      <div className={styles.tracker}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <div>{Steps[currentStep].component}</div>
      <button
        onClick={preStep}
        disabled={currentStep === 0}
     >Previous</button>

      <button
        onClick={nextStep}
        disabled={currentStep === Steps.length -1}
      >Next</button>
    </div>
    </>
  )
}

export default StepperApp