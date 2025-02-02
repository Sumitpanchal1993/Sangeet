import React, { useEffect, useState, useRef } from "react";
import "./StyleSheets/MobilePlayer.css";
import Cover from "../Media/Cover.jpg";

function MobilePlayer() {
  const [songDuration, setSongDuration] = useState(240); // total song duration in seconds
  const [songName, setSongName] = useState("Jab Koi Baat Bigad");
  const [songArtist, setSongArtist] = useState("Kumar Sanu");
  const [songCover, setSongCover] = useState(Cover);
  const [songProgress, setSongProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // Flag to track slider interaction
  const intervalID = useRef(null); // Use ref to hold the interval ID

  useEffect(() => {
    if (!isDragging) {
      intervalID.current = setInterval(() => {
        if (songProgress < songDuration) {
          setSongProgress(prevProgress => prevProgress + 1);
        }
      }, 1000);
    }

    return () => {
      if (intervalID.current) {
        clearInterval(intervalID.current); // Clean up the interval on component unmount or when dragging
      }
    };
  }, [isDragging, songProgress, songDuration]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  const handleProgressChange = (e) => {
    setSongProgress(Number(e.target.value)); // Update songProgress when slider is dragged
  };

  const handleSliderMouseDown = () => {
    setIsDragging(true); // User started dragging the slider
    if (intervalID.current) {
      clearInterval(intervalID.current); // Stop the automatic update when dragging
    }
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false); // User stopped dragging the slider
  };

  // Calculate remaining time
  const remainingTime = songDuration - songProgress;

  return (
    <div className="mobilePlayerBase">
      <div className="topBar">
        <div>
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <div>
          <div>{songName}</div>
          <div>{songArtist}</div>
        </div>
        <div>
          <span className="material-symbols-outlined" onClick={() => { console.log("3 dots Clicked") }}>more_vert</span>
        </div>
      </div>

      <div className="photo">
        <div className="cd">
          <img src={songCover} alt="CD Cover" className="cd-img" />
        </div>
      </div>

      <div className="progress">
        <div>{formatTime(songProgress)}</div>
        <div>
          <input
            type="range"
            value={songProgress}
            min="0"
            max={songDuration}
            onChange={handleProgressChange}
            onMouseDown={handleSliderMouseDown}
            onMouseUp={handleSliderMouseUp}
            onTouchStart={handleSliderMouseDown}
            onTouchEnd={handleSliderMouseUp}
          />
        </div>
        <div>{formatTime(remainingTime)}</div>
      </div>

      <div className="controls">
        <div>
          <span className="material-symbols-outlined">shuffle</span>
        </div>
        <div>
          <span className="material-symbols-outlined">repeat</span>
        </div>
        <div>
          <span className="material-symbols-outlined">skip_previous</span>
        </div>
        <div>
          <span className="material-symbols-outlined">play_arrow</span>
        </div>
        <div>
          <span className="material-symbols-outlined">skip_next</span>
        </div>
        <div>
          <span className="material-symbols-outlined">volume_up</span>
        </div>
        <div>
          <span className="material-symbols-outlined">equalizer</span>
        </div>
      </div>

      <div className="menu">
        <div>
          <span className="material-symbols-outlined">home</span>
        </div>
        <div>
          <span className="material-symbols-outlined">favorite</span>
        </div>
        <div>
          <span className="material-symbols-outlined">queue_music</span>
        </div>
      </div>
    </div>
  );
}

export default MobilePlayer;
