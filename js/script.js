let weather ={
    apiKey : "ce59354fcaec386eaa8ac95fd28d1a76",
    fetchWeather:function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=ce59354fcaec386eaa8ac95fd28d1a76")
            .then(r => r.json() )
            .then(data => this.displayWeather(data))
    },
    displayWeather:function (data) {
        // name of the city
        const {name} = data;
        const {icon , description} = data.weather[0]
        const {temp , humidity} = data.main
        const {speed} = data.wind
        $(".city").text("Weather in "+name)
        $(".temp").text(temp + "℃")
        $(".icon").attr("src","https://openweathermap.org/img/wn/"+icon+".png")
        $(".description").text(description)
        $(".humidity").text("Humidity: "+humidity+"%")
        $(".wind").text("Wind speed: "+ speed + " km/h")
        $(".weather").removeClass("loading")
    },
    search: function () {
        let city = $(".search-bar").val()
        this.fetchWeather(city)
    }
}

$(".search button").on("click", function (e) {
    weather.search();
})
$(".search button").on("keyup", function (e) {
    if(e.key == "Enter"){
        weather.search();
    }
})
weather.fetchWeather("Hanoi")