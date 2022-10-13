
const express = require("express");
require('dotenv').config();

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../ayden-s-tech-blog-firebase-adminsdk-7sbwz-b082735b48.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();


//generating sample articles to test article requesting from frontend
const sampleArticle = (n) => ({
    title: `Sample article number ${n}`,
    id: Math.random(),
    author: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
    date: Date.now(),
    body: 'Test body. This is a test body. I am too lazy to copy a lorem ipsum into this string.'
})
const sampleArticles = [];

for (let i = 0; i < 5; i++) {
    let a = sampleArticle(i);

    sampleArticles[a.id] = a;
}

console.log(sampleArticles)

db.collection('posts').get().then(res => {
    let responseArr = [];
    res.forEach(doc => {
        responseArr.push(doc.data());
    })
    console.log(responseArr);
})

const PORT = process.env.PORT || 3001;
const app = express();

const RECENT_ARTICLE_COUNT = 5;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ recentArticles : sampleArticle});
});

app.get("/api/article", (req, res) => {

});

