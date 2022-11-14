import { React, useState } from "react";
import PlaceItem from './PlaceItem'

const Text = ({ description }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <p>
        {showMore ? Text : `${Text.substring(0, 250)}...`}
            <button className="showMorebtn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}</button>
    </p>
  );
};

export default Text;