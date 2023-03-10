const database ={
    bands:[
        {
            id: 1,
            name:"GreenCard",
            members: 4,
            genre: "punk-emo",
            founded: 2035
        },
        {
            id: 2,
            name:"Knotty Rope",
            members: 1,
            genre: "House",
            founded: 2029
        },
        {
            id: 3,
            name:"Rocker Mom",
            members: 6,
            genre: "Screamo",
            founded: 2032
        },
        {
            id: 4,
            name:"Girls Like Girls <3 Chocolate",
            members: 12,
            genre: "K-Pop",
            founded: 2034
        },
        {
            id: 5,
            name:"Mrs. Crocker",
            members: 2,
            genre: "Rap-Rock",
            founded: 2031
        }
    ],
    venues:[
        {
            id:1,
            name: "dne-eht",
            address:"78 Catherine Drive, Valparaiso, IN 46383",
            sqFt: 7500,
            maxOccupancy: 400
        },
        {
            id:2,
            name: "The Cave",
            address:"9142 El Dorado Rd. Sugar Land, TX 77478",
            sqFt: 2800,
            maxOccupancy: 185
        },
        {
            id:3,
            name: "Crooked Cat",
            address:"7709 River St. Alexandria, VA 22304",
            sqFt: 5000,
            maxOccupancy: 332
        },
        {
            id:4,
            name: "Brok N String",
            address:"1 E. Rosewood Drive, Jersey City, NJ 07302",
            sqFt: 10500,
            maxOccupancy: 700
        },
        {
            id:5,
            name: "The Boulevard",
            address:"49 Hawthorne BLVD, Beachwood, OH 44122",
            sqFt: 9400,
            maxOccupancy: 626
        },
    ],
    bookings:[
        {
            id:1,
            bandID:[ 1, 3],
            venueID: 2,
            showtime: "9/30/2036"
        },
        {
            id:2,
            bandID:[ 5,2],
            venueID: 5,
            showtime: "10/12/2036"
        },
        {
            id:3,
            bandID:[ 4,2],
            venueID: 4,
            showtime: "12/23/2036"
        },
        {
            id:4,
            bandID:[ 1,5],
            venueID: 3,
            showtime: "2/14/2037"
        },
        {
            id:5,
            bandID:[ 3,4],
            venueID: 1,
            showtime: "9/10/2036"
        }
    ]
}

export const getBands = () =>{
    return database.bands.map(bands => ({...bands}))
}
export const getVenues = () =>{
    return database.venues.map(venues => ({...venues}))
}
export const getBookings = () =>{
    return database.bookings.map(bookings => ({...bookings}))
}