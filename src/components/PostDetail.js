import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';

const PostDetail = () => {
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({})

    const loadData = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))

    }

    useEffect(loadData, [postId])

    const { title, body } = postDetail;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
             <Link to={`/comments/${postId}`}> <button>Comments</button></Link>
             <Comments />
        </div>
    );
};

export default PostDetail;