export function getAddOnsPrice(obj) {
    let price = 0
    for(const keys in obj) {
        if(obj[keys]){
            price += +obj[keys] ;
        }
    }   
    return price
}