import { useBusiness } from "./BusinessProvider.js";
import { business } from "./Business.js";
import { filterNYBusiness } from "./BusinessProvider.js";

const contentTarget = document.querySelector("#container")

export const businessList = () => { 
    const businessArr = useBusiness()
    contentTarget.innerHTML = "<h1> Active Businesses </h1>"

    businessArr.forEach((bizObj) => {
        contentTarget.innerHTML += business(bizObj)
    });
}

export const NewYorkCompanies = () => { 
    const NYbizArr = filterNYBusiness
    contentTarget.innerHTML += "<h2> New York Companies</h2>"
    
    NYbizArr.forEach((NYBizObj) =>{
        contentTarget.innerHTML += business(NYBizObj)

    })
}