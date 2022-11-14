/*
 *PlaceItem
 *Simple Component Function to stype and return a place to eat
 *
 */

export default function PlaceItem({ place }) {
  
  return (
    <div className="itemContainer" style={{ display: "flex" }}>
      <div className="itemContainerImg">
        {" "}
        <img
          src={place.Uri}
          alt={place.Uri}
        />
      </div>
      <div className="itemContainerName">{place.Name}</div>
      <div className="itemContainerCategory">{place.Category.Name}</div>
    </div>
  );
}
