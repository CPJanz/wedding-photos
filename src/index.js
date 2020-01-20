import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqWQ_4jfwwRKPkWthSoIkry_5xrZqjzaI",
  authDomain: "wedding-photos-1eb06.firebaseapp.com",
  databaseURL: "https://wedding-photos-1eb06.firebaseio.com",
  projectId: "wedding-photos-1eb06",
  storageBucket: "wedding-photos-1eb06.appspot.com",
  messagingSenderId: "922173532270",
  appId: "1:922173532270:web:ab979e310afc1d14171e7f",
  measurementId: "G-4J06N998YS"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
