import React from "react";

const DataContainer = ({ countryList }) => {
    const capitalArray = Object.entries(countryList).map(([key, value], i) => {
        return (
                <tr key={key} className="table-row">
                    <td className="city-entry">
                        {value.capital}
                    </td>
                    <td className="country-entry">
                        {value.name}
                    </td>
                    <td className="continent-entry">
                        {value.continent.name}
                    </td>
                    <td className="time-entry">
                        {value.currentTime}
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
                        <th>Precip</th>
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