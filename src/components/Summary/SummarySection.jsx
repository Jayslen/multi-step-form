import { MONTH, PAYMENT_MONTHLY, YEAR } from '../../const/billing'
import { useUserData } from '../../hooks/useUserData'
import { getAddOns } from '../../logic/getAddonsActive'
import { getAddOnsPrice } from '../../logic/getAddonsActivePrice'
import { Text } from '../SectionDescription'

export function Summary({ prevStep, setStep }) {
  const { userData, changePaymentTime } = useUserData()
  const { billing, plan, planPrice } = userData
  const planPriceLetters = billing === PAYMENT_MONTHLY ? MONTH : YEAR
  const { larger_storage, online_service, customizable_profile } = userData
  const addOns = getAddOns({
    larger_storage,
    online_service,
    customizable_profile,
  })
  const addOnsPrice = getAddOnsPrice({
    larger_storage,
    online_service,
    customizable_profile,
  })
  return (
    <>
      <Text
        title={'Finishing up'}
        text={'Double-check everything looks OK before confirming'}
      />
      <article>
        <ul className="bg-[#f8f9fe] px-4 py-2 rounded">
          <li className="flex flex-col border-b py-4">
            <div className="flex justify-between">
              <h3 className="text-[#001e4c] font-bold text-lg">{`${plan}(${billing})`}</h3>
              <span className="font-bold text-[#001e4c] text-lg">{`$${planPrice}/${planPriceLetters}`}</span>
            </div>
            <span
              className="font-bold text-[#4137d0] hover:underline cursor-pointer"
              onClick={changePaymentTime}
            >
              change
            </span>
          </li>
          {addOns.map((data, index) => {
            return (
              <li className="flex justify-between py-1" key={index}>
                <h3 className="lowercase text-[#818183]">{data.name}</h3>
                <span className="text-[#818183]">{`+$${data.price}/${planPriceLetters}`}</span>
              </li>
            )
          })}
        </ul>
        <div className="flex justify-between px-4 py-2">
          <span className="text-[#818183]">{`Total(per${
            billing === PAYMENT_MONTHLY ? ' month' : ' year'
          })`}</span>
          <span className="text-[#4137d0] font-bold text-lg">{`+$${
            +userData.planPrice + addOnsPrice
          }/${billing === PAYMENT_MONTHLY ? MONTH : YEAR}`}</span>
        </div>
        <div className="flex flex-col-reverse gap-3 md:block">
          <button className="previusBtn" onClick={prevStep}>
            Go Back
          </button>
          <button
            className="nextBtn"
            onClick={() => {
              setStep(null)
            }}
          >
            Confirm
          </button>
        </div>
      </article>
    </>
  )
}
