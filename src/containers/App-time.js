import React, { Component } from "react"
import "./App.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import DataContainer from "../components/DataContainer"
import { REACT_APP_APPLICATION_ID, REACT_APP_REST_API_KEY } from "../env.js"

class App extends Component {
	constructor() {
		super()
		this.state = {
			countries: [],
			cities: [],
		}
	}
	// Import list of countries with capital city data
	componentDidMount() {
		;(async () => {
			const response = await fetch(
				"https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=350&order=name&include=continent&excludeKeys=phone,native,currency,shape",
				{
					headers: {
						"X-Parse-Application-Id": REACT_APP_APPLICATION_ID, // This is your app's application id
						"X-Parse-REST-API-Key": REACT_APP_REST_API_KEY, // This is your app's REST API key
					},
				}
			)
			const rawResponse = await response.json()
			const data = rawResponse.results

			await this.setState({
				countries: data,
			})

			for (let entry of data) {
				let city = entry.capital
				console.log(entry.capital)
				;(async () => {
					const where = encodeURIComponent(
						JSON.stringify({
							name: city,
						})
					)
					const response = await fetch(
						`https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=10&include=country&keys=name,country,country.name,country.capital,population,location,cityId,adminCode&where=${where}`,
						{
							headers: {
								"X-Parse-Application-Id": REACT_APP_APPLICATION_ID, // This is your app's application id
								"X-Parse-REST-API-Key": REACT_APP_REST_API_KEY, // This is your app's REST API key
							},
						}
					)
					const rawResponse = await response.json()
					// const results = rawResponse.results;
					console.log(rawResponse)
				})()
			}

			await this.setState({
				countries: data,
			})

			// console.log(JSON.stringify(data, null, 2));
			// console.log(this.state.countries);
		})()
	}

	render() {
		return (
			<div className="App">
				<Header />
				<main className="main-container">
					<DataContainer countryList={this.state.countries} />
				</main>
				<Footer />
			</div>
		)
	}
}
export default App
