import aarhusNightLife from "../Picture/img/aarhus-nightlife.jpg";
import bank from "../Picture/icons/bank.png";
import bag from "../Picture/icons/bag.png";
import coffee from "../Picture/icons/coffee.png";
import flag from "../Picture/icons/flag.png";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import pilned from "../Picture/icons/PilNed.png";
import calendar from "../Picture/icons/calendarblue.png";

// Components
// import AddArticle from '../components/firebase tilfoej copy'

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="BoxContainer">
      <div className="frameContainer">
        <img className="headerImg" src={aarhusNightLife} alt="Aarhus dining" />
        <div className="insideFrame"></div>
        <h2 className="exsploreTitle">Explore Aarhus</h2>
      </div>

      <div className="HomeExploreBtnContainer">
        <div className="HomeExploreBtn">
          <img src={bank} alt="Aarhus Attractions" />
          <p>Attractions</p>
        </div>
        <div className="HomeExploreBtn">
          <img src={bag} alt="Aarhus Activities" />
          <p>Activities</p>
        </div>
        <div className="HomeExploreBtn">
          <img src={coffee} alt="Aarhus Places to Eat"/>
          <p>Places to eat</p>
        </div>
        <div className="HomeExploreBtn">
          <img src={flag} alt="Aarhus Events" />
          <p>Events</p>
        </div>
      </div>
      <Link to="/discover">
        <button className="form-control-btn getStartedBtn">Get started</button>
      </Link>

      <p className="tokeyBtnText">Already have a trip planned?</p>
      <p className="tokeyBtnText">
        Find it
        <button className="toKeyBtn add" onClick={() => setIsActive(!isActive)}>
          here
        </button>
      </p>

      <div className={isActive ? "insertKeyContainer" : "displaynone"}>
        <section className={isActive ? "insertKeyContainer" : "displaynone"}>
          <div className="frameContainer">
            <img
              className="headerImg"
              src={aarhusNightLife}
              alt="Aarhus dining"
            />
            <div className="insideFrame"></div>
            <h2 className="exsploreTitle">See your trip</h2>
          </div>

          <h3>If you already have a trip planned, insert your key here:</h3>
          <fieldset className="form">
            <legend>Insert key</legend>
            <div className="keyInput">
              <input value="Your key here..." />
              <img src={calendar} alt="" />
            </div>
          </fieldset>
          <Link to="/seetrip">
            <button className="form-control-btn">Find</button>
          </Link>

          <button className="BackBtn" onClick={() => setIsActive(!isActive)}>
            <img src={pilned} alt="Go back button" />
          </button>
        </section>
      </div>
    </div>
  );
}
