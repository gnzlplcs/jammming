import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    { name: "song 1", artist: "singer 1", album: "album 1", id: 1 },
    { name: "song 2", artist: "singer 2", album: "album 2", id: 2 },
    { name: "song 3", artist: "singer 3", album: "album 3", id: 3 },
  ]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
  );
};

export default App;
