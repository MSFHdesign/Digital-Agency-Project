import aarhusNightLife from "../Picture/img/aarhus-nightlife.jpg";
import bank from "../Picture/icons/bank.png";
import bag from "../Picture/icons/bag.png";
import coffee from "../Picture/icons/coffee.png";
import flag from "../Picture/icons/flag.png";
import React from "react";
import { Link } from "react-router-dom";

// Components
// import AddArticle from '../components/firebase tilfoej copy'
import ReadyKey from "../components/ReadyKey.jsx";

export default function Home() {
  return (
    <div className="BoxContainer">
      <div className="frameContainer">
        <img className="headerImg" src={aarhusNightLife} alt="Aarhus dining" />
        <div className="insideFrame"></div>
        <h2 className="exsploreTitle">Explore Aarhus</h2>
      </div>

      <div className="HomeExploreBtnContainer">
        <img className="HomeExploreBtn" src={bank} alt="Aarhus Attractions" />
        <img className="HomeExploreBtn" src={bag} alt="Aarhus Activities" />
        <img
          className="HomeExploreBtn"
          src={coffee}
          alt="Aarhus Places to Eat"
        />
        <img className="HomeExploreBtn" src={flag} alt="Aarhus Events" />
      </div>

      <p>Already have a trip planned?</p>
      <p>
        Find it<button className="toKeyBtn add">here</button>
      </p>

      <div className="insertKeyContainer">
        <ReadyKey />
      </div>
    </div>
  );
}
