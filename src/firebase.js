import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   databaseURL: "https://portofolio-web-3e8e8-default-rtdb.firebaseio.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.firebasestorage.app",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
//  };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnmof5YqqjWmE99FrOFzla3ryn_3OzZ8Q",
  authDomain: "portofolio-f08af.firebaseapp.com",
  databaseURL: "https://portofolio-f08af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portofolio-f08af",
  storageBucket: "portofolio-f08af.firebasestorage.app",
  messagingSenderId: "975778490637",
  appId: "1:975778490637:web:454576e3d23509cdb52844",
  measurementId: "G-F2JW9JKB40",
 };


// const firebaseConfig = {
//   apiKey: "AIzaSyAnmof5YqqjWmE99FrOFzla3ryn_3OzZ8Q",
//   authDomain: "portofolio-f08af.firebaseapp.com",
//   projectId: "portofolio-f08af",
//   storageBucket: "portofolio-f08af.firebasestorage.app",
//   messagingSenderId: "975778490637",
//   appId: "1:975778490637:web:454576e3d23509cdb52844",
//   measurementId: "G-F2JW9JKB40"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };