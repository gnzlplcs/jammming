import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    { name: "song 1", artist: "singer 1", album: "album 1", id: 1 },
    { name: "song 2", artist: "singer 2", album: "album 2", id: 2 },
    { name: "song 3", artist: "singer 3", album: "album 3", id: 3 },
  ]);

  const [playlistName, setPlaylistName] = useState("my playlist");

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "playlist 1",
      artist: "playlistArtist 1",
      album: "playlistAlbum 1",
      id: 4,
    },
    {
      name: "playlist 2",
      artist: "playlistArtist 2",
      album: "playlistAlbum 2",
      id: 5,
    },
    {
      name: "playlist 3",
      artist: "playlistArtist 3",
      album: "playlistAlbum 3",
      id: 6,
    },
  ]);

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prev) => {
      return [...prev, track];
    });
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
  };

  const search = (term) => {
    Spotify.search(term).then((searchResult) =>
      setSearchResults({ searchResult })
    );
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
