import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()

export const bandsHtml =() => {
    let banHtml="<ul class=bandList>"

    for (let band of bands){
        banHtml += `<li id="band.${band.id}">${band.name}</li>`
    }
    banHtml += `</ul>`
    return banHtml
}

document.addEventListener("click",(clickEvent)=>{

    const clickedItem = clickEvent.target

    //if the item clas starts with booking then do this
    //(itemClicked.id.startsWith("walker"))
    if(clickedItem.id.startsWith("band")){
        //split the class with the . separater
        const [,bandId] = clickedItem.id.split(".")
            let bandVenues = ""
            for(let booked of getBookings()){

                for(let band of booked.bandID){
                    if (band === parseInt(bandId)){
                        for(let venue of getVenues()){
                            if(venue.id===booked.venueID){
                                if (bandVenues.length === 0){
                                    bandVenues += `${venue.name}`
                                }
                                else{
                                    bandVenues += ` and ${venue.name}`
                                }
                            }
                        }
                    }

                }    
            }
            window.alert(bandVenues)
    }   

})