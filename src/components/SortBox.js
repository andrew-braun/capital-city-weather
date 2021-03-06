import React from 'react';
import "../styles/SortBox.css";

const SortBox = ({ sortField, sortChange }) => {
    return (
        <section>
            <form>
                <fieldset>
                    <label htmlFor="sortbox">
                        <select name="sortbox" id="sortbox" className="sortbox"
                            type="select"
                            onChange={sortChange}
                        >
                            <option value="city">City name</option>
                            <option value="continent">Continent</option>
                            <option value="temp">Temperature</option>
                            <option value="windspeed">Windspeed</option>
                            <option value="humidity">Humidity</option>
                            <option value="weather">Weather</option>
                            <option value="date">Date</option>
                            <option value="time">Time</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </section>
    )
}

export default SortBox