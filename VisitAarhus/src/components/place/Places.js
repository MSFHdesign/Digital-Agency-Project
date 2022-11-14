/*Places
 *
 *Component Functions to fetch and parse json data, example showing and writing filtering of categors
 *Importing and Calling each place in a list of places to be rendered
 *
 *Author Jeffrey Serio
 */

import React, { useEffect, useState } from "react";
import PlaceItem from "./PlaceItem";

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState(64);
  console.log(filter);

  useEffect(() => {
    async function getPlaces() {
      const url =
        "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json";
      const response = await fetch(url);
      const data = await response.json();
      const filteredrest = [];

      try {
        for (var i = 0; i < data.length; i++) {
          var place = data[i];
          if (place.Category.Id === filter) {
            console.log(place.Files);
            filteredrest.push(place);
          }
        }
      } catch (error) {
        console.log("Oh come on! These should be easy peeps! What");
      }
      setPlaces(filteredrest);
    }
    getPlaces();
  }, [filter]);

  return (
    <div>
      <button className="SearchBarBTN" onClick={() => setFilter(49)}>Beaches</button>
      <button className="SearchBarBTN" onClick={() => setFilter(64)}>Café</button>
      <button className="SearchBarBTN" onClick={() => setFilter(47)}>Shopping</button>
      <button className="SearchBarBTN" onClick={() => setFilter(63)}>Resturants</button>
      <button className="SearchBarBTN" onClick={() => setFilter(48)}>Sightseen</button>
      <button className="SearchBarBTN" onClick={() => setFilter(40)}>Cinemas</button>
      <button className="SearchBarBTN" onClick={() => setFilter(52)}>DIY tours</button>
      <button className="SearchBarBTN" onClick={() => setFilter(42)}>Angling</button>
      <button className="SearchBarBTN" onClick={() => setFilter(5)}>Wellness</button>

      
      {places.map((place) => (
        <PlaceItem place={place} key={place.Name + "" + place.Category.Name} />
      ))}
    </div>
  );
}
