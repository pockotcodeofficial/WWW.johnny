let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=36.8679054&";
let lon = "lon=42.9488574&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=e51ee88d1afc10c2b810f56d6b33f4b6";
let file = queryUrl +lat + lon + apiOptions + apiKey;

fetch(file).then((response)=> response.json()).then((data)=>{
    let main = data.current.weather[0].main;
    let description = data.current.weather[0].description;
    let  temp = Math.round(data.current.temp);
    let pressure = data.current.pressure;
    let humidity = data.current.humidity;
    let name = "Duhok"
    document.getElementById("wrapper-description").innerHTML = description;
    document.getElementById("wrapper-temp").innerHTML = temp + "°C";
    document.getElementById("wrapper-pressure").innerHTML = pressure;
    document.getElementById("wrapper-humidity").innerHTML = humidity+ "°C";
    document.getElementById("wrapper-name").innerHTML = name;

    let hourNow = data.hourly[0].temp;
    let hour1 = data.hourly[1].temp;
    let hour2 = data.hourly[2].temp;
    let hour3 = data.hourly[3].temp;
    let hour4 = data.hourly[4].temp;
    let hour5 = data.hourly[5].temp;
    document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
    document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
    document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
    document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
    document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
    document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";

    let timenow = new Date().getHours();
    let time1 = timenow + 1;
    let time2 = time1 + 1;
    let time3 = time2+ 1;
    let time4 = time3 + 1;
    let time5 = time4 + 1;
    document.getElementById("wrapper-time1").innerHTML = time1;
    document.getElementById("wrapper-time2").innerHTML = time2;
    document.getElementById("wrapper-time3").innerHTML = time3;
    document.getElementById("wrapper-time4").innerHTML = time4;
    document.getElementById("wrapper-time5").innerHTML = time5;

    let  tomorrowTemp = Math.round(data.daily[0].temp.day);
    let  dATTemp = Math.round(data.daily[1].temp.day);
    let tomorrowMain = data.daily[0].weather[0].main;
    let dATTempMain = data.daily[1].weather[0].main;

    document.getElementById("wrapper-forecast-temp-today").innerHTML = temp + "°";
    document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML = tomorrowTemp + "°";
    document.getElementById("wrapper-forecast-temp-dAT").innerHTML = dATTemp + "°";


    let iconBaseUrl = "http://openweathermap.org/img/wn/";
    let iconFormat = ".png";

    let iconCodeToday = data.current.weather[0].icon;
    let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
    document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

    let iconCodeTomorrow = data.daily[0].weather[0].icon;
    let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
    document.getElementById("wrapper-icon-tomorrow").src = iconFullyUrlTomorrow;

    let iconCodeDAT = data.daily[1].weather[0].icon;
    let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
    document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

    let iconHourNow = data.hourly[0].weather[0].icon;
    let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
    document.getElementById("wrapper-icon-hour-now").src = iconFullyUrlHourNow;

    let iconHour1 = data.hourly[1].weather[0].icon;
    let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
    document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

    let iconHour2 = data.hourly[2].weather[0].icon;
    let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
    document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour2;

    let iconHour3 = data.hourly[3].weather[0].icon;
    let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
    document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

    let iconHour4 = data.hourly[4].weather[0].icon;
    let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
    document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;

    let iconHour5 = data.hourly[5].weather[0].icon;
    let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
    document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;
    switch(main){
        case "Snow":
            document.getElementById("wrapper-bg").style.backgroundImage = "url(snow.gif)";
            break;
        case "Clouds":
            document.getElementById("wrapper-bg").style.backgroundImage = "url(clouds.gif)";
            break;
        case "Fog":
                document.getElementById("wrapper-bg").style.backgroundImage = "url(fog.gif)";
                break;
                
        case "Rain":
                document.getElementById("wrapper-bg").style.backgroundImage = "url(rain.gif)";
                break;
        case "Clear":
                document.getElementById("wrapper-bg").style.backgroundImage = "url(clear.gif)";
                break;
        case "Thunderstorm":
                document.getElementById("wrapper-bg").style.backgroundImage = "url(thunderstorm.gif)";
                break;
        default:
                document.getElementById("wrapper-bg").style.backgroundImage = "url(clear.gif)";
                break;           
    }
});
