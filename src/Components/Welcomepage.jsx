import React from 'react'
import "./StyleSheets/Welcomepage.css"
import Loader from './SubComponents/Loader'

function Welcomepage() {
  return (
    <>
     <div className='welcomeBase'>
        <Loader/>
     </div>
    </>
  )
}

export default Welcomepage