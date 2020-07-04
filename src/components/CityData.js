import React from "react";

const CityData = ({ city, country }) => {
    return (
        <li className="city-item">
            <span>{city}</span>, <span>{country}</span>
        </li>
    )
}

export default CityData;