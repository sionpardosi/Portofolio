import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDabi0T4u47sPmZQnh0h_s5lT1kCiZBzjM",
    authDomain: "portfolio-comment-63747.firebaseapp.com",
    projectId: "portfolio-comment-63747",
    storageBucket: "portfolio-comment-63747.firebasestorage.app",
    messagingSenderId: "496301777961",
    appId: "1:496301777961:web:54b88c4f75f8895085e838"
};
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDabi0T4u47sPmZQnh0h_s5lT1kCiZBzjM",
//   authDomain: "portfolio-comment-63747.firebaseapp.com",
//   projectId: "portfolio-comment-63747",
//   storageBucket: "portfolio-comment-63747.firebasestorage.app",
//   messagingSenderId: "496301777961",
//   appId: "1:496301777961:web:54b88c4f75f8895085e838",
//   measurementId: "G-YPKFW0W1QB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };