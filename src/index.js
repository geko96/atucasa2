import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIxBw0n6W36ruYySCT3SGOwhVn0ZwE9hQ",
  authDomain: "coder-react-98194.firebaseapp.com",
  projectId: "coder-react-98194",
  storageBucket: "coder-react-98194.appspot.com",
  messagingSenderId: "924833473008",
  appId: "1:924833473008:web:b44921491c1be80d48bd35"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
