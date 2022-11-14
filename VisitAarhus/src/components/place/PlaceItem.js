/*
 *PlaceItem
 *Simple Component Function to stype and return a place to eat
 *
 */
import React, { useState } from "react";

export default function PlaceItem({ place }) {
  let image =
    "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png";
  if (place.Files.length !== 0) {
    image = place.Files[0].Uri;
  }

  let description = "Visit webpage";
  if (place.Descriptions.length !== 0) {
    description = place.Descriptions[0].Text;
  }

  let text = description;
  if (description === null) {
    text = "";
  }
  const subText = text.substr(0, 100).concat("...");
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="categoryItems">
      <div className="categoryTop">
        <div className="itemContainerName">{place.Name}</div>
        <div className="itemContainerCategory">{place.Category.Name}</div>
      </div>
      <div className="itemContainerImg">
        <img src={image} alt={place.Name} />
      </div>
      <p className="itemDescription">
        {showMore ? description : subText}
        <button
          className="DescriptionBtn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? ">" : "<"}
        </button>
      </p>
      <button className="itemAdd">Add to trip</button>
      <div className="borderBottom"></div>
    </div>
  );
}
