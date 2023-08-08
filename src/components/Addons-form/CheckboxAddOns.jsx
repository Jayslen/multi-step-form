import { useState } from 'react'
import { useUserData } from '../../hooks/useUserData'
import { PAYMENT_MONTHLY } from '../../const/billing'
export function CheckBoxs({ data }) {
  const { userData } = useUserData()
  const [isSelected, setIsSelected] = useState(false)
  const price =
    userData.billing === PAYMENT_MONTHLY
      ? data.price.monthly
      : data.price.yearly

  return (
    <div
      className={`bg-white relative py-4 px-6 flex justify-between items-center rounded-md border border-gray-200 hover:border-purple-700  ${
        isSelected ? 'border border-purple-500 bg-[#f8f9fe]' : ''
      }`}
    >
      <div className="flex gap-6">
        <input
          type="checkbox"
          name={data.id}
          className="w-5"
          id={data.id}
          value={price}
          defaultChecked={userData[data.id]}
          onChange={(e) => {
            setIsSelected(e.target.checked)
          }}
        />
        <div>
          <h3 className="font-bold text-[#001e4c]">{data.benefit}</h3>
          <p className="text-[#9699ab] text-sm">{data.description}</p>
        </div>
      </div>
      <span>{price}$</span>
      <label
        htmlFor={data.id}
        className="absolute top-0 w-full h-full opacity-0 cursor-pointer"
      ></label>
    </div>
  )
}
