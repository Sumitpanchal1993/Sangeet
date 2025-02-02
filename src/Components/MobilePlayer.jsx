import React from "react";
import "./StyleSheets/MobilePlayer.css";
import Cover from "../Media/Cover.jpg";

function MobilePlayer() {
  return (
    <>
      <div className="mobilePlayerBase">
        <div className="topBar">
          <div>
            <span class="material-symbols-outlined">arrow_back</span>
          </div>
          <div>
            <div>Song Name</div>
            <div>Singer</div>
          </div>
          <div>
            <span class="material-symbols-outlined">more_vert</span>
          </div>
        </div>    
        <div className="photo">
          <div className="cd">
            <img src={Cover} alt="CD Cover" className="cd-img" />
          </div>
        </div>

        <div className="progress">
          <div>01:35</div>
          <div>
            <input type="range" name="" id="" />
          </div>
          <div>02:35</div>
        </div>
        <div className="controls">
          <div>
            <span class="material-symbols-outlined">shuffle</span>
          </div>
          <div>
            <span class="material-symbols-outlined">repeat</span>
          </div>
          <div>
            <span class="material-symbols-outlined">skip_previous</span>
          </div>
          <div>
            <span class="material-symbols-outlined">play_arrow</span>
          </div>
          <div>
            <span class="material-symbols-outlined">skip_next</span>
          </div>
          <div>
            <span class="material-symbols-outlined">volume_up</span>
          </div>
          <div>
            <span class="material-symbols-outlined">equalizer</span>
          </div>
        </div>
        <div className="menu">
          <div>
            <span class="material-symbols-outlined">home</span>
          </div>
          <div>
            <span class="material-symbols-outlined">favorite</span>
          </div>
          <div>
            <span class="material-symbols-outlined">queue_music</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobilePlayer;
