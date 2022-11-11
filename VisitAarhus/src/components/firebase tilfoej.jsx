import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";

// Magnus

export default function AddArticle() {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
    console.log(formData);
  };
  const handlePublish = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "Calenders"), {
      navn: formData,
    });
  };

  return (
    <div className="form">
      <h2>Add a post</h2>
      <label htmlFor="">Title</label>
      <input type="text" value={formData} onChange={(e) => handleChange(e)} />
      <button className="form-control-btn" onChange={handlePublish}>
        Publish{" "}
      </button>
    </div>
  );
}
