import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues()


export const venueHtml =() => {
    let venHtml="<ul class=venues>"

    for (let venue of venues){
        venHtml += `<li id="venue.${venue.id}">${venue.name}</li>`
    }
    venHtml += `</ul>`
    return venHtml
}


document.addEventListener("click",(clickEvent)=>{

    const clickedItem = clickEvent.target

    //if the item clas starts with booking then do this
    //(itemClicked.id.startsWith("walker"))
    if(clickedItem.id.startsWith("venue")){
        //split the class with the . separater
        const [,venueId] = clickedItem.id.split(".")
            let scheduledBands = ""
            for(let booked of getBookings()){//get each individual booking
                if(booked.venueID ===parseInt(venueId)){//check venue id against the parsed id,  
                    for (let id of booked.bandID){//if true, loop into the booked bandID array
                        for(let band of getBands()){//get into the band objects
                            if(id === band.id ){//check if the id we got from the bandID array is equal to our band id property
                                if(scheduledBands.length === 0){//check is our string empty if so just add the band
                                    scheduledBands += `${band.name}`
                                }
                                else{//if the string is not empty the lets add the second band.
                                    scheduledBands += ` and ${band.name} are playing here.`
                                }
                            }
                        }
                    }   
                }
            }
            window.alert(scheduledBands)
    }
})