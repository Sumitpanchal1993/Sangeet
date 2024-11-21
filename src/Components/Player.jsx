import React, { useState } from "react";
import "./StyleSheets/Player.css";
import songsList from "../Songs/Songs";

function Player() {
  const [play, setPlay] = useState(true);
  const [repeat, setRepeat] = useState(true);
  const [songArr, setSongArr] = useState(songsList);
  const [song, setSong] = useState();

  function handleNextSong(){
    console.log(songArr)
    return
  }
  return (
    <>
      <div className="player">
        <div className="songDetail">
          <img src="" alt="ok" />
          <h3>Song Name</h3>
        </div>
        <div className="contols">
          <input type="range" name="progressBar" id="songProgressBar" />
          <button>
            <span className="material-symbols-outlined">shuffle</span>
          </button>
          <button>
            <span className="material-symbols-outlined">skip_previous</span>
          </button>
          <button onClick={() => setPlay((prev) => !prev)}>
            {play ? (
              <span className="material-symbols-outlined">play_circle</span>
            ) : (
              <span className="material-symbols-outlined">pause_circle</span>
            )}
          </button>
          <button onClick={handleNextSong}>
            <span className="material-symbols-outlined">skip_next</span>
          </button>
          <button onClick={() => setRepeat((prev) => !prev)}>
            {repeat ? (
              <span className="material-symbols-outlined">repeat</span>
            ) : (
              <span className="material-symbols-outlined">repeat_one</span>
            )}
          </button>
        </div>
        <div className="playerOptions">
          <button>
            <span className="material-symbols-outlined">volume_up</span>
          </button>
          <button>
            <span className="material-symbols-outlined">equalizer</span>
          </button>
        </div>
      </div>
      <audio src={songsList[1]} controls></audio>
    </>
  );
}

export default Player;
