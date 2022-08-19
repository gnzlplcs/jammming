import React from "react";
import "./Track.css";

const Track = ({ name, artist, album, onAdd, isRemoval, track }) => {
  const renderAction = () => {
    return <button className="Track-action" onClick={addTrack}>{isRemoval ? "-" : "+"}</button>;
  };

  const addTrack = () => {
    onAdd(track);
  };

  console.log(track)

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      <button className="Track-action">
        {/* <!-- + or - will go here --> */}
      </button>
    </div>
  );
};

export default Track;
