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
  // Import list of countries with capital city data
  componentDidMount() {
    (async () => {
      const response = await fetch(
        'https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=350&order=name&include=continent&excludeKeys=phone,native,currency,shape',
        {
          headers: {
            'X-Parse-Application-Id': 'KFsBDbVFGZ9WYkvFSkoyRJoFU4ORIL1sv563IDSU', // This is your app's application id
            'X-Parse-REST-API-Key': 'd6cXuIVw0c1O2nqLfsdFyaLrMnEJ4XFE3E2GK7x0', // This is your app's REST API key
          }
        }
      );
      const rawResponse = await response.json();
      const data = rawResponse.results;

      await this.setState({ 
        countries: data
      })
      // console.log(JSON.stringify(data, null, 2));
      console.log(this.state.countries);

      let capitalArray = this.state.countries.map(entry => {
        return ([entry.capital, entry.name])
      });
      console.log(capitalArray);

      
    })();

  };

  
  render() {

    return (
      <div className="App">
        <Header />
        <main className="main-container">
          <DataContainer countryList={this.state.countries}/>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;