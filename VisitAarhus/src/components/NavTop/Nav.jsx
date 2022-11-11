import React, { useState, useCallback } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
import calendarsearch from "../../Picture/icons/calendarsearch.png";
import calendaradd from "../../Picture/icons/calendaradd.png";
import magicstar from "../../Picture/icons/magicstar.png";
import sunfog from "../../Picture/icons/sunfog.png";
import Logo from "../../Picture/logos/visitDKWhite.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <section>
      <HamburgerSqueeze
        {...{ isActive, toggleButton }}
        onClick={handleClick}
      ></HamburgerSqueeze>
      {isActive && (
        <div className="menu">
          <Link to="/" onClick={handleClick}>
            <img className="LogoTop" src={Logo} alt="Logotop" />
          </Link>
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
              <Link to="./seetrip" onClick={handleClick}>
                <p>See your trip</p>
                <img
                  className="menuItemImg"
                  src={calendarsearch}
                  alt="MenuIcon"
                />{" "}
              </Link>
            </li>
            <li>
              <Link to="/plan" onClick={handleClick}>
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
      )}
    </section>
  );
};

export default Nav;
