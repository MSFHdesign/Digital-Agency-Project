import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebaseConfig";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// Magnus

export default function ReadyKey() {
  const [formData, setFormData] = useState({
    title: "",
    image: "test",
    createdAt: Timestamp.now().toDate(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handlePublish = () => {
    if (!formData.title) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/images/${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on("state_changed", () => {
      setFormData({
        title: "",
        image: "test",
      });

      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, formData.title);
        console.log(formData.image);

        addDoc(articleRef, {
          title: formData.title,
          createdAt: Timestamp.now().toDate(),
        })
          .then(() => {
            toast("Article added successfully", { type: "success" });
          })
          .catch((err) => {
            toast("Error adding article", { type: "error" });
          });
      });
    });
  };
  return (
    <div className="form">
      <h2>Got a key? </h2>
      <label htmlFor="">insert key</label>
      <input
        type="text"
        name="title"
        className="form-control"
        value={formData.title}
        onChange={(e) => handleChange(e)}
      />
      <Link to='/seetrip'><button className="form-control-btn" onClick={handlePublish}>
        get to trip
      </button> </Link>
    </div>
  );
}
