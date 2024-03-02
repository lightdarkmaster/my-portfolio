import React from 'react'
import '../css/NavBar.css'
import myImage from "../assets/dragon.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function NavBar() {
  return (
    <div className="navigationBar">
      <nav className=" nav navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <div><img src={myImage} className="logo"/></div>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Links
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="https://github.com/lightdarkmaster">Github</a></li>
            <li><a className="dropdown-item" href="https://www.linkedin.com/in/christian-barbosa-b993bb230/">Linkedin</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="https://www.facebook.com/ChanNotDiff/">Facebook</a></li>
            <li><a className="dropdown-item" href="https://www.instagram.com/chitchan22/">Instagram</a></li>
            <li><a className="dropdown-item" href="https://www.tiktok.com/@chan_but_great">TikTok</a></li>
            <li><a className="dropdown-item" href="https://twitter.com/Chan_not_Diff22">Twitter</a></li>

          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar