import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ post: { id, title, body } }) => {
    // console.log(id)
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show More</Link>
        </div>
    );
};

export default Posts;