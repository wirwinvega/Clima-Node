const axios = require('axios');
const { GET_GOOGLE_GEOCODING_URL } = require('../config/constants');

const getLocationPlace = async(address) => {
    let response = await axios.get(GET_GOOGLE_GEOCODING_URL(encodeURI(address)));
    let statusCode = response.status;
    switch (statusCode) {
        case 200:
            let data = response.data;

            if (data.status === 'ZERO_RESULTS') {
                throw new Error(`No se encontraron resultados para ${address}`);
            }

            let result = data.results[0];
            let location = result.geometry.location;

            return {
                'address': result.formatted_address,
                'lat': location.lat,
                'lng': location.lng
            };
        default:
            throw new Error(`Código de error ${statusCode}.`);
            break;
    }
}

module.exports = {
    getLocationPlace
}