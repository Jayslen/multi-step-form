import { PAYMENT_MONTHLY, PAYMENT_YEARLY } from '../../const/billing'
import { useUserData } from '../../hooks/useUserData'
import plans from '../../mocks/suscriptions.json'
import { Text } from '../SectionDescription'
import { InputBilling } from './InputBilling'
import { InputsRadio } from './InputsRadio'
import { useState } from 'react'

export function Plan({ prevStep, nextStep }) {
  const [error, setError] = useState(false)
  const { userData } = useUserData()
  const [billing, setBilling] = useState(userData?.billing || PAYMENT_MONTHLY)
  const { updateRadiosForm } = useUserData()

  const handleBilling = () => {
    setBilling((prevState) =>
      prevState === PAYMENT_MONTHLY ? PAYMENT_YEARLY : PAYMENT_MONTHLY
    )
  }

  const handleSubmit = (e) => {
    updateRadiosForm({
      event: e,
      moveNextStep: nextStep,
      updateError: setError,
    })
  }
  return (
    <>
      <Text
        title={'Select your plan'}
        text={'You have the options of monthly or yearly billing.'}
      />
      <form onSubmit={handleSubmit}>
        <article className="grid grid-rows-[repeat(3,100px)] md:grid-cols-3 md:grid-rows-[repeat(1,150px)] gap-3 my-5">
          {plans.map((data) => {
            return (
              <InputsRadio
                plan={data}
                key={data.id}
                billing={billing}
                error={error}
              />
            )
          })}
        </article>
        <InputBilling handleBilling={handleBilling} />
        <p className={`${error ? 'block text-xs text-red-500' : 'hidden'}`}>
          Please select one option
        </p>
        <div className="flex flex-col gap-2 mt-3">
          <button className="nextBtn">Next Step</button>
          <button
            className="previusBtn"
            type="button"
            onClick={() => {
              prevStep()
            }}
          >
            Go Back
          </button>
        </div>
      </form>
    </>
  )
}
