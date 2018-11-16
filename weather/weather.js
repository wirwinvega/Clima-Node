const axios = require('axios');
const { WEATHERMAP_API_URL, WEATHERMAP_API_KEY } = require('../config/constants');

const getWeather = async(lat, lng) => {
    let response = await axios.get(`${WEATHERMAP_API_URL}/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${WEATHERMAP_API_KEY}`);
    let statusCode = response.status;
    if (statusCode != 200) {
        throw new Error(`Código de error en weathermap api ${statusCode}.`);
    }

    let data = response.data;
    return data;

}

module.exports = {
    getWeather
}