import { useBusiness } from "./BusinessProvider.js";
import { business } from "./Business.js";

const contentTarget = document.querySelector(".container")

const businessList = () => { 
    const businessArr = useBusiness()
    contentTarget.innerHTML = '<h1> Active Businesses </h2>'

    businessArr.forEach((bizObj) => {
        contentTarget.innerHTML = business(bizObj)
    })
}