const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
const express = require("express");
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "ayden-s-tech-blog.firebaseapp.com",
    projectId: "ayden-s-tech-blog",
    storageBucket: "ayden-s-tech-blog.appspot.com",
    messagingSenderId: "982619150754",
    appId: "1:982619150754:web:d8f4f78b5ebb4862cb7afb"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
