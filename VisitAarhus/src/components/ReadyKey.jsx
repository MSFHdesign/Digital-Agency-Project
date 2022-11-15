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

[
  {
    Name: "Peter Gift",
    AddressLine: "M. P. Bruuns Gade 28",
    PostalCode: "8000",
    City: "Aarhus C",
    Phone: "+45 86 12 01 63",
    type: "udenfor",
  },
  {
    Name: "Ballehage Beach",
    AddressLine: "Ballehage Strand",
    PostalCode: "8270",
    City: "Højbjerg",
    type: "udenfor",
  },
  {
    Name: "Christmas Opening Hours",
    PostalCode: "8000",
    City: "Aarhus C",
    type: "udenfor",
  },
  {
    Name: "Grappa Piccolo",
    AddressLine: "Åboulevarden 62",
    PostalCode: "8000",
    City: "Aarhus C",
    Phone: "+45 86 18 07 09",
    type: "spisested",
  },
  {
    Name: "City Bike Adventures Aarhus",
    AddressLine: "Hack Kampmanns Plads ",
    PostalCode: "8000",
    City: "Aarhus C",
    Phone: "+45 71 99 91 50",
    type: "udenfor",
  },
  {
    Name: "The Danish National Opera",
    AddressLine: "Skovgaardsgade 2 C",
    PostalCode: "8000",
    City: "Aarhus C",
    type: "indenfor",
  },
  {
    Name: "The Forest Route",
    AddressLine: "Skejbyvej 40",
    PostalCode: "8240",
    City: "Risskov",
    type: "udenfor",
  },
  {
    Name: "Aarhus River",
    AddressLine: "Århus Å",
    PostalCode: "8220",
    City: "Brabrand",
    type: "udenfor",
  },
  {
    Name: "Pause Recovery Studio",
    AddressLine: "Frederiks Plads 28",
    PostalCode: "8000",
    City: "Aarhus C",
    Phone: "+45 81 18 64 00",
    type: "indenfor",
  },
  {
    Name: "Release your inner speed devil",
    AddressLine: "Hasselager Centervej 30",
    PostalCode: "8260",
    City: "Viby J",
    Phone: "86280170",
    type: "indenfor",
  },
];
