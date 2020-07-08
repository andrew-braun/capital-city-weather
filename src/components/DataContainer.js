import React from "react";

const DataContainer = ({ countryList }) => {
    const capitalArray = Object.entries(countryList).map(([key, value], i) => {
        return (
                <tr key={key} className="table-row">
                    <td className="city-entry">
                        {value.city}
                    </td>
                    <td className="country-entry">
                        {value.country}
                    </td>
                    <td className="continent-entry">
                        {value.continent}
                    </td>
                    <td className="time-entry">
                        {value.time}
                    </td>
                    <td className="temp-entry">
                        {value.temp} C
                    </td>
                    <td className="weather-entry">
                        {value.weather}
                    </td>
                    <td className="humidity-entry">
                        {value.humidity}%
                    </td>
                    <td className="windspeed-entry">
                        {value.windspeed} km/h
                    </td>
                </tr>
            );
    });
    return (
        <article className="data-container">
            <h1>Capitals</h1>
            <table className="data-table">
                <thead className="table-header">
                    <tr>
                        <th>City</th>
                        <th>Country</th>
                        <th>Continent</th>
                        <th>Time</th>
                        <th>Temp</th>
                        <th>Weather</th>
                        <th>Humidity</th>
                        <th>Windspeed</th>
                    </tr>
                </thead>
                <tbody>
                    {capitalArray}
                </tbody>
            </table>
        </article>
    )
}

export default DataContainer;