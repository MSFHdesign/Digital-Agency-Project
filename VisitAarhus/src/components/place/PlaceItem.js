/*
 *PlaceItem
 *Simple Component Function to stype and return a place to eat
 *
 */

export default function PlaceItem({ place }) {
  const noimg =
    "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png";
  return (
    <div className="itemContainer" style={{ display: "flex" }}>
      <div className="itemContainerImg">
        {" "}
        <img
          src={place.Files.length === 0 ? { noimg } : place.Files[0].Uri}
          alt={place.Files.length === 0 ? place.Name : place.Files[0].AltText}
        />
      </div>
      <div className="itemContainerName">{place.Name}</div>
      <div className="itemContainerCategory">{place.Category.Name}</div>
    </div>
  );
}
