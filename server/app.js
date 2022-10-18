const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

//setting up bodyParser stuff VVV
const jsonParser = bodyParser.json()

const ADMIN_EMAILS = {
    'aydendiel@gmail.com': {
        name: 'Ayden'
    }
};



//setting up firebase stuff VVV
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore');

const serviceAccount = require('../ayden-s-tech-blog-firebase-adminsdk-7sbwz-b082735b48.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

//setting up express stuff VVV
const PORT = process.env.PORT || 3001;
const app = express();

const RECENT_ARTICLE_COUNT = 5;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    db.collection('posts').get().then(res2 => {
        let responseArr = [];
        res2.forEach(doc => {
            responseArr.push(doc.data());
        })
        // console.log(responseArr);
        res.json({ recentArticles: responseArr })
    })
});

app.post("/api/createArticle", jsonParser, (req, res) => {
    console.log(req.body);
    getAuth()
        .verifyIdToken(req.body.authToken)
        .then((decodedToken) => {
            console.log(decodedToken);
            if (Object.keys(ADMIN_EMAILS).includes(decodedToken.email)) {
                return db.collection('posts').add({
                    author: ADMIN_EMAILS[decodedToken.email].name,
                    body: req.body.body,
                    title: req.body.title,
                    date: Timestamp.now()
                })
            }
        })

        .catch((error) => {
            console.log(error);
        })
        .then((result) => {
            console.log(result)

            res.send('POST request sent to createArticle')
        })
});

app.get("/api/recent/:count", (req, res) => {
    // console.log(req.params.count);
    db.collection('posts').get().then(res2 => {
        let responseArr = [];
        res2.forEach(doc => {
            responseArr.push(doc.data());
        })
        // console.log(responseArr);
        res.json({ recentArticles: responseArr })
    })
});

app.get("/api/article", (req, res) => {

});

