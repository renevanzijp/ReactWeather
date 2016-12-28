var axios = require("axios");

const  OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=2e2a91cc2a638ab24022478e985f48a4&units=metric";


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then( function (res) {
            if(res.data.cod && res.data.message) {
                throw new Error(" allmost err: ", "unable to fetch eather");
            } else {
                console.log(res.data);
                return res.data.main.temp;
            }
        }, function (res) {
            console.log("error: "  , res);
            throw new Error("unable to fetch data for this city");
        });
    }
};
