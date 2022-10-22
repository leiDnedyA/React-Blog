import React, { createRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import config from '../config.json'
import { Card } from '../elements/Card';

console.log(config)

function CreatePost() {

    const { currentUser } = useAuth();
    const titleRef = createRef();
    const bodyRef = createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(titleRef.current.value);
        console.log(bodyRef.current.value);

        //sends a POST request to the proxy server API containing the article data and login token
        let xhr = new XMLHttpRequest();
        xhr.open("POST", `${config.api}/createArticle`);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = () => {
            /** POST request complete */
        };

        currentUser.getIdToken(true)
            .then((idToken) => {

                xhr.send(
                    JSON.stringify({
                        authToken: idToken,
                        title: titleRef.current.value,
                        body: bodyRef.current.value
                    })
                )
            }).catch(function (error) {
                console.log("ERROR: token not recieved")
            })
            .then(_ => {
                titleRef.current.value = '';
                bodyRef.current.value = '';
            })


    }

    const getUserEmail = _ => (currentUser !== null ? currentUser.email : 'Undefined');

    return (<Card className="createPostBody">
        <div >
            <h1 className="createPostHeader">Create Post</h1>
            <p>Current user: {getUserEmail()}</p>

            <p><input className="standardInput" type="text" placeholder="title" ref={titleRef}></input></p>
            <p><textarea placeholder="body..." ref={bodyRef} className="createPostTextField"></textarea></p>
            <button onClick={handleSubmit} className="standardButton">Submit</button>
        </div>
    </Card>)
}

export default CreatePost;