import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comments = ({ title, body, comment }) => {

    return (
        <div>

            <h3>Name: {comment.name}</h3>
            <h4>Email: {comment.email}</h4>
            <p>{comment.body}</p>
            <hr />
        </div>

    );
};

export default Comments;