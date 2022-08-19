import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) =>
        <Track
          name={track.name}
          artist={track.artist}
          album={track.album}
          key={track.id}
        />
      )}
    </div>
  );
};

export default TrackList;
