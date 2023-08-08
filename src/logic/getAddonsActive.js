import { PAYMENT_MONTHLY } from '../const/billing'
import addonsPrices from '../mocks/add-ons.json'

export function getAddOns(obj) {
    const addOns = []
    for(const keys in obj) {
        if(obj[keys]){
            addOns.push({name: keys.replace('_', ' '), price: obj[keys]})
        } 
    }   
    return addOns
}

export const getSingleAddOn= (id, billing) =>{
    for(const keys of addonsPrices) {
      if(keys.id === id){
        return billing === PAYMENT_MONTHLY ? keys.price.yearly : keys.price.monthly
      }
    }
  }