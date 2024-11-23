import React, { useState } from "react";
import "./StyleSheets/Player.css";
import songsList from "../Songs/Songs";
import { useSangeetContext } from "../ContextStore/Store";
import SongDetail from "./SubComponents/SongDetail";
import Controls from "./SubComponents/Controls";

function Player() {
  const [songArr, setSongArr] = useState(songsList);
  return (
    <>
      <div className="player">
    <input type="range" id="songProgressBar" min="0" max="100" value="50" step="1"></input>
        <SongDetail/>
        <Controls/>
        <div className="playerOptions">
        <span class="material-symbols-outlined">more_vert</span>
        </div>
      </div>    
    </>
  );
}

export default Player;
