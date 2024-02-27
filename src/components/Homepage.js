import React from 'react'
import '../css/Homepage.css'
import dragonImage2 from '../assets/fantasy.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




function Homepage() {
  return (
    <div className="homepage">
<div className="card">
  <img src={dragonImage2}className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  )
}

export default Homepage