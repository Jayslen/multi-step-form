import { useState } from 'react'
import { AddOns } from './Addons-form/AddOns'
import { Confirm } from './Confirm'
import { YourInfo } from './Personal-form/YourInfo'
import { Plan } from './Plan-form/Plan'
import { Summary } from './Summary/SummarySection'

export function Section() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep((prevState) => ++prevState)
  }
  const previusStep = () => {
    setStep((prevState) => --prevState)
  }
  return (
    <article className="grow h-auto md:h-full px-5 py-5 absolute bg-white mt-24 mx-4  md:bg-none md:m-0 md:relative md:py-0 rounded-md">
      {step === 1 ? (
        <YourInfo prevStep={previusStep} nextStep={nextStep} />
      ) : null}
      {step === 2 && <Plan prevStep={previusStep} nextStep={nextStep} />}
      {step === 3 && <AddOns prevStep={previusStep} nextStep={nextStep} />}
      {step === 4 && <Summary prevStep={previusStep} setStep={setStep} />}
      {!step && <Confirm />}
    </article>
  )
}
