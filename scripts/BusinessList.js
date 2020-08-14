import { useBusiness } from "./BusinessProvider.js";
import { business, nycBusiness, manufacturingBusiness } from "./Business.js";
import { filterNYBusiness, filterManufacturingBusiness, purchasingAgent } from "./BusinessProvider.js";

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
        contentTarget.innerHTML += nycBusiness(NYBizObj)

    })
}

export const manufacturingCompanies = () => { 
    const ManbizArr = filterManufacturingBusiness
    contentTarget.innerHTML += "<h3> Manufacturing Companies</h3>"

    ManbizArr.forEach(manufacturingCompaniesObj => { 
        contentTarget.innerHTML += manufacturingBusiness(manufacturingCompaniesObj)
    })
}

export const agent = () => { 
    const agentArr = purchasingAgent
    contentTarget.innerHTML = "<h2> Purchasing Agents </h2> "

    agentArr.forEach(agentObj => {
        contentTarget.innerHTML += business(agentObj)
    })
}