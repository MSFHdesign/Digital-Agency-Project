import React from "react";
import Accordion from "./Cards";
import CalenderSearch from "../Picture/icons/menu/Picture1.png";

const SeeTrip = () => {
  const accordionData = [
    {
      Name: "Peter Gift",
      AddressLine: "M. P. Bruuns Gade 28",
      PostalCode: "8000",
      City: "Aarhus C",
      Phone: "+45 86 12 01 63",
      type: "indenfor",
      type2: "indenforaktiv",
    },
    {
      Name: "Ballehage Beach",
      AddressLine: "Ballehage Strand",
      PostalCode: "8270",
      City: "Højbjerg",
      type: "udenfor",
      type2: "udenforaktiv",
    },
    {
      Name: "Christmas Opening Hours",
      PostalCode: "8000",
      City: "Aarhus C",
      type: "udenfor",
      type2: "udenforaktiv",
    },
    {
      Name: "Grappa Piccolo",
      AddressLine: "Åboulevarden 62",
      PostalCode: "8000",
      City: "Aarhus C",
      Phone: "+45 86 18 07 09",
      type: "spisested",
      type2: "spisestedaktiv",
    },
    {
      Name: "City Bike Adventures Aarhus",
      AddressLine: "Hack Kampmanns Plads ",
      PostalCode: "8000",
      City: "Aarhus C",
      Phone: "+45 71 99 91 50",
      type: "udenfor",
      type2: "udenforaktiv",
    },
    {
      Name: "The Danish National Opera",
      AddressLine: "Skovgaardsgade 2 C",
      PostalCode: "8000",
      City: "Aarhus C",
      type: "indenfor",
      type2: "indenforaktiv",
    },
    {
      Name: "The Forest Route",
      AddressLine: "Skejbyvej 40",
      PostalCode: "8240",
      City: "Risskov",
      type: "udenfor",
      type2: "udenforaktiv",
    },
    {
      Name: "Aarhus River",
      AddressLine: "Århus Å",
      PostalCode: "8220",
      City: "Brabrand",
      type: "udenfor",
      type2: "udenforaktiv",
    },
    {
      Name: "Pause Recovery Studio",
      AddressLine: "Frederiks Plads 28",
      PostalCode: "8000",
      City: "Aarhus C",
      Phone: "+45 81 18 64 00",
      type: "indenfor",
      type2: "indenforaktiv",
    },
    {
      Name: "Release your inner speed devil",
      AddressLine: "Hasselager Centervej 30",
      PostalCode: "8260",
      City: "Viby J",
      Phone: "86280170",
      type: "indenfor",
      type2: "indenforaktiv",
    },
  ];

  return (
    <div>
      <div className="myTripHeader BoxContainer">
        <h2>My Trip</h2>
        <img src={CalenderSearch} alt="billede"></img>
      </div>
      <div className="accordion">
        {accordionData.map(
          ({ Name, AddressLine, PostalCode, City, Phone, type, type2 }) => (
            <Accordion
              title={Name}
              adr={AddressLine}
              type={type}
              zip={PostalCode}
              city={City}
              phone={Phone}
              type2={type2}
              key={Name}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SeeTrip;
