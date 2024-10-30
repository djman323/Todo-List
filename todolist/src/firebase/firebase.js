// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8rPqagCHQCItImE0rzhNh0zXx73XSQvo",
  authDomain: "todo-list-e0f06.firebaseapp.com",
  projectId: "todo-list-e0f06",
  storageBucket: "todo-list-e0f06.appspot.com",
  messagingSenderId: "329536624179",
  appId: "1:329536624179:web:d4f41cf86ba538bcdc3546",
  measurementId: "G-3VPD2ZV440",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
