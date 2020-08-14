export const business = (BusinessObj) => { 
    return `
        <section class="business--Card"> 
            <h2 class="business--Name"> ${BusinessObj.companyName} </h2> 
                <div class="business--Street"> ${BusinessObj.addressFullStreet} </div>
                <div class="business--CityState"> ${BusinessObj.addressCity}, ${BusinessObj.addressStateCode} ${BusinessObj.addressZipCode}</div> 
        </section>
    `
}