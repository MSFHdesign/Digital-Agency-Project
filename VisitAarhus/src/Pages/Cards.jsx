import React, { useState } from 'react';

const Accordion = ({ title, adr, type, zip, city, phone }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={type} >
      <div className="accordion-show" onClick={() => setIsActive(!isActive)}>
        <div className='a'>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
          {isActive && <div classname='inside'>{adr} {zip} {city} {phone} </div>}
    </div>
  );
};

export default Accordion;