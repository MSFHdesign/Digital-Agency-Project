import React from "react";
import { Link } from "react-router-dom";
import aarhusNightLife from '../Picture/img/aarhus-nightlife.jpg';
import pilned from '../Picture/icons/PilNed.png';
import calendar from '../Picture/icons/calendarblue.png';

// Magnus was here
export default function ReadyKey() {
  return (
    <section className="insertKeyContainer">
      <div className='frameContainer'>
        <img className='headerImg' src={aarhusNightLife} alt = 'Aarhus dining'/>
        <div className='insideFrame'></div>
        <h2 className='exsploreTitle'>See your trip</h2>
      </div>
      
      <h3>If you already have a trip planned, insert your key here:</h3>
      <fieldset className="form">
        <legend>Insert key</legend>
        <div className="keyInput">
          <input value="Your key here..."/>
          <img src={calendar} alt="" />
        </div>
      </fieldset>
      <Link to='/seetrip'>
        <button className="form-control-btn" >
          Find
        </button> 
      </Link>

      <button className="BackBtn"><img src={pilned} alt="Go back button"/></button>
    </section>
  );
}
