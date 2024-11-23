import React, { useState } from 'react'

function Controls() {
  const [play, setPlay] = useState(true);
  const [repeat, setRepeat] = useState(true); 



  function handleNextSong(){


    return
  }
  return (
    <>
    <div className="contols">          
          
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
          <button>
            <span className="material-symbols-outlined">volume_up</span>
          </button>
          <button>
            <span className="material-symbols-outlined">equalizer</span>
          </button>
        </div>
    </>
  )
}

export default Controls