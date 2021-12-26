import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
      <nav style= {{backgroundColor: "white",color :"black"}} id="brand" className=" navbar-expand-lg navbar navbar-light ">
      <div className="container">
    <a className="navbar-brand" href="#">
      {/* <img src={process.env.PUBLIC_URL + "/circle.png"} alt="" width="50" height="34"/> */}
      <a class="navbar-brand" id = "logo" href="#">Hangman </a>
    </a>
  </div>
      <div id = "color" className="container-fluid" style = {{color:"white"}}>
        <a className="navbar-brand"  href="#">Game</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <NavLink className="navbar-brand" to = '/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://youtu.be/leW9ZotUVYo"></a>
            </li>
           
           
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" disabled type="search" placeholder="Hangman Game" aria-label="Search"/>
            <button className="btn btn-outline-success" disabled type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
}
