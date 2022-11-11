import React from "react";
import calendarsearch from "../../Picture/icons/calendarsearch.png";
import calendaradd from "../../Picture/icons/calendaradd.png";
import magicstar from "../../Picture/icons/magicstar.png";
import sunfog from "../../Picture/icons/sunfog.png";
import Logo from "../../Picture/logos/visitDKWhite.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <img className="LogoTop" src={Logo} alt="Logotop" />
      <h1 className="menu-header">Select City</h1>
      <select
        defaultValue={"DEFAULT"}
        name="City"
        className="selectCity-holder"
      >
        <option value="DEFAULT" disabled>
          Choose City
        </option>
        <option value="aalborg">Aalborg</option>
        <option value="aarhus">Aarhus</option>
        <option value="copenhagen">Copenhagen</option>
        <option value="odense">Odense</option>
      </select>

      <ul className="menuItems">
        <li>
          <Link to="./seetrip">
            <p>See your trip</p>
            <img
              className="menuItemImg"
              src={calendarsearch}
              alt="MenuIcon"
            />{" "}
          </Link>
        </li>
        <li>
          <Link to="/plan">
            <p>Plan new trip</p>
            <img className="menuItemImg" src={calendaradd} alt="MenuIcon" />
          </Link>
        </li>
        <li>
          <p>Have an hour to spare?</p>
          <img className="menuItemImg" src={magicstar} alt="MenuIcon" />
        </li>
        <li>
          <p>Top things to see</p>
          <img className="menuItemImg" src={sunfog} alt="MenuIcon" />
        </li>
      </ul>
    </div>
  );
}
