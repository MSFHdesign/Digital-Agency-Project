import React from "react";
import CalenderSearch from "../Picture/icons/menu/Picture1.png";

export default function EditTrip() {


    return (
        <div className="myTripHeader BoxContainer">
            <h2>Edit trip</h2>
            <img src={CalenderSearch} alt="billede"></img>
            <div className="editMyTrip">
                <h3>My trip</h3>
                <div className="editBtnBox">
                    <button className="editBtn form-control-btn">Edit</button>
                    <button className="deleteBtn form-control-btn">Delete</button>
                </div>
            </div>
        </div>
    )
};