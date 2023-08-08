import {
  MONTH,
  PAYMENT_MONTHLY,
  PAYMENT_YEARLY,
  YEAR,
} from '../../const/billing'
import { useUserData } from '../../hooks/useUserData'

export function InputsRadio({ plan, billing, error }) {
  const { userData } = useUserData()
  const payment =
    billing === PAYMENT_MONTHLY ? plan.price.monthly : plan.price.yearly
  const paymentTime =
    billing === PAYMENT_MONTHLY ? PAYMENT_MONTHLY : PAYMENT_YEARLY

  return (
    <div>
      <input
        type="radio"
        name="plan"
        defaultChecked={userData?.plan === plan.suscription ? true : false}
        value={JSON.stringify({
          plan: plan.suscription,
          planPrice: payment,
          billing: paymentTime,
        })}
        id={plan.id}
        className="peer"
        hidden
      />
      <label
        htmlFor={plan.id}
        className={`w-full h-full rounded-md border peer-checked:border-purple-500 peer-checked:bg-gray-100 hover:border-purple-500 cursor-pointer flex flex-row items-center gap-4 md:items-start md:gap-0 md:flex-col md:justify-between px-3 py-4 ${
          error ? 'border-red-400 bg-red-50' : ''
        }`}
      >
        <img src={plan.icon} alt="icon" className="w-10" />
        <div className="flex flex-col">
          <span>{plan.suscription}</span>
          <span className="text-sm text-gray-500">
            ${payment}/{billing === PAYMENT_MONTHLY ? MONTH : YEAR}
          </span>
        </div>
      </label>
    </div>
  )
}
