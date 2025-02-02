import React from 'react'
import '../StyleSheets/Loader.css';

function Loader() {
  return (
    <div className="loader-container">
    <div className="loader">
      <div className="pulse">
        <div></div>
      </div>
      <div className="pulse">
      <div></div>
      </div>
      <div className="pulse">
      <div></div>
      </div>
    </div>
    <h2>Welcome to Sangeet App</h2> {/* Your App Name */}
  </div>
  )
}

export default Loader