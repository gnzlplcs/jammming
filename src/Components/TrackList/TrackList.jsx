import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
          key={track.id} 
        />
      ))}
    </div>
  );
};

export default TrackList;
