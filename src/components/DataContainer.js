import React from "react";
import CityData from './CityData';

const DataContainer = ({  }) => {
    return (
        <article className="data-container">
            <h2>Capital Cities</h2>
            <div className="city-list">
                <ol>
                    {<CityData city="Tbilisi" country="Georgia" />}
                </ol>
            </div>
        </article>
    )
}

export default DataContainer;