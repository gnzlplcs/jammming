import React from "react";
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

const SearchResults = ({ searchResults }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} />
    </div>
  );
};

export default SearchResults;
