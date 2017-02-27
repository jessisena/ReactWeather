var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=imperial&appid=266da1e872607da1168d1ee71a369d95';
//266da1e872607da1168d1ee71a369d95

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res);
      if (res.data.cod !== "200") {
        throw new Error(res.data.message);
      } else {
        return res.data.list[0].main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
