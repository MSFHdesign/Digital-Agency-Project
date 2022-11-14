import React from "react";
import AddArticle from "../components/firebase tilfoej copy";
export default function planTrip() {
  return (
    <div className="plantrip">
      <h1>Create new calender</h1>
      <p>
        Here you can create a new calender for your trip! Just give it a name
        and discover the many options!
      </p>
      <AddArticle />
    </div>
  );
}
