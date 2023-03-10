import { getVenues } from "./database.js"
import { venueHtml } from "./venues.js"
import { bandsHtml } from "./bands.js"
import { bookingHtml } from "./bookings.js"
import { getBookings } from "./database.js"
const bookings = getBookings()

const mainContainer = document.querySelector("#container")

const promoGen = `
    <h1 class="titles">Ducarte' Promotions</h1>
<article class="marquee">
    <section class="detail--column list details__bookings">
        <h2 class="subtitle">Upcoming Shows</h2>
        ${bookingHtml(bookings)}
    </section>
  </article>  
<article class="details">
    <section class="detail--column list details__venues">
        <h2 class="subtitle">Music Venues</h2>
        ${venueHtml()}
    </section>
    <section class="detail--column list details__bands">
        <h2 class="subtitle">Bands</h2>
       ${bandsHtml()}
    </section>
</article>
`
mainContainer.innerHTML = promoGen