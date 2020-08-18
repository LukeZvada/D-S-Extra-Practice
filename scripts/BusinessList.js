import { useBusiness } from "./BusinessProvider.js";
import { business, nycBusiness, manufacturingBusiness, agentHTML } from "./Business.js";
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
    
    NYbizArr.forEach((NYBizObj) => {
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
        contentTarget.innerHTML += agentHTML(agentObj)
    })
}


const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
           const bizArray = useBusiness()
           const searchValue = keyPressEvent.target.value.toLowerCase()
           
           return (firstName.includes(searchValue) || lastName.includes(searchValue))
        }
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            const foundBusiness = // implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    );