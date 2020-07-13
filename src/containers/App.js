import React, { Component } from "react";
import "../styles/App.css";
import "../styles/DataContainer.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataContainer from "../components/DataContainer";
import DataTable from "../components/DataTable";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: [{city: "Kabul"}],
      searchfield: "",
    };
  }

  // Import list of countries and city names
  componentDidMount() {
    // Async API call returning object with country data
    (async () => {
      // return only capitals of world cities
      const cityWhere = encodeURIComponent(
        JSON.stringify({
          isCapital: true,
        })
      );

      // Fetch list of capital cities
      const cityResponse = await fetch(
        `https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=10&include=country,country.continent&keys=name,country,country.name,country.capital,country.continent,country.continent.name,population,location,cityId,adminCode&where=${cityWhere}`,
        {
          headers: {
            "X-Parse-Application-Id":
              "KFsBDbVFGZ9WYkvFSkoyRJoFU4ORIL1sv563IDSU", // This is your app's application id
            "X-Parse-REST-API-Key": "d6cXuIVw0c1O2nqLfsdFyaLrMnEJ4XFE3E2GK7x0", // This is your app's REST API key
          },
        }
      );

      const cityResults = await cityResponse.json(); // Here you have the data that you need
      const cityData = cityResults.results;
      // console.log(JSON.stringify(cityData, null, 2));

      const cleanCityData = Object.entries(cityData).map(([key, value]) => {
        return {
          city: value.name,
          cityGeoNameId: value.cityId,
          country: value.country.name,
          countryGeoNameId: value.country.objectId,
          continent: value.country.continent.name,
          latitude: value.location.latitude,
          longitude: value.location.longitude,
          timezone: "",
          time: "",
          date: "",
          temp: undefined,
          weather: "",
          humidity: undefined,
          windspeed: undefined,
        };
      });

      await this.setState({
        cities: cleanCityData,
      });

      for (let city of cleanCityData) {
        const weatherResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=13ee2a5d09316b306b5e506d3ff09c42&units=metric`
        );
        const weatherData = await weatherResponse.json();
        const timezoneResponse = await fetch(
          `http://api.geonames.org/timezoneJSON?lat=${city.latitude}&lng=${city.longitude}&username=abdev`
        );
        const timezoneData = await timezoneResponse.json();

        // console.log(weatherData);

        city.timezone = timezoneData.timezoneId;
        city.time = timezoneData.time.slice(11);
        city.date = timezoneData.time.slice(5,10);
        await this.setState({
          cities: cleanCityData,
        });
        city.temp = weatherData.main.temp;
        await this.setState({
          cities: cleanCityData,
        });
        city.weather = weatherData.weather[0].main;
        await this.setState({
          cities: cleanCityData,
        });
        city.humidity = weatherData.main.humidity;
        await this.setState({
          cities: cleanCityData,
        });
        city.windspeed = weatherData.wind.speed;
        await this.setState({
          cities: cleanCityData,
        });
      }

      // console.log(cleanCityData);

      await this.setState({
        cities: cleanCityData,
      });
      
      console.log(typeof(cleanCityData[0].temp));
    })();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const searchedCities = this.state.cities.filter((city) => {
        if (city.city !== undefined) {
          return ( 
            city.city.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            city.country.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||          
            city.continent.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            city.weather.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            city.time.includes(this.state.searchfield) ||
            city.date.includes(this.state.searchfield) ||
            (city.temp).toString().includes(this.state.searchfield) ||
            (city.humidity).toString().includes(this.state.searchfield) ||
            (city.windspeed).toString().includes(this.state.searchfield)
          )
        } else {
          return (city)
        }
    });
    return (
      <div className="App">
        <Header />
        <main className="main-container">
          <SearchBox searchChange={this.onSearchChange} />
          <DataTable geoData={searchedCities} />
          <DataContainer countryList={this.state.cities} />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
