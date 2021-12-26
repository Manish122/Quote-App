import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
<div className="main-footer">
      <div className="container" id="navLinks" >
        <div className="row" id="id1">
          {/* Column1 */}
          <div className="col" >
          <NavLink className="navbar-brand" to = '/'>HOME</NavLink>
            
          </div>
          {/* Column2 */}
          <div className="col" >
          <a className="navbar-brand" id = "list" href="https://youtu.be/leW9ZotUVYo">How To Play</a>
            
          </div>
          {/* Column3 */}
          <div className="col" >
          
          <NavLink className="navbar-brand" to = '/Instruction'>INSTRUCTIONS</NavLink>
            
          </div>

        
          {/* Column4 */}
          <div className="col" >
          <a className="navbar-brand" id = "list1" target = "_blank" href="https://www.arkadium.com/free-online-games/">More Games</a>
            
          </div>
        </div>
        <hr />
        <div className="row" >
          <p className="col-sm" id="id1" >
            &copy;{new Date().getFullYear()} © Hangman, All Rights Reserved, Hangman Entertainment
          </p>
        </div>
      </div>
    </div>
    )
    
}
export default Footer;