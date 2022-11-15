import React from "react";
import { useLocation } from "react-router-dom";
import AddArticle from "../components/firebase tilfoej copy";
import aarhusNightLife from "../Picture/img/aarhus-nightlife.jpg";

export default function PlanTrip() {
  const location = useLocation();
  return (
    <div className="plantrip">
      <div className="frameContainer">
        <img className="headerImg" src={aarhusNightLife} alt="Aarhus dining" />
        <div className="insideFrame"></div>
        <h2 className="exsploreTitle"> {location.pathname} </h2>
      </div>

      <h1>Plan new trip</h1>
      <p>
        Plan your next trip! Just come up with a name, and start adding attractions to your plan. Go explore!
      </p>
      <AddArticle />
    </div>
  );
}
