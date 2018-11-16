const argv = require('yargs').options({
    "address": {
        alias: 'd',
        description: 'Lugar donde se buscara el clima ejemplo: "Ciudad de México"',
        demand: true
    }
}).argv;

module.exports = {
    argv
}