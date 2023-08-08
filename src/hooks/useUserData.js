import { useContext } from 'react'
import { UserDataContext } from '../context/DataContext'
import { PAYMENT_MONTHLY, PAYMENT_YEARLY } from '../const/billing'
import { getSuscription } from '../logic/getActiveSuscription'
import { getSingleAddOn } from '../logic/getAddonsActive'

export function useUserData() {
    const {userData, setUserData} = useContext(UserDataContext)
    const updateUserData = ({event, moveNextStep}) => {
        event.preventDefault()
        const data = Object.fromEntries(
          new FormData(event.target)
        )
        setUserData((prev) => {
          return {
              ...prev,
            ...data,
          }
        })
        for(const obj in data ) {
          if(!data[obj]) return
        }
        moveNextStep()
    }

    const updateRadiosForm = ({event, moveNextStep, updateError}) => {
        event.preventDefault()
        const data = Object.fromEntries(
          new FormData(event.target)
        )
        if(data.hasOwnProperty('plan')) {
          setUserData((prev) => {
            return {
                ...prev,
                ...JSON.parse(data.plan),
            }
          })
          updateError(false)
        } else {
          updateError(true)
          return
        }
        
        moveNextStep()
    }

    const changePaymentTime = () => {
    const activePlan = getSuscription(userData.plan)
      getSingleAddOn('larger_storage', userData.billing)
    const largeStoragePrice = getSingleAddOn('larger_storage', userData.billing)
    const onlineServicePrice = getSingleAddOn('online_service', userData.billing)
    const customizableProfilePrice = getSingleAddOn('customizable_profile', userData.billing)

      setUserData((prev) => {
        return {
          ...prev,
          billing : prev.billing === PAYMENT_MONTHLY ? PAYMENT_YEARLY : PAYMENT_MONTHLY,
          planPrice:  prev.billing === PAYMENT_MONTHLY ? activePlan.price.yearly : activePlan.price.monthly,
          larger_storage: prev?.larger_storage ? largeStoragePrice : null,
          online_service: prev?.online_service ? onlineServicePrice : null,
          customizable_profile: prev?.customizable_profile ?  customizableProfilePrice : null
        }
      })
    }
    return { userData, updateUserData , updateRadiosForm, changePaymentTime }
}