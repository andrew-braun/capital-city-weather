import React from "react";
import "../styles/DataContainer.css";
import Row from "../components/Row";

const DataTable = ({ geoData }) => {
  const cityRows = Object.entries(geoData).map(([key, value], i) => {
    return <Row rowData={value} rowNumber={i} />;
  });
  return (
    <article className="data-container">
      <table className="data-table">
        <thead className="table-header">
          <tr>
            <th key="city-header" className="city-header">City</th>
            <th key="country-header" className="country-header">Country</th>
            <th key="continent-header" className="continent-header">Continent</th>
            <th key="date-header" className="date-header">Date</th>
            <th key="time-header" className="time-header">Time</th>
            <th key="temp-header" className="temp-header">Temp</th>
            <th key="weather-header" className="weather-header">Weather</th>
            <th key="humidity-header" className="humidity-header">Humidity</th>
            <th key="windspeed-header" className="windspeed-header">Windspeed</th>
          </tr>
        </thead>
        <tbody>{cityRows}</tbody>
      </table>
    </article>
  );
};

export default DataTable;
