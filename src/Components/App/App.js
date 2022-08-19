import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    { name: "song 1", artist: "singer 1", album: "album 1", id: 1 },
    { name: "song 2", artist: "singer 2", album: "album 2", id: 2 },
    { name: "song 3", artist: "singer 3", album: "album 3", id: 3 },
  ]);

  const [playlistName, setPlaylistName] = useState("playlist 1");

  const [playlistTracks, setPlaylistTracks] = useState([
    { name: "track 1", artist: "artist 1", album: "album 1", id: 1 },
    { name: "track 2", artist: "artist 2", album: "album 2", id: 2 },
    { name: "track 3", artist: "artist 3", album: "album 3", id: 3 },
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
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
