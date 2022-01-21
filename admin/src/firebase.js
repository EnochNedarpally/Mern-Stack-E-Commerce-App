// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR6MAd47r-IZT1e2YuK6_6JxtwTYWgPTM",
  authDomain: "mern-stack-e-commerce-app.firebaseapp.com",
  projectId: "mern-stack-e-commerce-app",
  storageBucket: "mern-stack-e-commerce-app.appspot.com",
  messagingSenderId: "584920849158",
  appId: "1:584920849158:web:a32c7f1073e63421285c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;