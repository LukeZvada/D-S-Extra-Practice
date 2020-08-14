export const business = (BusinessObj) => { 
    return `
        <section class="businessCard"> 
            <h2 class="businessName" > ${BusinessObj.companyName}</h2> 
                <div class="businessStreet> ${BusinessObj.addressFullStreet} </div>
                <div class="businessCityState> ${BusinessObj.City}, ${BusinessObj.addressStateCode} ${BusinessObj.addressZipcode}</div> 
        </section>
    `
}