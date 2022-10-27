const express = require("express");
const fs = require('fs');
const path = require('path')
require('dotenv').config()

// const https = require('https');
// const path = require('path');
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
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../ayden-s-tech-blog-firebase-adminsdk-7sbwz-b082735b48.json');

serviceAccount.private_key = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

//setting up express and https stuff VVV

// const httpsOptions = {
//     cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
//     key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
// }

const PORT = process.env.PORT || 3001;
const app = express();

const RECENT_ARTICLE_COUNT = 5;

if (process.env.PROD) {

    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    db.collection('posts').get().then(res2 => {
        let responseArr = [];
        res2.forEach(doc => {
            responseArr.push(doc.data());
        })
        res.json({ recentArticles: responseArr })
    })
});

app.post("/api/createArticle", jsonParser, (req, res) => {
    getAuth()
        .verifyIdToken(req.body.authToken)
        .then((decodedToken) => {
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

    let articleCount = parseInt(req.params.count);

    db.collection('posts').orderBy('date').limitToLast(articleCount).get()
        .then(res2 => {
            let responseArr = [];
            res2.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                responseArr.push(data);
            })
            res.json({ recentArticles: reverseList(responseArr) })
        })
});

app.get("/api/article", (req, res) => {

});

//helper functions

function reverseList(lst) {
    let newList = []

    for (let i = lst.length; i--; i >= 0) {
        newList.push(lst[i])
    }

    return newList

}
