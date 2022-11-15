import React from "react";

import { Link } from "react-router-dom";
// Magnus

export default function ReadyKey() {
  return (
    <div className="form">
      <h2>Got a key? </h2>
      <label htmlFor="">insert key</label>
      <input />
      <Link to="/seetrip">
        <button className="form-control-btn">get to trip</button>{" "}
      </Link>
    </div>
  );
}
