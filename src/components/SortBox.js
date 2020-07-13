import React from 'react';

const SortBox = ({ sortField, sortChange }) => {
    return (
        <section role="sort">
            <form>
                <fieldset>
                    <label for="sortbox">
                        <select name="sortbox" id="sortbox" class="sortbox"
                            type="select"
                            onChange={sortChange}
                        >
                            <option value="temp">Temperature (low-high)</option>
                            <option value="windspeed">Windspeed</option>
                            <option value="city">City name</option>
                            <option value="continent">Continent</option>
                            <option value="weather">Weather</option>
                            <option value="humidity">Humidity</option>
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