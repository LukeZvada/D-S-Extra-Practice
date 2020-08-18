export const business = (BusinessObj) => { 
    return `
        <section class="business--Card"> 
            <h2 class="business--Name"> ${BusinessObj.companyName} </h2> 
                <div class="business--Street"> ${BusinessObj.addressFullStreet} </div>
                <div class="business--CityState"> ${BusinessObj.addressCity}, ${BusinessObj.addressStateCode} ${BusinessObj.addressZipCode}</div> 
        </section>
    `
}

export const nycBusiness = (BusinessObj) => { 
    return `
        <section class="business--newyork"> 
            <h2 class="business--Name"> ${BusinessObj.companyName} </h2> 
                <div class="business--Street"> ${BusinessObj.addressFullStreet} </div>
                <div class="business--CityState"> ${BusinessObj.addressCity}, ${BusinessObj.addressStateCode} ${BusinessObj.addressZipCode}</div> 
        </section>
    `
}

export const manufacturingBusiness = (BusinessObj) => { 
    return `
        <section class="business--manufacturing"> 
            <h2 class="business--Name"> ${BusinessObj.companyName} </h2> 
                <div class="business--Street"> ${BusinessObj.addressFullStreet} </div>
                <div class="business--CityState"> ${BusinessObj.addressCity}, ${BusinessObj.addressStateCode} ${BusinessObj.addressZipCode}</div> 
        </section>
    `
}

export const agentHTML = (agentObj) => {
    return ` 
    <section class="agent__list">
        <h2 class="agent__title">${agentObj.purchasingAgent.nameFirst} ${agentObj.purchasingAgent.nameLast}</h2>
        <div class="agent__company">${agentObj.purchasingAgent.company}</div>
        <div class="agent__phone">${agentObj.purchasingAgent.phoneNumber} </div>
    </section>
    `
}