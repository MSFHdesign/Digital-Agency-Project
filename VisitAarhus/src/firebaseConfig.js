// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8C2R9y942CGLvV2V2Iy8QUJD7lTIX8gM",
  authDomain: "visitdanmark-766c2.firebaseapp.com",
  projectId: "visitdanmark-766c2",
  storageBucket: "visitdanmark-766c2.appspot.com",
  messagingSenderId: "121237610089",
  appId: "1:121237610089:web:dc8c8a34fc3e0634fa0cf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
