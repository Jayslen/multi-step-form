import { PAYMENT_MONTHLY, PAYMENT_YEARLY } from '../../const/billing'
import { useUserData } from '../../hooks/useUserData'
export function InputBilling({ handleBilling, billing }) {
  const { userData } = useUserData()
  return (
    <div className="bg-gray-100 rounded-sm flex justify-center md:px-2 md:py-4 p-2 gap-4 ">
      <span>Monthly</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          defaultChecked={userData?.billing === PAYMENT_YEARLY ?? false}
          onClick={handleBilling}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
      </label>
      <span>Yearly</span>
    </div>
  )
}
