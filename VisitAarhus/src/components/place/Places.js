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
      <button onClick={() => setFilter(49)}>Beaches</button>

      {places.map((place) => (
        <PlaceItem place={place} key={place.Name + "" + place.Category.Name} />
      ))}
    </div>
  );
}
