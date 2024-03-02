import React from 'react'
import '../css/Homepage.css'
import pic1 from '../assets/pic1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




function Homepage() {
  return (
    <div className="homepage">
      <div className="intro">
        <div className="quote">
          <h1>Hello I am Christian</h1>
          <br/>
          <p>I am an Information Technology Student.</p>
          <br/>
          <button className="see__more">See More</button>
        </div>
        <img src={pic1} alt="pic1"/>
      </div>
    </div>
  )
}

export default Homepage