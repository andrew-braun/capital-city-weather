import React from "react";
import "../styles/SearchBox.css";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <section role="search">
      <form>
        <fieldset>
          <label for="searchbox">
            <input
              type="search"
              name="searchbox"
              id="searchbox"
              class="searchbox"
              placeholder="Search by city"
              maxlength="300"
              onChange={searchChange}
            />
          </label>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchBox;
