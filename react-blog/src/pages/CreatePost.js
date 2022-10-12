import React from 'react';

function CreatePost() {
    return (<div>
        <p>placeholder</p>
        <button onClick={() => {
            fetch('/api').then(result => {
                document.querySelector('#testText').innerHTML = JSON.stringify(result.json());
                console.log(result)
            })
        }}>Test button</button>
        <p id="testText">test</p>
    </div>)
}

export default CreatePost;