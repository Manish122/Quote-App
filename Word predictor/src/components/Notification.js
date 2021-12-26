import React from 'react'

const Notification = ({ showNotification }) => {
  // const mystyle = {
  //   color: "white",
  //   padding: "10px",
  //   backgroundColor: "DodgerBlue",
  //   fontFamily: "Arial",
  //   display: "flex",
  //   alignItems:"center"
    
  // };
  return (
    <div  className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p >You have already entered this letter</p>
    </div>
  )
}

export default Notification
