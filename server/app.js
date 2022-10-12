
const express = require("express");
require('dotenv').config();

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../ayden-s-tech-blog-firebase-adminsdk-7sbwz-b082735b48.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const sampleArticle = {
    title: 'Sample article',
    author: 'Ayden',
    date: Date.now(),
    body: 'Test body. This is a test body. I am too lazy to copy a lorem ipsum into this string.'
}

db.collection('posts').get().then(res=>{
    let responseArr = [];
    res.forEach(doc => {
        responseArr.push(doc.data());
    })
    console.log(responseArr);
})

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

