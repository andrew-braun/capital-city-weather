import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataContainer from "../components/DataContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      cities: []
    }
  };

  // Import list of countries and city names
  componentDidMount() {
    // Async API call returning object with country data
    (async () => {
      // return only capitals of world cities
      const cityWhere = encodeURIComponent(JSON.stringify({
        "isCapital": true
      }));

      // Fetch list of capital cities
      const cityResponse = await fetch(
        `https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=20&include=country,country.continent&keys=name,country,country.name,country.capital,country.continent,country.continent.name,population,location,cityId,adminCode&where=${cityWhere}`,
        {
          headers: {
            'X-Parse-Application-Id': 'KFsBDbVFGZ9WYkvFSkoyRJoFU4ORIL1sv563IDSU', // This is your app's application id
            'X-Parse-REST-API-Key': 'd6cXuIVw0c1O2nqLfsdFyaLrMnEJ4XFE3E2GK7x0', // This is your app's REST API key
          }
        }
      );
  
      const cityResults = await cityResponse.json(); // Here you have the data that you need
      const cityData = cityResults.results;
      console.log(JSON.stringify(cityData, null, 2));

      const cleanCityData = Object.entries(cityData).map(([key, value]) => {
        return (
          {
            "city": value.name,
            "cityGeoNameId": value.cityId,
            "country": value.country.name,
            "countryGeoNameId": value.country.objectId,
            "continent": value.country.continent.name,
            "latitude": value.location.latitude,
            "longitude": value.location.longitude,

          }
        )
      })

      await this.setState({
        cities: cleanCityData
      })

      console.log(cleanCityData);

      for (let city of cleanCityData) {
        const timezoneResponse = await fetch(`http://api.geonames.org/timezoneJSON?formatted=true&lat=${cleanCityData.latitude}&lng=${cleanCityData.longitude}&username=abdev`);
        const timezoneData = await timezoneResponse.json();
        
        cleanCityData.timezone = timezoneData.timezoneId;
        cleanCityData.time = timezoneData.time;
      }

      // await this.setState({
      //   cities: cleanCityData
      // })
    
    })();

  };

  
  render() {

    return (
      <div className="App">
        <Header />
        <main className="main-container">
          <DataContainer countryList={this.state.cities}/>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
