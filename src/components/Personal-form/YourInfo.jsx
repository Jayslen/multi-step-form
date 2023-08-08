import { useId, useState } from 'react'
import { useUserData } from '../../hooks/useUserData'
import { Text } from '../SectionDescription'

export function YourInfo({ nextStep }) {
  const nameId = useId()
  const emailId = useId()
  const phoneNumberId = useId()
  const [isFirstRender, setIsFirstRender] = useState(true)
  const { userData, updateUserData } = useUserData()

  const handleSubmit = (e) => {
    setIsFirstRender(false)
    updateUserData({ event: e, moveNextStep: nextStep })
  }
  return (
    <>
      <Text
        title={'Personale Info'}
        text={'Please Provide your name, email address and phone number.'}
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="input-div">
          <label htmlFor={nameId} className="label">
            Name
          </label>
          <input
            type="text"
            required
            maxLength={15}
            minLength={4}
            name="userName"
            defaultValue={userData?.userName ?? ''}
            id={nameId}
            className={`input ${
              !isFirstRender
                ? 'invalid:border-red-400 invalid:bg-red-50 peer'
                : ''
            }`}
            placeholder="e.g.Stephen King"
          />
          <p className="hidden peer-invalid:block text-xs text-red-500">
            Please complete or fix the field.
          </p>
        </div>

        <div className="input-div">
          <label htmlFor={emailId} className="label">
            Email Address
          </label>
          <input
            className={`input ${
              !isFirstRender
                ? 'invalid:border-red-400 invalid:bg-red-50 peer'
                : ''
            }`}
            type="email"
            required
            name="userEmail"
            defaultValue={userData?.userEmail ?? ''}
            id={emailId}
            placeholder="example@gmail.com"
          />
          <p className="hidden peer-invalid:block text-xs text-red-500">
            Please complete or fix the field.
          </p>
        </div>

        <div className="input-div">
          <label htmlFor={phoneNumberId} className="label">
            Phone Number
          </label>
          <input
            type="number"
            required
            name="userNumber"
            defaultValue={userData?.userNumber ?? ''}
            id={phoneNumberId}
            placeholder="8092422541"
            className={`input ${
              !isFirstRender
                ? 'invalid:border-red-400 invalid:bg-red-50 peer'
                : ''
            }`}
          />
          <p className="hidden peer-invalid:block text-xs text-red-500">
            Please complete or fix the field.
          </p>
        </div>
        <button className="nextBtn">Next Step</button>
      </form>
    </>
  )
}
