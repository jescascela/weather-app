const apiKey = "9ee02b14df2e3917196f9f75e9d41087"; /* Put here your own API Key */
        const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();
            // console.log(data);

            if(response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                return false;
            }

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            switch(data.weather[0].main) {
                case "Clouds":
                    weatherIcon.src = "img/clouds.png";
                    break;
                case "Clear":
                    weatherIcon.src = "img/clear.png";
                    break;
                case "Rain":
                    weatherIcon.src = "img/rain.png";
                    break;
                case "Drizzle":
                    weahterIcon.src = "img/drizzle.png";
                    break;
                case "Mist":
                    weatherIcon.src = "img/mist.png";
                    break;
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            return true;
        }

        searchBtn.addEventListener("click", ()=> {
            checkWeather(searchBox.value);
        });