import { Component, useState } from "react"

import Step1 from "../../components/steps/step1"
import Step2 from "../../components/steps/step2"
import Step3 from "../../components/steps/step3"

import './stepper.css'

const Stepper = ()=>{

  const [currentStep,setCurrentStep]= useState(0)

  const Steps =[
    {
      id:1,
      Component:<Step1/>
    },
    {
      id:2,
      Component:<Step2/>
    },
    {
      id:3,
      Component:<Step3/>
    },
  ]

  const nextStep = ()=>{
    setCurrentStep((step)=> Math.min(step +1,Steps.length -1))
  }

  const preStep = ()=>{
    setCurrentStep((step)=> Math.max(step -1,0))
  }


  return(
    <div>
      <div>{Steps[currentStep].Component}</div>
      <button
        onClick={preStep}
        disabled={currentStep === 0}
     >Previous</button>

      <button
        onClick={nextStep}
        disabled={currentStep === Steps.length -1}
      >Next</button>
    </div>
  )
}

export default Stepper