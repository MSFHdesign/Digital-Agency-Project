import React, { useState } from "react";

const Accordion = ({ title, adr, type, zip, city, phone, type2 }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={type}>
      <div
        className={isActive ? type2 : "accordion-show"}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="a">{title}</div>
        <div className={isActive ? "ned" : "henad"}>{isActive ? ">" : ">"}</div>
      </div>
      {isActive && (
        <div className="inside">
          <p>
            {adr} {zip} {city}
          </p>
          <p>{phone}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
