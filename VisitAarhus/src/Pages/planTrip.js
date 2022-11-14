import React from "react";
import AddArticle from "../components/firebase tilfoej copy";
import aarhusNightLife from "../Picture/img/aarhus-nightlife.jpg";

export default function planTrip() {
  return (
    <div className="plantrip">
      <div className="frameContainer">
        <img className="headerImg" src={aarhusNightLife} alt="Aarhus dining" />
        <div className="insideFrame"></div>
        <h2 className="exsploreTitle">Home</h2>
      </div>

      <h1>Create new calender</h1>
      <p>
        Here you can create a new calender for your trip! Just give it a name
        and discover the many options!
      </p>
      <AddArticle />
    </div>
  );
}
