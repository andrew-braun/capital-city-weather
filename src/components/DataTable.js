import React from "react";
import "../styles/DataContainer.css";
import Row from "../components/Row";

const DataTable = ({ geoData }) => {
  const cityRows = Object.entries(geoData).map(([key, value], i) => {
    return <Row rowData={value} rowNumber={i} />;
  });
  return (
    <article className="data-container">
      <h1>Capitals</h1>
      <table className="data-table">
        <thead className="table-header">
          <tr>
            <th className="city-header">City</th>
            <th className="country-header">Country</th>
            <th className="continent-header">Continent</th>
            <th className="date-header">Date</th>
            <th className="time-header">Time</th>
            <th className="temp-header">Temp</th>
            <th className="weather-header">Weather</th>
            <th className="humidity-header">Humidity</th>
            <th className="windspeed-header">Windspeed</th>
          </tr>
        </thead>
        <tbody>{cityRows}</tbody>
      </table>
    </article>
  );
};

export default DataTable;
