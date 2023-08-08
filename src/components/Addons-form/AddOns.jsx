import { useUserData } from '../../hooks/useUserData'
import addOns from '../../mocks/add-ons.json'
import { Text } from '../SectionDescription'
import { CheckBoxs } from './CheckboxAddOns'

export function AddOns({ prevStep, nextStep }) {
  const { updateUserData } = useUserData()
  const handleSubmit = (e) => {
    updateUserData({ event: e, moveNextStep: nextStep })
  }
  return (
    <>
      <Text
        title={'Pick add-ons'}
        text={'Add-ons help enhance your gaming experience.'}
      />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {addOns.map((data, index) => {
          return <CheckBoxs data={data} key={index} />
        })}
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
      </form>
    </>
  )
}
