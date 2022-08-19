import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track key={track.id} onAdd={onAdd} track={track} />
      ))}
    </div>
  );
};

export default TrackList;
