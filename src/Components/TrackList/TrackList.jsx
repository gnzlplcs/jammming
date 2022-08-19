import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd, onRemove, isRemoval}) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          key={track.id}
          onAdd={onAdd}
          track={track}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
};

export default TrackList;
