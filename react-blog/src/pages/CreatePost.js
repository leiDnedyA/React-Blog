import React, { createRef } from 'react';
import { useAuth } from '../contexts/AuthContext';

function CreatePost() {

    const { currentUser } = useAuth();
    const titleRef = createRef();
    const bodyRef = createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(titleRef.current.value);
        console.log(bodyRef.current.value)
    }

    const getUserEmail = _ => (currentUser !== null ? currentUser.email : 'Undefined');

    return (<div>
        <h1>Create Post</h1>
        <p>Current user: {getUserEmail()}</p>

        <p><input type="text" placeholder="title" ref={titleRef}></input></p>
        <p><textarea placeholder="body..." ref={bodyRef}></textarea></p>
        <button onClick={handleSubmit}>Submit</button>
    </div>)
}

export default CreatePost;