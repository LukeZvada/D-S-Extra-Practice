export const business = (BusinessObj) => { 
    return `
        <section> 
            <h2> ${BusinessObj.companyName}</h2> 
                <div> ${BusinessObj.addressFullStreet} </div>
                <div> ${BusinessObj.City}, ${BusinessObj.addressStateCode} ${BusinessObj.addressZipcode}</div> 
        </section>
    `
}