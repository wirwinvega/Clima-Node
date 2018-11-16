const GOOGLE_API_KEY = 'REPLACE WITH YOUR OWN GOOGLE API KEY';

const GET_GOOGLE_GEOCODING_URL = (address) => `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`;

const WEATHERMAP_API_URL = 'https://api.openweathermap.org'
const WEATHERMAP_API_KEY = 'REPLACE WITH YOUR OWN WEATHER API KEY';

module.exports = {
    GET_GOOGLE_GEOCODING_URL,
    WEATHERMAP_API_URL,
    WEATHERMAP_API_KEY
}