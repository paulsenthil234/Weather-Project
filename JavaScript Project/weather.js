function checkWeather(){
    let city = document.getElementById("city");
    let temperatureInCelsius = document.getElementById("tempCelsius");
    let temperatureInFarenheit = document.getElementById("tempFarenheit");
    let feelsLike = document.getElementById("feelsLike");
    let country = document.getElementById("country");
    let pressure = document.getElementById("pressure");
    let humidity = document.getElementById("humidity");
    let windSpeed = document.getElementById("windSpeed");
    let windGust = document.getElementById("windGust");
    let cloud = document.getElementById("cloud");
    let seaLevel = document.getElementById("seaLevel");
    let windDirection = document.getElementById("windDegree");
    let groundLevel = document.getElementById("groundLevel");
    let cityTo = document.getElementById("searchInput").value;
    let degree = document.getElementById("degree");
    function windDirect(val){
        if((val>=0)&&(val<=90))
            return "North-East";
        else if((val>90)&&(val<=180))
            return "North-West";
        else if((val>180)&&(val<=270))
            return "South-West";
        else
            return "South-East";
    }
    // console.log(cityTo);
    let urls = "https://api.openweathermap.org/data/2.5/weather?q="+cityTo+"&appid=dbd118f426a71be39e8f315552bc477c";
    fetch(urls).then((res1=>res1.json()))
    .then((res2)=>{
                    city.innerHTML=res2.name;
                    temperatureInCelsius.innerHTML = "Temp(C):"+" "+Math.ceil((res2.main.temp-273.15))+"°"+"C";
                    degree.innerHTML = Math.ceil((res2.main.temp-273.15))+"°"+"C";
                    temperatureInFarenheit.innerHTML = "Temp(F):"+" "+Math.ceil((((res2.main.temp-273.15)*(9/5))+32))+"°"+"F";
                    feelsLike.innerHTML = "Feels Like:"+" "+Math.ceil((res2.main.feels_like-273.15))+"°"+"C";
                    country.innerHTML = " "+res2.sys.country;
                    pressure.innerHTML = "Pressure:"+" "+res2.main.pressure+"mb";
                    humidity.innerHTML = "Humidity:"+" "+res2.main.humidity+"%";
                    windSpeed.innerHTML = "Wind Speed:"+" "+(res2.wind.speed*2)+"kmph";
                    windGust.innerHTML = "Wind Gust:"+" "+res2.wind.gust+"knots";
                    cloud.innerHTML = "Cloud Cover:"+" "+res2.weather[0].description;
                    seaLevel.innerHTML = "Sea Level:"+" "+res2.main.sea_level+"MSL";
                    windDirection.innerHTML = "Wind Direction:"+" "+windDirect(res2.wind.deg);
                    groundLevel.innerHTML = "Ground Level:"+" "+res2.main.grnd_level+"AGL";
                    console.log(res2);
                });

}