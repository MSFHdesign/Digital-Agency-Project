import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebaseConfig";

// Magnus

export default function DeleteArticle({ id, imageUrl }) {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
    console.log(formData);
  };
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Calenders", formData));
      setFormData("");
      toast("article deleted successfully", { type: "success" });
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
    } catch (error) {
      toast("Error deleting article", { type: "error" });
      console.log(error);
    }
  };
  return (
    <div>
      <label>
        Add key <br />
      </label>
      <input type="text" value={formData} onChange={(e) => handleChange(e)} />
      <button className="deletebtn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
