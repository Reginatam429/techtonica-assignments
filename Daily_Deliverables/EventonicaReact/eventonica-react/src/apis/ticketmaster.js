import axios from 'axios';
const KEY = 'rg59B1BXpFdDzMUZEJAQslbCEJ8gdxYU';

export default axios.create({
    baseURL: 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=382&apikey=',
    params: {
        maxResults: 10,
        key: KEY
    }
})

const tmKey = 'rg59B1BXpFdDzMUZEJAQslbCEJ8gdxYU'; 
  // https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=382&apikey=rg59B1BXpFdDzMUZEJAQslbCEJ8gdxYU