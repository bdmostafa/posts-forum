import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comments = ({ title, body }) => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);

    const loadData = () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))

    }
useEffect(loadData, [postId])
    return (
        <div>
            {
                comments && comments.map(comment => 
                <>
                <h3>Name: {comment.name}</h3>
                <h4>Email: {comment.email}</h4>
                <p>{comment.body}</p>
                <hr />
                </>
                )
            }
        </div>
    );
};

export default Comments;