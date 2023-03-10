import { getBookings } from "./database.js";
import { getVenues } from "./database.js";
import { getBands } from "./database.js";
const bookings = getBookings()
const venues = getVenues()
const Bands =getBands()

export const bookingHtml =(booking) => {
    let bookHtml="<ul class=bookings>"

    for (let promo of booking){
        for (let bookedBands of promo.bandID){
            for(let band of Bands){
                if(bookedBands === band.id){
                bookHtml +=`<li id="booking.${band.id}">${band.name} is playing at `
                    for(let venue of venues){
                    if(promo.venueID === venue.id){
                    bookHtml += `${venue.name} on ${promo.showtime}</li>`
                    }}
                }
                //
                    
                //}
        
            }
        }    
    }
    bookHtml += `</ul>`
    return bookHtml
}

document.addEventListener("click",(clickEvent)=>{

    const clickedItem = clickEvent.target

    //if the item clas starts with booking then do this
    //(itemClicked.id.startsWith("walker"))
    if(clickedItem.id.startsWith("booking")){
        //split the class with the . separater
        const [,bandId] = clickedItem.id.split(".")

        for (const band of Bands){
            if (band.id === parseInt(bandId))
                window.alert(`
                Band: ${band.name} 
                Members: ${band.members} 
                Genre: ${band.genre} 
                Founded: ${band.founded}`)
        }
    }   

})