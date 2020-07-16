import React from "react";
import "../styles/SearchBox.css";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <section role="search">
      <form>
        <fieldset>
          <label htmlFor="searchbox">
            <input
              type="search"
              name="searchbox"
              id="searchbox"
              className="searchbox"
              placeholder="Search for any variable"
              maxLength={150}
              onChange={searchChange}
            />
          </label>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchBox;
