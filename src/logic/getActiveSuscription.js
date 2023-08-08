import plans from '../mocks/suscriptions.json'
export function getSuscription(suscription) {
    let activeSuscription;
    for(let i =0; i < plans.length; i++){
        if(plans[i].suscription === suscription){
            activeSuscription = plans[i]
            return activeSuscription
        }
    }
}