const axios = require('axios');

const callMock = require('./callMock');

function cityWeather(city) {
    if (!city || city == '') return 'String is empty'
    if (!typeof(city) == 'string') return 'not a string'

    const City = toLowerCase(city)
    City.replace(new RegExp(/( )/g), '')
    
    return new Promise((resolve, reject) => {
        // axios.get(`https://example.com/data/2.5/weather?city=${City}`)
        axios.get(callMock, {params: {city: City}})
            .then(function (res) {
                if (res.code == 200) {
                    resolve(res.data.main);
                } else {
                    reject(res.data.message);
                }
            }).catch(function (error) {
                reject(error);
            });
    });
}

module.exports = {
    cityWeather
};