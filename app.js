const { argv } = require('./config/yargs');
const { getLocationPlace } = require('./place/place');
const { getWeather } = require('./weather/weather');

const getWeatherInfo = async(address) => {
    try {
        let location = await getLocationPlace(address);
        let weather = await getWeather(location.lat, location.lng);

        return `La temperatura de ${location.address} es de ${weather.main.temp}`;

    } catch (e) {
        return `No due posible obtener el clima de ${address}`;
    }

}

getWeatherInfo(argv.address)
    .then(rs => {
        console.log(rs);
    })
    .catch(e => console.log(e));