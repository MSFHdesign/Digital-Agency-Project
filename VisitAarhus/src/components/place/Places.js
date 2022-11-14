/*Places
 *
 *Component Functions to fetch and parse json data, example showing and writing filtering of categors
 *Importing and Calling each place in a list of places to be rendered
 *
 *Author Jeffrey Serio
 */

import React, { useEffect, useState } from "react";
import PlaceItem from "./PlaceItem";



const hero = {
  63: { Name: 'Restaurants', ImageUrl: 'https://files.guidedanmark.org/files/407/218969_VDKType-Restaurants.jpg' },

  64: { Name: 'Cafés', ImageUrl: 'https://files.guidedanmark.org/files/407/218968_VDKType-Cafes.jpg' },

  49: { Name: 'Beaches', ImageUrl: 'https://files.guidedanmark.org/files/466/219163_VDKType-strande.jpg' },
  
  47: { Name: 'Shopping', ImageUrl: 'https://files.guidedanmark.org/files/466/219160_VDKType-shopping.jpg' },
  
  48: { Name: 'Sightseeing', ImageUrl: 'https://files.guidedanmark.org/files/466/214602_vdktype-4.jpg' },
  
  40: { Name: 'Entertainment', ImageUrl: 'https://files.guidedanmark.org/files/466/219170_VDKType-biografer.jpg' },
  
  52: { Name: 'DIY Tours', ImageUrl: 'https://files.guidedanmark.org/files/466/219166_VDKType-turforslag.jpg' },
  
  42: { Name: 'Angling', ImageUrl: 'https://files.guidedanmark.org/files/466/219168_VDKType-fiskevande.jpg' },
  
  53: { Name: 'Wellness', ImageUrl: 'https://files.guidedanmark.org/files/466/214607_vdktype-13.jpg' },
  
  37: { Name: 'Activities', ImageUrl: 'https://files.guidedanmark.org/files/466/219162_VDKType-Sport-og-andre-aktiviteter.jpg' },
  
  'xx': { Name: '', ImageUrl: '' },
  
  'xy': { Name: '', ImageUrl: '' },
  
  'yy': { Name: '', ImageUrl: '' },
};

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
            console.log(place.Category.Name);
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
    
      <div className="frameContainer">
        <img className="headerImg" src={hero[filter].ImageUrl} alt="Aarhus dining" />
        <div className="insideFrame"></div>
        <h2 className="exsploreTitle">{hero[filter].Name}</h2>
      </div>

      <button className="SearchBarBTN" onClick={() => setFilter(49)}>
        Beaches
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(64)}>
        Cafés
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(47)}>
        Shopping
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(63)}>
        Restaurants
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(48)}>
        Sightseeing
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(40)}>
        Entertainment
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(52)}>
        DIY tours
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(42)}>
        Angling
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(53)}>
        Wellness
      </button>
      <button className="SearchBarBTN" onClick={() => setFilter(37)}>
        Activities
      </button>

      {places.map((place) => (
        <PlaceItem place={place} key={place.Name + "" + place.Category.Name} />
      ))}
    </div>
  );
}
