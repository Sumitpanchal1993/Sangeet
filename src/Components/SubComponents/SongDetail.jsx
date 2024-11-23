import React from 'react'
import sample from '../../Media/Sample.png'

function SongDetail() {
    return (
        <>
            <div className="songDetail">
                <div>
                    <img src={sample} alt="ok" />
                </div>
                <div>
                    <h4>Stree 2</h4>
                    <p>Aaj Ki Raat</p>
                    <p>Kumar Sanu  Alka Yagnik</p>
                </div>
            </div>
        </>
    )
}

export default SongDetail