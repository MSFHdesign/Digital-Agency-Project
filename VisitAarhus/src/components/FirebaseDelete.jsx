import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebaseConfig";

// Magnus

export default function DeleteArticle({ id, imageUrl }) {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "articles", id));
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

         <label htmlFor="">Add key <br/></label>
      <input
        type="text"
        name="KalenderNavn"
        className="form-control"
        value={id}
       
      /> 

      <button className="deletebtn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
