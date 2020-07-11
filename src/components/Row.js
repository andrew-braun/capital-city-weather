import React from "react";
import "../styles/DataContainer.css";
import Cell from "./Cell";

class Row extends React.Component {
  render() {
    const rowData = this.props.rowData;
    return (
      <tr
        key={this.props.rowNumber}
        id={`${rowData.cityGeoNameId}`}
        className="table-row"
      >
        <Cell
          classProp="city-entry"
          data={rowData.city}
          rowNumber={this.props.rowNumber}
        />
        <Cell
          classProp="country-entry"
          data={rowData.country}
          rowNumber={this.props.rowNumber}
        />
        <Cell
          classProp="continent-entry"
          data={rowData.continent}
          rowNumber={this.props.rowNumber}
        />
        <Cell
          classProp="time-entry"
          data={rowData.time}
          rowNumber={this.props.rowNumber}
        />
        <Cell
          classProp="temp-entry"
          data={`${rowData.temp} \u2103`}
          rowNumber={this.props.rowNumber}
        />
        <Cell
          classProp="weather-entry"
          data={rowData.weather}
          rowNumber={this.props.rowNumber}
        />
        <Cell
          classProp="humidity-entry"
          data={`${rowData.humidity}%`}
          rowNumber={this.props.rowNumber}
        />
        <Cell
          classProp="windspeed-entry"
          data={`${rowData.windspeed} km/h`}
          rowNumber={this.props.rowNumber}
        />
      </tr>
    );
  }
}

export default Row;
